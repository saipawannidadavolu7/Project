import { Component } from '@angular/core';

import { RetrieveDataService } from './retrieveData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'myapp';
  
   data$; 
  constructor(private retrieveDataService: RetrieveDataService ){}
 
 fetchData(){
	  
	 this.data$ = this.retrieveDataService.fetchData();
	  
     }
	  
}
