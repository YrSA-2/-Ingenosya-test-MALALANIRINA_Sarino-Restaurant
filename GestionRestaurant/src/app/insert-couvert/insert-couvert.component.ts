import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { RepasService } from '../services/repas.service';
import { CouvertS } from '../shared/courertS.modal';

@Component({
  selector: 'app-insert-couvert',
  templateUrl: './insert-couvert.component.html',
  styleUrls: ['./insert-couvert.component.css']
})
export class InsertCouvertComponent implements OnInit {

  

  constructor(private repasService : RepasService, private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      this.config.bindValue = 'value';
   }

  addCouvert: FormGroup;
  addMessage:string;
  addMessageShow = false;
  error;

  ngOnInit(): void {
    this.addCouvert = new FormGroup({
      element_couvert: new FormControl(null, Validators.required),
      prix_couvert: new FormControl(null, Validators.required),
    });
  }

  //Confirm message
  confirmeC(){
    var con = confirm('Valider cet ingredient?'); 
    if(con) { 
      alert('Vous avez dit oui...');
    } else { 
     return false; 
    }
  }
  
  newCouvert: CouvertS;

  onSubmit(){
    this.newCouvert = {
                    element_couvert: this.addCouvert.value.element_couvert,
                    prix_couvert: this.addCouvert.value.prix_couvert,
                  }

    this.repasService.addCouvert(this.newCouvert).subscribe(data=>{
                    console.log(data);
                    this.addMessageShow = true;
                    this.addMessage = "Data has been added!";
                    console.log(this.addMessage); 
                  },(err)=>this.error =err);
  }

  
}
