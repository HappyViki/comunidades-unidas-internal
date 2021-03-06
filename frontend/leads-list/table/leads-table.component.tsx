import React from "react";
import {
  LeadListLead,
  SortField,
  SortOrder,
  SelectedLeads,
} from "../lead-list.component";
import DesktopLeadsTable from "./desktop-leads-table.component";
import { CUEventSource } from "../../view-edit-lead/view-lead.component";

export default function LeadsTable(props: LeadsTableProps) {
  return <DesktopLeadsTable {...props} />;
}

export type LeadsTableProps = {
  leads: LeadListLead[];
  fetchingLeads: boolean;
  page: number;
  newSortOrder: (sortField: SortField, sortOrder: SortOrder) => any;
  sortField: SortField;
  sortOrder: SortOrder;
  selectedLeads: SelectedLeads;
  setSelectedLeads: (selectedLeads: SelectedLeads) => any;
  programData: any;
  events: Array<CUEventSource>;
  advancedSearchOpen: boolean;
};
