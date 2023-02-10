import { Component, OnInit} from '@angular/core';
import { BooksByTitleOrAuthorName } from '../assets/apicall.js'
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component.js';
import { Router } from '@angular/router';

import {AppService} from "./app.service"
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Book App';
  p:any
  data=<any>[]
  searchTerm:string=''
  
  constructor(private user:AppService,private router: Router){}
  onSubmit()
  {
    if(this.searchTerm.length>0)
    {

      this.user.rootURL='https://openlibrary.org/search.json?q='
      this.user.rootURL=this.user.rootURL+this.searchTerm
      console.warn(this.user.rootURL)
      this.user.getUsers().subscribe(data=>{
        for(var i in data)
        {
          if(i=='docs')
          {
            this.data=i
          }
          
        }
        console.warn(data)
        // alert(this.searchTerm)
        this.router.navigate(['/temp'],{state:{data:this.searchTerm}});
      });

    }
    
  }
    goBack()
    {
      this.searchTerm=""
      this.router.navigate(['']);
    }
  
    
  
  }
  

