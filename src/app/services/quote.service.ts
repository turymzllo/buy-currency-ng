import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { CurrentQuote } from '../models/current-quote';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(
    private http: HttpClient,
  ) { }

  getQuote(currencyCode: string):Observable<CurrentQuote>{
    const params = new HttpParams().set('currencyISOCode', currencyCode);
    let dafaultQ: CurrentQuote = {
      id: currencyCode,
      sale: 0,
      buy: 0,
      updated: "Hit Refresh"
    };
    let resp = this.http.get<CurrentQuote>(environment.webApiURL + 'quote',{params})
                        .pipe(
                          catchError(this.handleError<CurrentQuote>('getQuote',dafaultQ))
                        );
    
    return resp;
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
