import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor(private http:HttpClient){}

  getData(){
   return this.http.get("https://api.nasa.gov/planetary/apod?api_key=827EpLVXq21db720R3x5SKPzE97FbvyY9YBcqc3q")
  }

}