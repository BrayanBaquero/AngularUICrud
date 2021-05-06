import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  constructor(private service:SharedService) { }
  Students:any=[];
  ModalTitle:string="";
  ActivateAddEditStudentComp:boolean=false;
  st:any;

  StudentIdFilter:string="";
  StudentNameFilter:string="";
  StudentListWithoutFilter:any;


  ngOnInit(): void {
    this.refreshStudents();
  }

  addClick(){
    this.st={
      id:0,
      name:"",
      lastName:"",
      age:0,
      phoneNumber:"",
      city:"",
      email:""
    }
    this.ModalTitle="Add Student";
    this.ActivateAddEditStudentComp=true;
  }
  closeClick(){
    this.ActivateAddEditStudentComp=false;
    this.refreshStudents();
  }
  editClick(item:any){
    this.st=item;
    this.ModalTitle="Edit Student";
    this.ActivateAddEditStudentComp=true;
  }
  deleteClick(item:any){
    if(confirm("Are you Sure??"))
    {
        this.service.DeleteStudent(item.id).subscribe(resp=>{
        console.log(resp);
        this.refreshStudents();
      });
      
    }
  }
  refreshStudents(){
    this.service.getStudentsList().subscribe(data=>{
      this.Students=data;
      this.StudentListWithoutFilter=data;
    });
  }
//Filtro para buscar en tabla
  FilterFn(){
    var StudentIdFilter=this.StudentIdFilter;
    var StudentNameFilter=this.StudentNameFilter;

    this.Students=this.StudentListWithoutFilter.filter(function(el:any){
      return el.id.toString().toLowerCase().includes(StudentIdFilter.toString().trim().toLowerCase())&&
      el.Name.toString().toLowerCase().includes(StudentNameFilter.toString().trim().toLowerCase())
    });
  }
  sortResult(prop:any,acs:any){
    this.Students=this.StudentListWithoutFilter.sort(function(a:any,b:any){
      if(acs){
        return (a[prop]>b[prop])?1:((a[prop]<b[prop]) ?-1:0);
      }else{
        return (b[prop]>a[prop])?1:((b[prop]<a[prop]) ?-1:0);
      }
    })
  }
   
}
