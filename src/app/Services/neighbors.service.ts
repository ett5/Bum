import { Injectable } from '@angular/core';
import { Neighbors } from '../Models/Neighbors';

@Injectable({
  providedIn: 'root'
})
export class NeighborsService {
  users:any[]=[{//לכאן צריך למלאות את שמות השכנים והסיסמאות
    username:'eti',
    password:'11'
  }];
  neighor:Neighbors[]=[{
    Id: 1,
    LastName:'avni',
    ApartmentNum :1,
    NumPersons: 12,
    Profil:true
  }]
  session:any;
  constructor() { }


  // login(username:string,password:string){
  //   let user=this.neighbrs.find(
  //     (u)=>u.username===username&& u.password===password
  //   );
  //   if(user){
  //     //להעביר לסרבר ורק יחזיר יוזר ולבדוק פה האם הוא מנהל
  //     this.session=user
  //   }
  //   return user;
  // }
}
