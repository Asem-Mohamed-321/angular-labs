import { Component } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserItemComponent } from '../user-item/user-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  imports: [UserItemComponent,CommonModule],
  providers: [MyServiceService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users : any = [];
  constructor( public useService : MyServiceService){}
  ngOnInit(){
    console.log(this.useService.getUSers().subscribe((data)=>{this.users = data;console.log(this.users);},(err)=>{console.log(err)}))
  }
}
