import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainservicesService {

  constructor(private http:HttpClient) { }

  // get__Doctor__list(){
  //   return this.http.get("/api/AllDoctor")
  // }

  // get__Doctor__info(doc_id){
  //   return this.http.get("/api/getDoctor/"+doc_id)
  // }

  AddPatient(first_name,last_name,email,password,age,gender){

    var requestBody = {

    "first_name":first_name,
    "last_name":last_name,
    "email":email,
    "password":password,
    "age":age,
    "gender":gender
      
    }
    return this.http.post("/api/add_patient",requestBody)
  }

  AddDoctor(first_name,last_name,email,password,age,gender,specialisation){

    var requestBody = {

      "first_name":first_name,
      "last_name":last_name,
      "email":email,
      "password":password,
      "age":age,
      "gender":gender,
      "specialisation":specialisation
        
      }
    return this.http.post("/api/add_doctor",requestBody)
  }

  AddLab(first_name,last_name,email,password,age,gender){

    var requestBody = {

      "first_name":first_name,
      "last_name":last_name,
      "email":email,
      "password":password,
      "age":age,
      "gender":gender
        
      }
    return this.http.post("/api/add_labdoc",requestBody)
  }

  PatientLogin(email,password){
    var requestBody = {

     
      "email":email,
      "password":password,
    
        
      }
    return this.http.post("/api/pat_login",requestBody)

  }

  DoctorLogin(email,password){
    var requestBody = {

     
      "email":email,
      "password":password,
    
        
      }
    return this.http.post("/api/doc_login",requestBody)

  }

  LabLogin(email,password){
    var requestBody = {

     
      "email":email,
      "password":password,
    
        
      }
    return this.http.post("/api/lab_doc_login",requestBody)

  }

  getPatientByEmail(email){
    var requestBody = {

     
      "email":email
     
    
        
      }
    return this.http.post("/api/getpatientbymail",requestBody)

  }


  getDoctorByEmail(email){
    var requestBody = {

     
      "email":email
     
    
        
      }
    return this.http.post("/api/getdoctorbymail",requestBody)

  }


  getLabByEmail(email){
    var requestBody = {

     
      "email":email
     
    
        
      }
    return this.http.post("/api/getlabdocbymail",requestBody)

  }



  AddCase(patient_id,appointment_date,problem_type,doctor_id,patient_symptoms){

    var requestBody = {

      "patient_id":patient_id,
      "appointment_date":appointment_date,
      "problem_type":problem_type,
      "doctor_id":doctor_id,
      "patient_symptoms":patient_symptoms
        
      }
    return this.http.post("/api/add_case",requestBody)
  }

  UpdateCase(id,appointment_date,patient_symptoms,prescription,case_status){

    var requestBody = {

      "id":id,
      "appointment_date":appointment_date,
      "prescription":prescription,
      "case_status":case_status,
      "patient_symptoms":patient_symptoms
        
      }
    return this.http.put("/api/update_case_details",requestBody)
  }


  ScheduleDocCovidTest(test_patient_id,prescribed_by_doctor_id,case_id,test_date){

    var requestBody = {

      "test_patient_id":test_patient_id,
      "prescribed_by_doctor_id":prescribed_by_doctor_id,
      "case_id":case_id,
      "test_date":test_date
        
      }
    return this.http.post("/api/schedule_doc_covid_test",requestBody)


  }


  SchedulePatientCovidTest(test_patient_id,prescribed_by_doctor_id,case_id,test_date){

    var requestBody = {

      "test_patient_id":test_patient_id,
      "prescribed_by_doctor_id":prescribed_by_doctor_id,
      "case_id":case_id,
      "test_date":test_date
        
      }
    return this.http.post("/api/schedule_patient_covid_test",requestBody)


  }



  ScheduleDocDengueTest(test_patient_id,prescribed_by_doctor_id,case_id,test_date){

    var requestBody = {

      "test_patient_id":test_patient_id,
      "prescribed_by_doctor_id":prescribed_by_doctor_id,
      "case_id":case_id,
      "test_date":test_date
        
      }
    return this.http.post("/api/schedule_doc_dengue_test",requestBody)


  }


  SchedulePatientDengueTest(test_patient_id,prescribed_by_doctor_id,case_id,test_date){

    var requestBody = {

      "test_patient_id":test_patient_id,
      "prescribed_by_doctor_id":prescribed_by_doctor_id,
      "case_id":case_id,
      "test_date":test_date
        
      }
    return this.http.post("/api/schedule_patient_dengue_test",requestBody)


  }




  



  ScheduleDocBloodTest(test_patient_id,prescribed_by_doctor_id,case_id,test_date){

    var requestBody = {

      "test_patient_id":test_patient_id,
      "prescribed_by_doctor_id":prescribed_by_doctor_id,
      "case_id":case_id,
      "test_date":test_date
        
      }
    return this.http.post("/api/schedule_doc_blood_test",requestBody)


  }


  SchedulePatientBloodTest(test_patient_id,prescribed_by_doctor_id,case_id,test_date){

    var requestBody = {

      "test_patient_id":test_patient_id,
      "prescribed_by_doctor_id":prescribed_by_doctor_id,
      "case_id":case_id,
      "test_date":test_date
        
      }
    return this.http.post("/api/schedule_patient_blood_test",requestBody)


  }

  AllDoctors(){

    
    return this.http.get("/api/all_doctors")


  }





}
