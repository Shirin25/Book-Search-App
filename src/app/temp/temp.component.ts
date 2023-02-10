import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { AppService } from '../app.service'
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {


  title = 'Book App';
  p:any
  data=<any>[]
  constructor(private user:AppService, private router: Router)
  {
    // alert(history.state.data)
    if(history.state.data.length>0)
    {
      this.user.rootURL='https://openlibrary.org/search.json?q='
      this.user.rootURL=this.user.rootURL+history.state.data
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
    
  }
 
  onSubmit()
  {
    this.router.navigate(['/temp']);
  }
  goBack()
  {
    history.state.data=''
    this.router.navigate(['/app']);
  }
}
