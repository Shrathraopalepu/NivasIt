import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class EmailServices{
    constructor(private http:Http) {
    }
    public Sendmail(object: any) {
        debugger;

        var i = this.http.post('http://localhost:56765/api/Email', object);
        console.log(i);
    }
    
}
