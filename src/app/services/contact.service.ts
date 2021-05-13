import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts:Array<any>;
  error:String;

  public newCribSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getAllContacts(){
  	return this.http.get<any>('data/contacts.json');
  }

}
