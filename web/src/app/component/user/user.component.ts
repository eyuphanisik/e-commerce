import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }
  users : User[] = []
  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    return this.userService.getAll().subscribe(response =>{
      
      this.users = response.users;
    });
  }
}
