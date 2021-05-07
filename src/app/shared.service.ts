import { Injectable } from '@angular/core';

import{HttpClient}from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:8080/api"
  constructor(private http:HttpClient) { }

  getEmployeesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employee');
  }
  getEmployee(val:any){
    return this.http.get<any>(this.APIUrl+'/employee/'+val)
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/employee',val);
  }
  UpdateEmployee(id:any,val:any){
    return this.http.put(this.APIUrl+'/employee/'+id,val);
  }
  DeleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/employee/'+val);
  }
}
