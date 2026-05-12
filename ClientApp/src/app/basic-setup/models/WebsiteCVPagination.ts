import { WebsiteCV } from "./WebsiteCV";

export interface IWebsiteCVPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: WebsiteCV[];
    permission: any;
}
export class WebsiteCVPagination implements IWebsiteCVPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: WebsiteCV[] = [];
    permission: any;

}
