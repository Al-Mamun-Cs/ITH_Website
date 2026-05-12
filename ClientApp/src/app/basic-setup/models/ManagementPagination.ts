import { Management } from "./Management";

export interface IManagementPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: Management[];
    permission: any;
}
export class ManagementPagination implements IManagementPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: Management[] = [];
    permission: any;

}
