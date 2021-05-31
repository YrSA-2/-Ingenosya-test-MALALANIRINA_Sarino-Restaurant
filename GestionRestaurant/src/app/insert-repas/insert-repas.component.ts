import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RepasService } from '../services/repas.service';
import { Repasall } from '../shared/repasall.modal';
import { Repas } from '../shared/repas.modal';
import { Couvert } from '../shared/couver.modal';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Ingredient } from '../shared/ingredient.modal';
import { RepasIngredient } from '../shared/repasIngredient.modal';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';
import { RepasCouvert } from '../shared/repasCouvert.modal';
import { Emballage } from '../shared/emballage.modal';
@Component({
  selector: 'app-insert-repas',
  templateUrl: './insert-repas.component.html',
  styleUrls: ['./insert-repas.component.css']
})
export class InsertRepasComponent implements OnInit {

  constructor(private repasService : RepasService, private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      this.config.bindValue = 'value';
   }
  name = "test";
  addRepas: FormGroup;
  addMessage:string;
  addMessageShow = false;
  error;

  selectedR: number;
  repasListOne: RepasIngredient[];
  repasList: Repasall[];
  repas_select:string;

  selectedE: number;
  emballage_select:string;
  emballageList: Emballage[];

  selected:number;
  ingredient_select:string;
  addIngredientRepas: FormGroup;

  selectedC:number;
  couvert_select:string;
  addCouvertRepas: FormGroup;

  selectedCouvert: Couvert = { id_couvert : null , element_couvert: null,prix_couvert:null}
  couvertList: Couvert[];

  selectedIngredient: Ingredient = { id_ingredient : null , nom_ingredient: null,quantite_ingredient:null,prixUnitaire_ingredient:null}
  ingredientList: Ingredient[];

  //Confirm message
  confirmD(){
    var con = confirm('Valider ce repas?'); 
    if(con) { 
      alert('Vous avez dit oui...');
    } else { 
     return false; 
    }
  }

  confirmeI(){
    var con = confirm('Valider cet ingredient?'); 
    if(con) { 
      alert('Vous avez dit oui...');
    } else { 
     return false; 
    }
  }

  confirmeC(){
    var con = confirm('Valider ce couvert?'); 
    if(con) { 
      alert('Vous avez dit oui...');
    } else { 
     return false; 
    }
  }
  
  //GET REPAS FROM SERVICE
  getRepas(): void {
    this.repasService.readRepasOne().subscribe(
  (data: Repasall[]) =>{
    this.repasList = data;
  },
  (err) => {
    this.error = err;
  }
    )
  }

  //GET EMBALLAGE From Service
  getEmbalage(){
    this.repasService.readEmballage().subscribe(
      (data: Emballage[]) =>{
      this.emballageList = data;
      console.log(this.emballageList);
    },
    (err) => {
      this.error = err;
    }
      )
  }

  //GET COUVERT FROM SERVICE
  getCouvert() {
    this.repasService.readCouvert().subscribe(
    (data: Couvert[]) =>{
    this.couvertList = data;
    console.log(this.couvertList);
  },
  (err) => {
    this.error = err;
  }
    )
  }

  //GET INGREDIENT FROM SERVICE
  getIngredient(){
    this.repasService.readIngredient().subscribe(
    (data: Ingredient[]) =>{
    this.ingredientList = data;
    console.log(this.ingredientList);
  },
  (err) => {
    this.error = err;
  }
    )
  }

  // function execute onload
  ngOnInit(){
      this.addRepas = new FormGroup({
        nom_repas: new FormControl(null),
        quantite_repas: new FormControl(null),
        serviette_repas: new FormControl(null, Validators.required),
        id_emballage: new FormControl(null, Validators.required),
      });

      this.addIngredientRepas = new FormGroup({
        id_repas: new FormControl(null,Validators.required),
        id_ingredient: new FormControl(null, Validators.required),
        quantite_ingredient: new FormControl(null, Validators.required),
      });

      this.addCouvertRepas = new FormGroup({
        id_repas: new FormControl(null,Validators.required),
        id_couvert: new FormControl(null, Validators.required),
      });

      this.getCouvert();
      this.getIngredient();
      this.getRepas();    
      this.getEmbalage();  
  }


  //OnSubmit form repas
  newRepas: Repas;

  onSubmit(){
    this.newRepas = {
                    nom_repas: this.addRepas.value.nom_repas,
                    quantite_repas: this.addRepas.value.quantite_repas,
                    serviette_repas: this.addRepas.value.serviette_repas,
                    id_emballage: this.addRepas.value.id_emballage,}

    this.repasService.addRepas(this.newRepas).subscribe(data=>{
                    console.log(data);
                    this.addMessageShow = true;
                    this.addMessage = "Data has been added!";
                    console.log(this.addMessage); 
                  },(err)=>this.error =err);
  }

  //OnSubmit for ingredient
  newRepasIngredient: RepasIngredient;

  onSubmitIngredient() {
    this.newRepasIngredient = {
                    id_repas: this.addIngredientRepas.value.id_repas,
                    id_ingredient: this.addIngredientRepas.value.id_ingredient,
                    quantite_ingredient: this.addIngredientRepas.value.quantite_ingredient,}

    this.repasService.addRepasIngredient(this.newRepasIngredient).subscribe(data=>{
                    console.log(data);
                    this.addMessageShow = true;
                    this.addMessage = "Data has been added!";
                    console.log(this.addMessage); 
                  },(err)=>this.error =err);
    
  }
  
  // OnSubmit for couvert
  newRepasCouvert: RepasCouvert;

  onSubmitCouvert() {
    this.newRepasCouvert = {
                    id_repas: this.addCouvertRepas.value.id_repas,
                    id_couvert: this.addCouvertRepas.value.id_couvert,
                  }

    this.repasService.addCouvertRepas(this.newRepasCouvert).subscribe(data=>{
                    console.log(data);
                    this.addMessageShow = true;
                    this.addMessage = "Data has been added!";
                    console.log(this.addMessage); 
                  },(err)=>this.error =err);
    
  }

  //INGREDIENT SELECTED ngForm
  ingredientSelect(val:any){
    this.customFunction1(val);
  }

  customFunction1(val:any){
      this.ingredient_select = val;
    }

    //COUVERT SELECTED ngForm
  couvertSelect(val:any){
    this.customFunction2(val);
  }

  customFunction2(val:any){
    this.couvert_select = val;
  }

  //REPAS SELECTED ngForm
  repasSelect(val:any){
    this.customFunction3(val);
  }

  customFunction3(val:any){
    this.repas_select = val;
  }

  //Emballage SELECTED ngForm
  emballageSelect(val:any){
    this.customFunction4(val);
  }

  customFunction4(val:any){
    this.emballage_select = val;
  }
  
}
