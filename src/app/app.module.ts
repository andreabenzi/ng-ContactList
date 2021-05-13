import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactListingComponent } from './contact-listing/contact-listing.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactService } from './services/contact.service';
import { UtilService } from './services/util.service';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListingComponent,
    ContactCardComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ContactService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
