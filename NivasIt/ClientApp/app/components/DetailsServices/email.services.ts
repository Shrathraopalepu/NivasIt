import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//const httpOptions = {
//	headers: new Headers({
//		'Content-Type': 'application/json',
//	})
//};
@Injectable()
export class EmailServices{
    constructor(private http:Http) {
	}
	private url = 'http://localhost:56765/api/';
    public Sendmail(object: any) {
        debugger;
		this.http.post(this.url + "Email", object).map(x => x.json()).subscribe(x => {
			debugger
			var sha = x;
		});
		//var i = this.http.post(this.url + "Email", object, httpOptions).map(x => x.json()).subscribe(x => {
		//	debugger
		//	var sha = x;
		//});        
    }
    
}
