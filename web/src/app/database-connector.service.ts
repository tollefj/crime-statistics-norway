import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

//All connections and responses from database is put here. 
@Injectable()
export class DatabaseConnectorService {
  
  constructor(private http: HttpClient) {}

  //Returns true if new user is created false otherwise. 
  newUser(username: string, password: string){
    
    let body =  {
      "username" : username,
      "password" : password,
    }; 
    return this.http.post('http://localhost:8084/account/registrate', body)
  }

  //Checks if right username and password is added, returns a object to the component. 
  logIn(username: string, password: string){
    
    let body =  {
      "username" : username,
      "password" : password,
    };
    return this.http.post('http://localhost:8084/account/login', body);
  }

  setPreviousSearch(search: string){
    //TODO: Add new search from user to database. 
  }

  getPreviousSearches(){
    //TODO: Make method that returns list with previous searches. 
  }
}
