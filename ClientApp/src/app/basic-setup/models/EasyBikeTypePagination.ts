import { EasyBikeType } from "./EasyBikeType";

export interface IEasyBikeTypePagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: EasyBikeType[];
    permission: any;
}
export class EasyBikeTypePagination implements IEasyBikeTypePagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: EasyBikeType[] = [];
    permission: any;

}
