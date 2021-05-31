import { Component, OnInit } from '@angular/core';
import { RepasService } from '../services/repas.service';
import { RepasDetails } from '../shared/repasDetails.modal';

@Component({
  selector: 'app-repas-details',
  templateUrl: './repas-details.component.html',
  styleUrls: ['./repas-details.component.css']
})
export class RepasDetailsComponent implements OnInit {

  repasDetail: RepasDetails[];
  error:"";

  constructor(private repasService: RepasService) { }

  ngOnInit(): void {
    this.getRepasDetails();
  }

  getRepasDetails(): void {
    this.repasService.readRepasDetails().subscribe(
  (data: RepasDetails[]) =>{
    this.repasDetail = data;
    console.log(this.repasDetail);
  },
  (err) => {
    this.error = err;
  }
    )
  }

}
