import { Component } from '@angular/core';
import { DetailsServices } from '../DetailsServices/details.services';
import { Router} from '@angular/router';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
    constructor(private detailsServices:DetailsServices,private router:Router) {

    }
    navigateintopage(datas: string) {
        debugger;
        this.detailsServices.Set(datas);
        this.router.navigate(['/courses/details']);
    }
}
