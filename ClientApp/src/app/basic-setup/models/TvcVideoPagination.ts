import { TvcVideo } from "./TvcVideo";

export interface ITvcVideoPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: TvcVideo[];
    permission: any;
}
export class TvcVideoPagination implements ITvcVideoPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: TvcVideo[] = [];
    permission: any;

}
