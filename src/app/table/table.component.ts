import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  keyWord:string='JavaScript'
  p:any
  data=<any>[]
  constructor(private user:AppService)
  {
    this.user.getUsers().subscribe(data=>{
      console.warn(data)
      this.data=data
    })
  }


}
