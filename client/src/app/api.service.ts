import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ApiService {

API_URL : string = "";
origin : string = document.location.origin;
  constructor(public http: HttpClient) { 
    if(this.origin.includes("localhost")){
          this.API_URL = "http://localhost:3000/"
    }else{
          console.log(this.origin);
    }
  }

  // read method    
  public get(path) {

      var endpoint = this.API_URL + path;
      return this.http.get(endpoint);

  }

  // create method 
  public post(path:string,body:any) {

      var endpoint = this.API_URL + path;
      return this.http.post(endpoint,body);

  }
  // delete method    
  public delete(path:string){

    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);

  }  
  // update method    
  public update(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.put(endpoint,body);
  }

}
