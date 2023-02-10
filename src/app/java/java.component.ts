import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent {
  title = 'Book App';
  p:any
  data=<any>[]
  url:any
  constructor(private user:AppService)
  {
    this.user.rootURL='https://openlibrary.org/search.json?q='
    this.user.rootURL=this.user.rootURL+'Java'
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
