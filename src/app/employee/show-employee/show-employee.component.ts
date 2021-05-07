import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private service:SharedService) { }
  Employees:any=[];
  ModalTitle:string="";
  ActivateAddEditEmployeeComp:boolean=false;
  st:any;

  EmployeeIdFilter:string="";
  EmployeeNameFilter:string="";
  EmployeeListWithoutFilter:any;


  ngOnInit(): void {
    this.refreshEmployees();
  }

  addClick(){
    this.st={
      id:0,
      name:"",
      email:"",
      deparment:""
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmployeeComp=true;
  }
  closeClick(){
    this.ActivateAddEditEmployeeComp=false;
    this.refreshEmployees();
  }
  editClick(item:any){
    this.st=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmployeeComp=true;
  }
  deleteClick(item:any){
    if(confirm("Are you Sure??"))
    {
        this.service.DeleteEmployee(item.id).subscribe(resp=>{
        console.log(resp);
        this.refreshEmployees();
      });
      
    }
  }
  refreshEmployees(){
    this.service.getEmployeesList().subscribe(data=>{
      this.Employees=data;
      this.EmployeeListWithoutFilter=data;
    });
  }
//Filtro para buscar en tabla
  FilterFn(){
    var EmployeeIdFilter=this.EmployeeIdFilter;
    var EmployeeNameFilter=this.EmployeeNameFilter;

    this.Employees=this.EmployeeListWithoutFilter.filter(function(el:any){
      return el.id.toString().toLowerCase().includes(EmployeeIdFilter.toString().trim().toLowerCase())&&
      el.Name.toString().toLowerCase().includes(EmployeeNameFilter.toString().trim().toLowerCase())
    });
  }
  sortResult(prop:any,acs:any){
    this.Employees=this.EmployeeListWithoutFilter.sort(function(a:any,b:any){
      if(acs){
        return (a[prop]>b[prop])?1:((a[prop]<b[prop]) ?-1:0);
      }else{
        return (b[prop]>a[prop])?1:((b[prop]<a[prop]) ?-1:0);
      }
    })
  }
   
}
