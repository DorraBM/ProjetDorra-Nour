import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelsService } from '../hotels.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  listHotel:Hotel[]=[];
  rating=0;
   constructor( private hotelService:HotelsService, config: NgbRatingConfig) {config.max = 5;
     config.readonly = true; }
 
   ngOnInit(): void {
    this.listHotel= this.hotelService.getHotel();
   }
 

}
