import { Component } from '@angular/core';
import { EmailServices } from '../DetailsServices/email.services';
//import { StudentRegister } from '../../StudentRegister';
//import { NgForm } from '@angular/forms';

@Component({
    selector: 'studentregister',
    templateUrl: './studentregister.component.html',
    styleUrls: ['./studentregister.component.css']
})
export class StudentRegisterComponent {

    constructor(private emailServices:EmailServices) { }
    public onSubmit(values: any) {
        //this.studentregister.name = values.name;
        //this.studentregister.phone = values.phone;
        //this.studentregister.email = values.email;
        //this.studentregister.message = values.message;
        //this.studentregister.location = values.location;
        //console.log(this.studentregister);
        console.log(values);
        this.emailServices.Sendmail(values);
    }

}
