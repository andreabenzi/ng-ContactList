import { Component, OnInit } from '@angular/core';
import {ContactService} from './../services/contact.service';
import {UtilService} from './../services/util.service';

@Component({
  selector: 'app-contact-listing',
  templateUrl: './contact-listing.component.html',
  styleUrls: ['./contact-listing.component.sass']
})
export class ContactListingComponent implements OnInit {

  contacts:Array<any>;
  error:String;
  sortField: string = 'surname';
  sortFields:Array<string> = [
    'name',
    'surname'
  ];
  sortDirection:String = 'asc';
  
  constructor(
  	private contactService: ContactService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {

  	this.contactService.getAllContacts().subscribe(
  			data => this.contacts = data,
  			error => this.error = error.statusText
  	  );
  }

}
