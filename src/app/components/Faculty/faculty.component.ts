import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  title = 'Admin';
  Faculties= [
    {id:601, name:"Avinash",  department:"SQL", address:"Hyd"},
    {id:602, name:"Vikrant", department:"SQL",  address:"Blr"},
    {id:603, name:"Sandip",  department:"SQL", address:"Mlr"}
  ];
  model:any={};
  model2:any={};
  msg:any="";
  addfaculty(){
    this.Faculties.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... "; 

  }
  deleteFaculty(i:any){
    this.Faculties.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }
  myValue:any;
  editFaculty(k:any){
    this.model2.name = this.Faculties[k].name;
    this.model2.position = this.Faculties[k].department;
    this.myValue = k;

  }
  updateFaculty(){
    let k= this.myValue;
    for(let i=0; i<this.Faculties.length;i++){
      if(i==k){
        this.Faculties[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }
}
