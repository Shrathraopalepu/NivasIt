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
    private keyword :string[]; 
    public courseNmme: string;
    public imageUrl: string;

    constructor(private detailsService: DetailsServices, private http: Http) {

    }
    
    ngOnInit() {

        //  this.Details=this.details.getDetails();
        debugger;
      this.Details().subscribe(data =>
            this.details = data,
            error => console.log(error));


    
       
        console.log(this.details);
       // this.imageUrl = this.details.ImageUrl;
       // console.log(this.details.ImageUrl);
    }

    public Details(): Observable<IDetailsConversion> {//
		this.courseNmme = this.detailsService.getValue;
       // return this.http.get(this._url).map((resp:Response) =>resp.json());
        return this.http.get(this._url).map(response => {
            debugger;
            let data = response.json();
            let detailsConversion = data as IDetailsConversion[];
            return detailsConversion;
        }).concatMap(array => Observable.from(array)).filter(fil => {
            debugger;
			return this.courseNmme==fil.CourseName;
            });

    }

    public onclickss() {
        //on clcik the this details from the json file i.e, should be displayed
        debugger;
        this.courseNmme = this.detailsService.getValue;

        this.keyword = this.details.KeyFeatures;

    }

   
}
