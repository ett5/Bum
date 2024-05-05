import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../Models/Message';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
url="https://localhost:7061/api/Message"
//  MessageList: Message[]=[

//   { 
//     Id: 1,
//     Text:"יש לך חוב",
//     To: 2,
//     From :1, 
//     Start: new Date('2024-05-05'),
//     End :new Date('2024-05-07'),}, { 
//       Id: 2,
//       Text:"יש לך חוב",
//       To: 1,
//       From :2, 
//       Start: new Date('2024-05-05'),
//       End :new Date('2024-05-07'),}, { 
//         Id: 3,
//         Text:"יש לך חוב",
//         To: 1,
//         From :1, 
//         Start: new Date('2024-05-05'),
//         End :new Date('2024-05-07'),}
// ];  


constructor(private http: HttpClient) { }
  Post(m:Message):Observable<Message>{
    return this.http.post<Message>(this.url+'/Post',m)
  }
  GetMessagesToneighbor():Observable<Message[]>{
    return this.http.get<Message[]>(this.url+"/get")
  }
  GetPublicMessages():Observable< Message[]>{
    return this.http.get<Message[]>(this.url);
  }
  

}
