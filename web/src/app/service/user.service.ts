import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponseModel } from '../model/UserResponseModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<UserResponseModel>("localhost:8085/api/users/find-all");
  }
}
