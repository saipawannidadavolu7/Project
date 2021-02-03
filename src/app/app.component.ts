import { Component } from '@angular/core';

import { RetrieveDataService } from './retrieveData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'myapp';
  
     constructor(private retrieveDataService: RetrieveDataService ){}
 
 fetchData(){
	  
	data = this.retrieveDataService.fetchData();
	  
     }
	  getname (obj : data.Structure)
	  {
		 return obj.name;
	  }
	  getID(o : data.Structure)
	  {
		  retuen o.id;
	  }
	  
	  
}
