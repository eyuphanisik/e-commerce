import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { CategoryResponseModel } from '../model/CategoryResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl : string = "http://localhost:8085/api/category/"
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<CategoryResponseModel>(this.apiUrl + "getall");
  }

}
