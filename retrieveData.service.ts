import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import {HttpClient } from '@angular/common/http';

@Injectable()

export class RetrieveDataService {
	
  constructor(private http: HttpClient){}
   
  fetchData() : Observable<Object>
  {
	   return this.http.get('https://astb-miner-v2.herokuapp.com/v2/18lJe-9fq5fHWr-9HuFTzhWnmfygeuXs2bbsXO8vh1FU/0');
  }
}