import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonNameComponent } from './person-name/person-name.component';
import { MailingAddressComponent } from './mailing-address/mailing-address.component';
import { LocationComponent } from './location/location.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { EmailAddressComponent } from './email-address/email-address.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonNameComponent,
    MailingAddressComponent,
    LocationComponent,
    PhoneNumberComponent,
    EmailAddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
