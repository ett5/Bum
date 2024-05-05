import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NeighborsService } from 'src/app/Services/neighbors.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // form:FormGroup =this .fb.group({
  //   username:['',Validators.required],
  //   password:['',Validators.required]
  // })
  constructor(private neighborsService :NeighborsService ,private fb:FormBuilder,private router:Router ){}
  login(){
// let user=this.neighborsService.login(
//   this.form.value.username,
//   this.form.value.password
// );
// if(!user){
//   alert("הפרטים שגויים נסה שנית")
// }
// else{
//   //לבדוק משתמש
//   this.router.navigateByUrl('/admin')
// }
   }
}
