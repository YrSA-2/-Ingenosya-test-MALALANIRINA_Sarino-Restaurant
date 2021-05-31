import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepasService } from './services/repas.service';
import { Routes,RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { InsertRepasComponent } from './insert-repas/insert-repas.component';
import { InsertIngredientComponent } from './insert-ingredient/insert-ingredient.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { InsertCouvertComponent } from './insert-couvert/insert-couvert.component';
import { AffichePrixComponent } from './affiche-prix/affiche-prix.component';
import { SingleRepasComponent } from './single-repas/single-repas.component';
import { RepasDetailsComponent } from './repas-details/repas-details.component';
import { VenteRepasComponent } from './vente-repas/vente-repas.component'; 

const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  // { path: 'repas/:id', component: AppSingleRepasComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'singlerepas/:id', component: SingleRepasComponent},
  { path: 'venterepas/:id', component: VenteRepasComponent},
  { path: 'repasdetails', component: RepasDetailsComponent},
  { path: 'insertrepas', component: InsertRepasComponent },
  { path: 'insertingredient', component: InsertIngredientComponent },
  { path: 'insertcouvert', component: InsertCouvertComponent },
  { path: 'afficheprix', component: AffichePrixComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FourOhFourComponent,
    InsertRepasComponent,
    InsertIngredientComponent,
    InsertCouvertComponent,
    AffichePrixComponent,
    SingleRepasComponent,
    RepasDetailsComponent,
    VenteRepasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    NgSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RepasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
