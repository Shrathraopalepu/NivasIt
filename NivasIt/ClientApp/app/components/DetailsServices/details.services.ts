import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class DetailsServices{
    public getValue: string;
    constructor(private http:Http) {
	}
	
    public Set(id: string) {

        this.getValue = id;
    }
}
