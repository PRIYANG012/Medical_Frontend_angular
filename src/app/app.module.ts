import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthgaurdserviceService} from './authgaurdservice.service';
import {LOGINAUTHGuard} from './loginauth.guard'
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeguardGuard } from './homeguard.guard';
import { NavbardoctorComponent } from './home/navbardoctor/navbardoctor.component';
import { NavbarAdminComponent } from './home/navbar-admin/navbar-admin.component';
import { PatientListComponent } from './home/patient-list/patient-list.component';
import { DoctorListComponent } from './home/doctor-list/doctor-list.component';
import { ANALYSISComponent } from './home/analysis/analysis.component';

import { AddPatientComponent } from './home/add-patient/add-patient.component';
import { AddDoctorComponent } from './home/add-doctor/add-doctor.component';

import { HttpClientModule } from '@angular/common/http';
import { NavlaboratoryComponent } from './home/navlaboratory/navlaboratory.component';
import { LaboratorydetailsdoctorscheduleComponent } from './home/laboratorydetailsdoctorschedule/laboratorydetailsdoctorschedule.component';
import { LaboratorydetailspatientscheduleComponent } from './home/laboratorydetailspatientschedule/laboratorydetailspatientschedule.component';
import { LaboratorydetailsHistoryComponent } from './home/laboratorydetails-history/laboratorydetails-history.component';
import { MycasespatientComponent } from './home/mycasespatient/mycasespatient.component';
import { NewcaseregisterpatientComponent } from './home/newcaseregisterpatient/newcaseregisterpatient.component';
import { RequesttestpatientComponent } from './home/requesttestpatient/requesttestpatient.component';
import { LabresultspatientComponent } from './home/labresultspatient/labresultspatient.component';
import { NavpatientComponent } from './home/navpatient/navpatient.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,

    NavbardoctorComponent,
    NavbarAdminComponent,
    PatientListComponent,
    DoctorListComponent,
    ANALYSISComponent,
    
    AddPatientComponent,
    AddDoctorComponent,
    NavlaboratoryComponent,
    LaboratorydetailsdoctorscheduleComponent,
    LaboratorydetailspatientscheduleComponent,
    LaboratorydetailsHistoryComponent,
    MycasespatientComponent,
    NewcaseregisterpatientComponent,
    RequesttestpatientComponent,
    LabresultspatientComponent,
    NavpatientComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent, 
        canActivate:[LOGINAUTHGuard]
      },
      {
        path:'',
        component: LoginComponent, 
        canActivate:[LOGINAUTHGuard]
      },
      {
        path:'Laboratory',
        component: HomeComponent,canActivate:[HomeguardGuard],
        children: [
          {
            path: '', // child route path
            component: LaboratorydetailspatientscheduleComponent // child route component that the router renders
          },
          {
            path: 'patient', // child route path
            component: LaboratorydetailspatientscheduleComponent // child route component that the router renders
          },
          {
            path: 'doctor', // child route path
            component: LaboratorydetailsdoctorscheduleComponent // child route component that the router renders
          },
          {
            path: 'history', // child route path
            component: LaboratorydetailsHistoryComponent // child route component that the router renders
          },

          
        ] 
      }
      ,
      {
        path:'Patient',
        component: HomeComponent,canActivate:[HomeguardGuard],
        children: [
          {
            path: '', // child route path
            component: MycasespatientComponent // child route component that the router renders
          },
          {
            path: 'mycases', // child route path
            component: MycasespatientComponent // child route component that the router renders
          },
          
          {
            path: 'newcaseregister', // child route path
            component: NewcaseregisterpatientComponent // child route component that the router renders
          },
          
          {
            path: 'requesttest', // child route path
            component: RequesttestpatientComponent // child route component that the router renders
          },
          
          {
            path: 'labresult', // child route path
            component: LabresultspatientComponent // child route component that the router renders
          },
          

          
        ] 
      },
      {
        path:'forgotpassword',
        component: ForgotpasswordComponent,
      }
    ])
  ],
  providers: [AuthgaurdserviceService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
