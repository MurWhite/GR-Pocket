import { BillType } from "./enum";

export interface Bill {
    type: BillType;
}

export interface MonthBillSum {
    year: number;
    month: number;
    bills: Bill[];
}
