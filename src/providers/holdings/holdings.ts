import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
 
interface Holding {
    crypto: string,
    currency: string,
    amount: number,
    value?: number
}
 
@Injectable()
export class HoldingsProvider {
 
    public holdings: Holding[] = [];
 
    constructor(private http: HttpClient, private storage: Storage) {
 
    }

 
    verifyHolding(holding): Observable<any> {
        return this.http.get('https://api.cryptonator.com/api/ticker/' + holding.crypto + '-' + holding.currency);
    }
 
 
}