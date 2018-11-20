import { Component, OnInit } from '@angular/core';

import { Http ,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IDetailsConversion } from '../../Shared/detailsconversion';
import 'rxjs/add/operator/map';

@Component({
    selector: 'coursedetails',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    private _url = '/Data/DataOfCourses.json';
    private details: IDetailsConversion[] ;
    constructor(private http: Http) {

    }
    
    ngOnInit() {

        //this.Details=this.details.getDetails();
      this.Details().subscribe(data =>
            this.details = data,
            error => console.log(error));
        //console.log(this.details)
    }

    public Details(): Observable< IDetailsConversion[]> {

        return this.http.get(this._url).map((resp:Response) =>resp.json());
    }

}
