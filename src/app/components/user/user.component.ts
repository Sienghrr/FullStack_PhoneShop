import { Component, OnInit } from '@angular/core';
import{FormArray, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm!:FormGroup;
  roleNames=["Sale","Account"]
  constructor(private fb: FormBuilder){
  }
  get roles(){
    return this.userForm.get('roles') as FormArray;
  }
  ngOnInit(): void {
    this.userForm=this.fb.group({ 
      username:[''],
      email:[''],
      password:[''],
      roles: this.fb.array([])  // Add more fields as per your requirement
    })
    for(let i of this.roleNames){
      this.roles.push(this.fb.control(''))
  
    }
  }
  saveUser(){
    let data = this.userForm.value;
    let selectedRoles = [];
    for(let i = 0 ; i < data.roles.length ; i++){
      if(data.roles[i]){
        selectedRoles.push(this.roleNames[i])
      }

    }
    data.roles = selectedRoles
    console.log(data)
  }
  

}
