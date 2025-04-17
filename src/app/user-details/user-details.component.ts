import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../service/my-service.service';



@Component({
  selector: 'app-user-details',
  imports: [],
  providers:[MyServiceService],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userDetails : any ={};

  constructor(private route: ActivatedRoute , public useService : MyServiceService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.useService.getUserData(id).subscribe((data)=>{this.userDetails = data,console.log(this.userDetails)})
  }
}
