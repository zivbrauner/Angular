import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { WishItem } from './Shared/Module/WishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService  {

  constructor(private http: HttpClient) {}
   getWishes(){
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {
        format:'json'
      }
    });
    return this.http.get('http://localhost:39900/api/WishList/GetWishes',options).pipe(catchError(this.handleError));
  }

  private getStandardOptions() : any {
    return {
      Headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    };
  }

  private handleError(error: HttpErrorResponse){
    if(error.status == 0)
      {
        console.error('There is an issue with the client or network: ', error.error);
      }else{
        console.error('server side error: ', error.error);
      }

      return throwError(()=> new Error('cannnot retrive Wishes'));
  }

  addWish(wish: WishItem){
    let options = this.getStandardOptions();

    let params = new HttpParams()
    .set('wishInfo', wish.Wish)
    .set('isComplete', wish.IsComplete)

    this.http.post('http://localhost:39900/api/WishList/AddWish',params).subscribe();
  }


}
