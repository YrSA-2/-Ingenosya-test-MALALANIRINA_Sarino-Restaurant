import { Component, OnDestroy, OnInit } from '@angular/core';

import {RepasService} from './services/repas.service';

import {  interval } from 'rxjs';
import {  Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'GestionRestaurant';
  // isValid = false;
  // repas: any[];
  // secondes: number;
  // counterSubscription: Subscription;

  // constructor(private repasService: RepasService) {
  //   setTimeout(
  //     () => {
  //       this.isValid = true;
  //     }, 4000
  //   );
  // }

  // ngOnInit() {
  //   const counter = interval(1000);
  //   this.counterSubscription = counter.subscribe(
  //     (value) => {
  //       this.secondes = value;
  //     },
  //     (error) => {
  //       console.log('Uh-oh, an error occurred! : ' + error);
  //     },
  //     () => {
  //       console.log('Observable complete!');
  //     }
  //   );
  // }

  // ngOnDestroy() {
  //   this.counterSubscription.unsubscribe();
  // }


}
