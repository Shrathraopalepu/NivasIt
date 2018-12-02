import { Component } from '@angular/core';
import { EmailServices } from '../DetailsServices/email.services';

@Component({
    selector: 'contactus',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent {
    constructor(private emailservice: EmailServices) { }
    public onSubmit(values: any) {
        debugger
        console.log(values);
        this.emailservice.Sendmail(values);
    }
}
