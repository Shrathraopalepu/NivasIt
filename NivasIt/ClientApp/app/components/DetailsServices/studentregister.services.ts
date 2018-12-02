import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//const httpOptions = {
//	headers: new Headers({
//		'Content-Type': 'application/json',
//	})
//};
@Injectable()
export class StudentRegister{
    constructor(private http:Http) {
	}
	private url = 'http://localhost:60149/api/';
    public StoreStudent(object: any) {
        debugger;
        this.http.post(this.url + "StudentRegister", object).map(x => x.json()).subscribe(x => {
			debugger
			var sha = x;
		});
		//var i = this.http.post(this.url + "Email", object, httpOptions).map(x => x.json()).subscribe(x => {
		//	debugger
		//	var sha = x;
		//});        
    }
    
}
