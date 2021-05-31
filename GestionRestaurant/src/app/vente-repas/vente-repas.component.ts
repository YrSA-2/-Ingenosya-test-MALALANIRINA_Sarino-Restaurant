import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RepasService } from '../services/repas.service';
import { RepasDetails } from '../shared/repasDetails.modal';
import { RepasIngredientAll } from '../shared/repasIngredientAll.modal';

@Component({
  selector: 'app-vente-repas',
  templateUrl: './vente-repas.component.html',
  styleUrls: ['./vente-repas.component.css']
})
export class VenteRepasComponent implements OnInit {

  repasGroup: FormGroup;
  repasOne: RepasDetails;
  repasIngredient: RepasIngredientAll[];
  repasIngredientOne:RepasIngredientAll;

  error:"";

  constructor( private route: ActivatedRoute, private service: RepasService) { }
 
  ngOnInit(): void {
    const id =  this.route.snapshot.params['id'];
    this.getRepasSelected(id);
    this.getRepasIngredient();
    this.getRepasIngredientSelected(id);
  }
  
  getRepasIngredientSelected(id: number) {
    this.service.getOneRepasIngredient(id).subscribe((repas: RepasIngredientAll)=>{
      this.repasIngredientOne = repas;
      console.log(repas);      
    });
  }

   /**
   * getRepasIngredient
   */
  getRepasIngredient() {
    this.service.readRepasIngredient().subscribe(
      (data: RepasIngredientAll[]) =>{
        this.repasIngredient = data;
        console.log(this.repasIngredient);
      },
      (err) => {
        this.error = err;
      }
        )
  }

  /**
   * getRepasSelected
   */
  public getRepasSelected(id:number) {
    this.service.getOne(id).subscribe((repas: RepasDetails)=>{
      this.repasOne = repas;
      console.log(repas);      
    });
  }

}
