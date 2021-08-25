import {Category} from './category';
import {CategoryList} from './category-list';

export class Product {
    id : number;
    code : string;
    name : string;
    thumbnail : string;
    price : number;
    status : string;
    totalQty : number;
    currentQty : number;
    createDate : string;
    categories : CategoryList[]
}
