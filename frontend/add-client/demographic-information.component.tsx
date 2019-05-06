import React, { useState } from "react";
import { StepComponentProps, Step } from "./add-client.component";
import demographicIconUrl from "../../icons/148705-essential-collection/svg/resume.svg";
import CountrySelect from "../util/country-select.component";
import CurrencyInput from "../util/currency-input.component";

export default function DemographicInformation(props: StepComponentProps) {
  const [civilStatus, setCivilStatus] = useState(CivilStatus.SINGLE);
  const [annualIncome, setAnnualIncome] = useState();
  const [householdSize, setHouseholdSize] = useState();
  const [currentlyEmployed, setCurrentlyEmployed] = useState("");
  const [weeklyEmployedHours, setWeeklyEmployedHours] = useState();
  const [employmentSector, setEmploymentSector] = useState("");
  const [empSectorExplain, setEmpSectorExplain] = useState("");
  const [payInterval, setPayInterval] = useState(PayInterval.BIWEEKLY);
  const [countryOfOrigin, setCountryOfOrigin] = useState("US");
  const [dateUSArrival, setdateUSArrival] = useState("");
  const [primaryLanguage, setPrimaryLanguage] = useState("Spanish");
  const [otherLanguage, setOtherLanguage] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [englishLevel, setEnglishLevel] = useState(EnglishLevel.INTERMEDIATE);
  const [eligibleToVote, setEligibleToVote] = useState(false);

  return (
    <>
      <div className="hints-and-instructions">
        <div>
          <img src={demographicIconUrl} className="hint-icon" />
        </div>
        <div className="instruction">
          Almost done, now add demographic information for{" "}
          <strong>
            {props.clientState.firstName} {props.clientState.lastName}
          </strong>
          .
        </div>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label>
            <span>Civil status</span>
            <select
              value={civilStatus}
              name="civilStatus"
              onChange={evt => setCivilStatus(CivilStatus[evt.target.value])}
              required
              autoFocus
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="commonLawMarriage">
                Common law marriage (unión libre)
              </option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>Approximate annual income (including spouse)</span>
            <CurrencyInput setDollars={setAnnualIncome} required />
          </label>
        </div>
        <div>
          <label>
            <span>Household size</span>
            <input
              type="number"
              onChange={evt => setHouseholdSize(Number(evt.target.value))}
              required
              min="1"
              max="30"
            />
          </label>
        </div>
        <div>
          <label>
            <span>Are they a eligible to vote?</span>
            <div className="radio-options">
              <div>
                <label>
                  <input
                    type="radio"
                    name="eligible-to-vote"
                    value="true"
                    onChange={() => setEligibleToVote(true)}
                    checked={eligibleToVote}
                  />
                  Eligible to vote
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="eligible-to-vote"
                    value="false"
                    onChange={() => setEligibleToVote(false)}
                    checked={!eligibleToVote}
                  />
                  Not eligible to vote
                </label>
              </div>
            </div>
          </label>
        </div>
        <div>
          <label>
            <span>Are they a student?</span>
            <div className="radio-options">
              <div>
                <label>
                  <input
                    type="radio"
                    name="student"
                    value="true"
                    onChange={() => setIsStudent(true)}
                    checked={isStudent}
                  />
                  Student
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="student"
                    value="false"
                    onChange={() => setIsStudent(false)}
                    checked={!isStudent}
                  />
                  Not student
                </label>
              </div>
            </div>
          </label>
        </div>
        <div>
          <label>
            <span>Currently employed?</span>
            <select
              value={currentlyEmployed}
              name="currentlyEmployed"
              onChange={evt => setCurrentlyEmployed(evt.target.value)}
              required
            >
              <option>Select One</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Applicable">Not Applicable</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
        </div>
        {currentlyEmployed == "Yes" && (
          <>
            <div>
              <label>
                <span>Employment sector</span>
                <select
                  value={employmentSector}
                  name="employmentSector"
                  onChange={evt => setEmploymentSector(evt.target.value)}
                  required
                >
                  <option>Select one</option>
                  <option value="landscaping">Landscaping/Gardening</option>
                  <option value="construction">Construction</option>
                  <option value="services">
                    Services (Restaurants, Hotels)
                  </option>
                  <option value="dayLaborer">Day Worker/Laborer</option>
                  <option value="domesticWorker">Domestic Worker</option>
                  <option value="industrial">Industrial/Warehouse</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="other">Other (Explain)</option>
                </select>
              </label>
            </div>
            {employmentSector == "other" && (
              <div>
                <label>
                  <span>If other, please describe</span>
                  <input
                    type="text"
                    onChange={evt => setEmpSectorExplain(evt.target.value)}
                    required
                  />
                </label>
              </div>
            )}
            <div>
              <label>
                <span>Pay interval</span>
                <select
                  required
                  value={payInterval}
                  onChange={evt =>
                    setPayInterval(PayInterval[evt.target.value])
                  }
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Biweekly">Every two weeks</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly (3 months)</option>
                  <option value="Annually">Annually (1 year)</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                <span>Average weekly hours worked</span>
                <select
                  required
                  onChange={evt => setWeeklyEmployedHours(evt.target.value)}
                  value={weeklyEmployedHours}
                >
                  <option>Select one</option>
                  <option value="20 or less">20 or less</option>
                  <option value="21 to 35">21 to 35</option>
                  <option value="36 to 40">36 to 40</option>
                  <option value="41 or more">41 or more</option>
                </select>
              </label>
            </div>
          </>
        )}
        <div>
          <label>
            <span>Country of origin</span>
            <CountrySelect
              country={countryOfOrigin}
              setCountry={setCountryOfOrigin}
            />
          </label>
        </div>
        {countryOfOrigin !== "US" && (
          <div>
            <label>
              <span>Date of U.S. Arrival</span>
              <input
                required
                type="date"
                value={dateUSArrival}
                onChange={evt => setdateUSArrival(evt.target.value)}
              />
            </label>
          </div>
        )}
        <div>
          <label>
            <span>Primary language at home</span>
            <select
              required
              name="primaryLanguage"
              value={primaryLanguage}
              onChange={evt => setPrimaryLanguage(evt.target.value)}
            >
              <option value="spanish">Spanish</option>
              <option value="english">English</option>
              <option value="english-and-spanish">English and Spanish</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        {primaryLanguage === "Other" && (
          <div>
            <label>
              <span>Other language</span>
              <input
                required
                type="text"
                value={otherLanguage}
                onChange={evt => setOtherLanguage(evt.target.value)}
              />
            </label>
          </div>
        )}
        <div>
          <label>
            <span>English level</span>
            <select
              required
              value={englishLevel}
              onChange={evt => setEnglishLevel(EnglishLevel[evt.target.value])}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </label>
        </div>
        <div className="actions">
          <button
            type="button"
            className="secondary"
            onClick={() => props.goBack(Step.CONTACT_INFORMATION)}
          >
            Go back
          </button>
          <button type="submit" className="primary">
            Next step
          </button>
        </div>
      </form>
    </>
  );
  function handleSubmit(evt) {
    evt.preventDefault();
    props.nextStep(Step.CLIENT_SOURCE, {
      civilStatus,
      countryOfOrigin,
      dateUSArrival,
      primaryLanguage:
        primaryLanguage === "other" ? otherLanguage : primaryLanguage,
      englishLevel,
      currentlyEmployed,
      employmentSector:
        employmentSector === "Other" ? empSectorExplain : employmentSector,
      payInterval,
      weeklyEmployedHours,
      annualIncome,
      householdSize,
      isStudent,
      eligibleToVote
    });
  }
}

export enum CivilStatus {
  SINGLE = "single",
  MARRIED = "married",
  COMMON_LAW_MARRIAGE = "commonLawMarriage",
  DIVORCED = "divorced",
  WIDOWED = "widowed"
}
export enum EnglishLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced"
}
export enum PayInterval {
  WEEKLY = "weekly",
  BIWEEKLY = "biweekly",
  MONTHLY = "monthly",
  QUARTERLY = "quarterly",
  ANNUALLY = "annually"
}
