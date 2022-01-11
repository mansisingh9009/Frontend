import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dashboard } from './dashboard';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  res:Dashboard= new Dashboard
  formValue!:FormGroup
  dashboard:any
  

  constructor(private deptService:DashboardService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      did:['',[Validators.required]],
      dname:['',[Validators.required]],
      desc:['',[Validators.required]],
      noe:['',[Validators.required]],
    })
    this.getDept();
    this.addDept();
    this.deptService.getDeptList();
  }
  getDept(){
    this.deptService.getDeptList().subscribe(data =>{
      console.log(Object.values(data.alldept));
      this.dashboard=data.alldept;
    });
  }
  addDept(){
    this.deptService.addDeptList(this.dashboard).subscribe(data =>{
      this.dashboard=data.alldept;
    });
  }
  addDeptto() {
    this.res.departmentID = this.formValue.value.did;
    this.res.departmentName = this.formValue.value.dname;
    this.res.desc = this.formValue.value.desc;
    this.res.no_of_Emp = this.formValue.value.noe;
    

    this.deptService.addDeptList(this.res).subscribe(data => {
      console.log(data);
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset;
      this.getDept;
    })
    
  }

}
