// What a visitor can report as wrong on a place page (IssueReport.kind).
export const REPORT_KINDS = ["hours", "phone", "address", "website", "prices", "closed", "other"] as const;
export type ReportKind = (typeof REPORT_KINDS)[number];
