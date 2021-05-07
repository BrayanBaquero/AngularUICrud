import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() st:any;//Entrada de datos definidos en el template
  id:string="";
  name:string="";
  email:string="";
  deparment:string="";

  ngOnInit(): void {
    this.id=this.st.id;
    this.name=this.st.Name;
    this.email=this.st.Email;
    this.deparment=this.st.Deparment;
  }

  addEmployee(){
    var val={
      id:this.id,
      Name:this.name,
      Email:this.email,
      Deparment:this.deparment
    };
    this.service.addEmployee(val).subscribe();
  }

  updateEmployee(){
    var val={
      //id:this.id,
      Name:this.name,
      Email:this.email,
      Deparment:this.deparment
    };
    this.service.UpdateEmployee(this.id,val).subscribe(res=>{
      console.log("Respuesta:",res);
    });
  }

}
