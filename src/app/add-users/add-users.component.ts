import { Component, NgModule } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-users',
  imports: [FormsModule],
  providers: [MyServiceService],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css'
})
export class AddUsersComponent {
  id :any ;
  userName = "";
  userEmail = "";
  userAge = "";
  constructor(public useService : MyServiceService , private router: Router){}
  ngOnInit(){
    this.useService.getUSers().subscribe((data : any)=>{this.id =parseInt(data[data.length -1]["id"])+1}) //getting the last id in the database
  }
  addUser(){
    this.useService.addUser({"id" : this.id.toString(),"name" : this.userName , "email" : this.userEmail , "Age" : this.userAge}).subscribe();
    this.id++;
    this.router.navigate(['/users']);
    // console.log(this.userName,this.userEmail,this.userAge)
    
  }
}
