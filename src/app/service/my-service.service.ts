import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http : HttpClient) { }
  getUSers(){

    return this.http.get("http://localhost:3000/all")
  }
  addUser(user : any){
    return this.http.post("http://localhost:3000/all",user)
  }
  getUserData(id:any){
    return this.http.get("http://localhost:3000/all/"+id)
  }
}
