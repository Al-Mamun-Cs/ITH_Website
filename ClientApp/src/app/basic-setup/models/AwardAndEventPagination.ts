import { AwardAndEvent } from "./AwardAndEvent";

export interface IAwardAndEventPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: AwardAndEvent[];
    permission: any;
}
export class AwardAndEventPagination implements IAwardAndEventPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: AwardAndEvent[] = [];
    permission: any;

}
