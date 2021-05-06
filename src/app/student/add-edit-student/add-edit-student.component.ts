import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() st:any;
  id:string="";
  name:string="";
  lastName:string="";
  age:number=0;
  phoneNumber:string="";
  city:string="";
  email:string="";

  ngOnInit(): void {
    this.id=this.st.id;
    this.name=this.st.Name;
    this.lastName=this.st.LastName;
    this.age=this.st.Age;
    this.phoneNumber=this.st.PhoneNumber;
    this.city=this.st.City;
    this.email=this.st.Email;
  }

  addStudent(){
    var val={
      id:this.id,
      Name:this.name,
      LastName:this.lastName,
      Age:this.age,
      PhoneNumber:this.phoneNumber,
      City:this.city,
      Email:this.email
    };
    this.service.addStudent(val).subscribe();
  }

  updateStudent(){
    var val={
      //id:this.id,
      Name:this.name,
      LastName:this.lastName,
      Age:this.age,
      PhoneNumber:this.phoneNumber,
      City:this.city,
      Email:this.email
    };
    this.service.UpdateStudent(this.id,val).subscribe(res=>{
      console.log("Respuesta:",res);
    });
  }

}
