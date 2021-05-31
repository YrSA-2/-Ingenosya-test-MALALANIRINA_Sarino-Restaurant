import { Component, OnInit } from '@angular/core';
import { RepasService } from '../services/repas.service';
import { Repasall } from '../shared/repasall.modal';
import { RepasDetails } from '../shared/repasDetails.modal';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  repasList: Repasall[];
  error: "";
	selectedRepas: Repasall = { id_repas : null , nom_repas: null, quantite_repas: null,serviette_repas:null,id_emballage:null}

	constructor(private repasService: RepasService) {  }

  ngOnInit(): void {
    this.getRepas();
  }

  getRepas(): void {
    this.repasService.readRepas().subscribe(
  (data: Repasall[]) =>{
    this.repasList = data;
    console.log(this.repasList);
  },
  (err) => {
    this.error = err;
  }
    )
  }

}
