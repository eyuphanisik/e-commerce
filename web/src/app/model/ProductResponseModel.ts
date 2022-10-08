import { Product } from "./Product";
import { ResponseModel } from "./ResponseModel";

export interface ProductResponseModel{
    data:Product[]
    message : string
    success : boolean
}