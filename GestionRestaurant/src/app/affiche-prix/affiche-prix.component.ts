import { Component, OnInit } from '@angular/core';
import { RepasService } from '../services/repas.service';
import { Couvert } from '../shared/couver.modal';
import { Ingredient } from '../shared/ingredient.modal';

@Component({
  selector: 'app-affiche-prix',
  templateUrl: './affiche-prix.component.html',
  styleUrls: ['./affiche-prix.component.css']
})
export class AffichePrixComponent implements OnInit {

  prixIngredientList: Ingredient[];

  prixCouvertList: Couvert[];

  error: "";

  constructor(private repasService: RepasService) { }

  ngOnInit(): void {
    this.getPrixIngredient();
    this.getPrixCouvert();
  }


  // GET PRIX INGREDIENT 
  getPrixIngredient(): void {
    this.repasService.readIngredient().subscribe(
  (data: Ingredient[]) =>{
    this.prixIngredientList = data;
    console.log(this.prixIngredientList);
  },
  (err) => {
    this.error = err;
  }
    )
  }

  // GET PRIX COUVERT 
  getPrixCouvert(): void {
    this.repasService.readCouvert().subscribe(
  (data: Couvert[]) =>{
    this.prixCouvertList = data;
    console.log(this.prixCouvertList);
  },
  (err) => {
    this.error = err;
  }
    )
  }

}
