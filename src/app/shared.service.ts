import { Injectable } from '@angular/core';

import{HttpClient}from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44386/api"
  constructor(private http:HttpClient) { }

  getStudentsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/student');
  }
  getStudent(val:any){
    return this.http.get<any>(this.APIUrl+'/student/'+val)
  }

  addStudent(val:any){
    return this.http.post(this.APIUrl+'/student',val);
  }
  UpdateStudent(id:any,val:any){
    return this.http.put(this.APIUrl+'/student/'+id,val);
  }
  DeleteStudent(val:any){
    return this.http.delete(this.APIUrl+'/student/'+val);
  }
}
