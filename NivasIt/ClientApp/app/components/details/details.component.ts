import { Component, OnInit } from '@angular/core';

import { Http ,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IDetailsConversion } from '../../Shared/detailsconversion';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/from';
import { DetailsServices } from '../DetailsServices/details.services';

@Component({
    selector: 'coursedetails',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    private _url = '/Data/DataOfCourses.json';
    private details: IDetailsConversion;
  
    public id: string;

    constructor(private detailsService: DetailsServices, private http: Http) {

    }
    
    ngOnInit() {

      //  this.Details=this.details.getDetails();
        
      this.Details().subscribe(data =>
            this.details = data,
            error => console.log(error));
       
        console.log(this.details)
    }

    public Details(): Observable<IDetailsConversion> {//
        this.id = this.detailsService.getValue;
       // return this.http.get(this._url).map((resp:Response) =>resp.json());
        return this.http.get(this._url).map(response => {
            let data = response.json();
            let detailsConversion = data as IDetailsConversion[];
            return detailsConversion;
        }).concatMap(array => Observable.from(array)).filter(fil => {
            debugger;
            return this.id.includes(fil.coursename);
            });

    }

}
