import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../model/ProductResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl : string = "http://localhost:8085/api/products/";
  constructor(private httpClient:HttpClient) { }
  
  getProduct():Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl + "getall");
  }
  setCurrentCategory(id:number){
    return this.httpClient.get<ProductResponseModel>(this.apiUrl + "getbyCategoryid/" + id)
  }
}
