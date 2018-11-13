import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';
import { FacultyRegisterComponent } from './components/facultyregister/facultyregister.component';
import { StudentRegisterComponent } from './components/studentregister/studentregister.component';
import { ProjectSupportComponent } from './components/projectsupport/projectsupport.component';
import { ContactUsComponent } from './components/contactus/contactus.component';

//import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CoursesComponent,
        FetchDataComponent,
        HomeComponent,
        AboutUsComponent,
        FacultyRegisterComponent,
        StudentRegisterComponent,
        ProjectSupportComponent,
        ContactUsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'courses', component: CoursesComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'AboutUs', component: AboutUsComponent },
            { path: 'StudentRegister', component: StudentRegisterComponent },
            { path: 'FacultyRegister', component: FacultyRegisterComponent },
            { path: 'ProjectSupport', component: ProjectSupportComponent },
            { path: 'ContactUs', component: ContactUsComponent },
            { path: '**', redirectTo: 'home' }
		]),
		//SlideshowModule
    ]
})
export class AppModuleShared {
}
