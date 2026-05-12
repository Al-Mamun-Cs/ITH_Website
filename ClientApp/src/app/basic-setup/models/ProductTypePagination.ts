import { ProductType } from "./ProductType";

export interface IProductTypePagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: ProductType[];
    permission: any;
}
export class ProductTypePagination implements IProductTypePagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: ProductType[] = [];

    permission: any;
}
