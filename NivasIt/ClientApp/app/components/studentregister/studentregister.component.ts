import { Component } from '@angular/core';
import { StudentRegister } from '../DetailsServices/studentregister.services';
//import { StudentRegister } from '../../StudentRegister';
//import { NgForm } from '@angular/forms';

@Component({
    selector: 'studentregister',
    templateUrl: './studentregister.component.html',
    styleUrls: ['./studentregister.component.css']
})
export class StudentRegisterComponent {

    constructor(private studentregister: StudentRegister) { }
    public onSubmit(values: any) {
       
        console.log(values);
        this.studentregister.StoreStudent(values);
    }

}
