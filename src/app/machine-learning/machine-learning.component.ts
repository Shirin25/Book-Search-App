import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-machine-learning',
  templateUrl: './machine-learning.component.html',
  styleUrls: ['./machine-learning.component.css']
})
export class MachineLearningComponent {

  title = 'Book App';
  p:any
  data=<any>[]
  constructor(private user:AppService)
  {
    this.user.rootURL='https://openlibrary.org/search.json?q='
    this.user.rootURL=this.user.rootURL+'MachineLearning'
    this.user.getUsers().subscribe(data=>{
      for(var i in data)
      {
        if(i=='docs')
        {
          this.data=i
        }
        console.warn(i)
      }
      
    })
  }
    
  clickme()
  {
    alert("I was clicked")
  }
}
