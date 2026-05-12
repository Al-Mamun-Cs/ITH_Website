import { Employee } from "./Employee";

export interface IEmployeePagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: Employee[];
    permission: any;
}
export class EmployeePagination implements IEmployeePagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: Employee[] = [];
    permission: any;

}
