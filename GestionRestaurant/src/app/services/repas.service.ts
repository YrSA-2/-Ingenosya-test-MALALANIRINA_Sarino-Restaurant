import{HttpClient, HttpHeaders,HttpHandler,HttpErrorResponse,HttpParams} from '@angular/common/http';
import {catchError,map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, Subject, throwError} from 'rxjs';
import { Repas } from '../shared/repas.modal';
import { Repasall } from '../shared/repasall.modal';
import { Couvert } from '../shared/couver.modal';
import { Ingredient } from '../shared/ingredient.modal';
import { CouvertS } from '../shared/courertS.modal';
import { IngredientS } from '../shared/ingredientS.modal';
import { RepasIngredient } from '../shared/repasIngredient.modal';
import { RepasCouvert } from '../shared/repasCouvert.modal';
import { RepasDetails } from '../shared/repasDetails.modal';
import { RepasIngredientAll } from '../shared/repasIngredientAll.modal';
import { Emballage } from '../shared/emballage.modal';


@Injectable ()
export class RepasService {

  repasList : Repasall[];
  emballageList: Emballage[];
  repasIngredientList : RepasIngredientAll[];
  repasDetails : RepasDetails[];
  couvertList: Couvert[];
  ingredientList: Ingredient[];
  PHP_API_SERVER = "http://localhost:80/backend/core";
	constructor(private httpClient: HttpClient) {};

  //FUNCTION HANDELERROR
  handleError(error:HttpErrorResponse){
    return throwError(error.message || " ");
  }

  //READ REPAS
  readRepas(): Observable<Repasall[]>{
		return this.httpClient.get('http://localhost:80/backend/core/read_repas.php')
    .pipe(map((res)=> { return this.repasList = res['data']}),
    catchError(this.handleError)
    )
	}

  //READ LAST ID REPAS INSERTED
  readRepasOne(): Observable<Repasall[]>{
		return this.httpClient.get('http://localhost:80/backend/core/read_repasOne.php')
    .pipe(map((res)=> { return this.repasList = res['data']}),
    catchError(this.handleError)
    )
	}

  // READ DETAILS OF REPAS
  readRepasDetails(): Observable<RepasDetails[]>{
    const _url = this.PHP_API_SERVER + '/read_repas_details.php';
    return this.httpClient.get(_url)
    .pipe(map((res) => {return  this.repasDetails = res['data']}),
    catchError(this.handleError)
    )
  }

  //READ ONE REPAS
  getOne(id: number): Observable<RepasDetails>{
    return this.readRepasDetails().pipe(
      map(repas =>  this.repasDetails.find(rep =>rep.id_repas == id))
      );
    }

  //ADD REPAS
  addRepas(repas: Repas): Observable<Repas>{
    const _url = this.PHP_API_SERVER + '/create_repas.php';
    return this.httpClient.post<Repas>(_url, repas,
    {
      headers: new HttpHeaders({
        'Accept' : 'text/html, application/xhtml+xml,*/*',
        'Content-type': 'application/x-www-form-urlencoded'
      }),
    }).pipe(
      catchError(this.handleError)
    );
  }
  
  //READ REPAS INGREDIENT
  readRepasIngredient():Observable<RepasIngredientAll[]>{
    return this.httpClient.get('http://localhost:80/backend/core/read_repas_ingredient.php')
    .pipe(map((res) =>{return this.repasIngredientList = res['data']}),
      catchError(this.handleError)
    )
  }

  //READ ONE REPAS_INGREDIENT
  getOneRepasIngredient(id: number): Observable<RepasIngredientAll>{
    return this.readRepasIngredient().pipe(
      map(repas =>  this.repasIngredientList.find(rep =>rep.id_repas == id))
      );
    }

    //READ EMBALLAGE
    readEmballage():Observable<Emballage[]>{
      return this.httpClient.get('http://localhost:80/backend/core/read_emballage.php').
      pipe(map((res) =>{return this.emballageList = res['data']}))
    }

  //READ COUVERT
  readCouvert(): Observable<Couvert[]>{
		return this.httpClient.get('http://localhost:80/backend/core/read_couvert.php')
    .pipe(map((res)=> { return this.couvertList = res['data']}),
    catchError(this.handleError)
    )
  }

  //ADD COUVERT
  addCouvert(couvert: CouvertS): Observable<CouvertS>{
    const _url = this.PHP_API_SERVER + '/create_couvert.php';
    return this.httpClient.post<CouvertS>(_url, couvert,
    {
      headers: new HttpHeaders({
        'Accept' : 'text/html, application/xhtml+xml,*/*',
        'Content-type': 'application/x-www-form-urlencoded'
      }),
    }).pipe(
      catchError(this.handleError)
    );
  }

  //READ ENGREDIENT
  readIngredient(): Observable<Ingredient[]>{
    return this.httpClient.get('http://localhost:80/backend/core/read_ingredient.php')
            .pipe(map((res)=> { return this.ingredientList = res['data']}),
            catchError(this.handleError)
            )
  }

  //ADD ENGREDIENT
  addIngredient(ingredient: IngredientS): Observable<IngredientS>{
      const _url = this.PHP_API_SERVER + '/create_ingredient.php';
    return this.httpClient.post<IngredientS>(_url, ingredient,
    {
      headers: new HttpHeaders({
        'Accept' : 'text/html, application/xhtml+xml,*/*',
        'Content-type': 'application/x-www-form-urlencoded'
      }),
    }).pipe(
      catchError(this.handleError)
    );    
  }

  //ADD INGREDIENT TO REPAS
  addRepasIngredient(repasIn: RepasIngredient): Observable<RepasIngredient>{
    const _url = this.PHP_API_SERVER + '/create_repas_ingredient.php';
    return this.httpClient.post<RepasIngredient>(_url, repasIn,
    {
      headers: new HttpHeaders({
        'Accept' : 'text/html, application/xhtml+xml,*/*',
        'Content-type': 'application/x-www-form-urlencoded'
      }),
    }).pipe(
      catchError(this.handleError)
    );
  }

  //ADD COUVERT TO REPAS
  addCouvertRepas(repasCou: RepasCouvert): Observable<RepasCouvert>{
    const _url = this.PHP_API_SERVER + '/create_repas_couvert.php';
    return this.httpClient.post<RepasCouvert>(_url, repasCou,
    {
      headers: new HttpHeaders({
        'Accept' : 'text/html, application/xhtml+xml,*/*',
        'Content-type': 'application/x-www-form-urlencoded'
      }),
    }).pipe(
      catchError(this.handleError)
    );
  }
}