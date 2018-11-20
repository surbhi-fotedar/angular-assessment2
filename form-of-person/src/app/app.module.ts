import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonNameComponent } from './person-name/person-name.component';
import { MailingAddressComponent } from './mailing-address/mailing-address.component';
import { LocationComponent } from './location/location.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { EmailAddressComponent } from './email-address/email-address.component';
import { PersonComponenetValidation } from './person-componenet-validation/person-componenet-validation';

@NgModule({
  declarations: [
    AppComponent,
    PersonNameComponent,
    MailingAddressComponent,
    LocationComponent,
    PhoneNumberComponent,
    EmailAddressComponent,
    PersonComponenetValidation
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
