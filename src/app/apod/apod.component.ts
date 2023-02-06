import { Component, OnInit } from '@angular/core';
import {ApodService} from '../apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  constructor(private apodService: ApodService) { }

  apod: any;

  ngOnInit() {
    this.apodService.getData().subscribe(data => this.apod = data);
  }



}
