import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { RepasService } from '../services/repas.service';
import { IngredientS } from '../shared/ingredientS.modal';

@Component({
  selector: 'app-insert-ingredient',
  templateUrl: './insert-ingredient.component.html',
  styleUrls: ['./insert-ingredient.component.css']
})
export class InsertIngredientComponent implements OnInit {

  constructor(private repasService : RepasService, private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      this.config.bindValue = 'value';
   }

  addIngredient: FormGroup;
  addMessage:string;
  addMessageShow = false;
  error;

  ngOnInit(): void {
    this.addIngredient = new FormGroup({
      nom_ingredient: new FormControl(null, Validators.required),
      quantite_ingredient: new FormControl(null, Validators.required),
      prixUnitaire_ingredient: new FormControl(null, Validators.required),
    });
  }

  //Confirm message
  confirmeI(){
    var con = confirm('Valider cet ingredient?'); 
    if(con) { 
      alert('Vous avez dit oui...');
    } else { 
     return false; 
    }
  }

  
  newIngredient: IngredientS;

  onSubmit(){
    this.newIngredient = {
                    nom_ingredient: this.addIngredient.value.nom_ingredient,
                    quantite_ingredient: this.addIngredient.value.quantite_ingredient,
                    prixUnitaire_ingredient: this.addIngredient.value.prixUnitaire_ingredient,
                  }

    this.repasService.addIngredient(this.newIngredient).subscribe(data=>{
                    console.log(data);
                    this.addMessageShow = true;
                    this.addMessage = "Data has been added!";
                    console.log(this.addMessage); 
                  },(err)=>this.error =err);
      
      
   }

}
