import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OopsComponent } from './oops/oops.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { PythonComponent } from './python/python.component';
import { JavaComponent } from './java/java.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { TableComponent } from './table/table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { TempComponent } from './temp/temp.component';



@NgModule({
  declarations: [
    AppComponent,
    OopsComponent,
    JavaScriptComponent,
    PythonComponent,
    JavaComponent,
    MachineLearningComponent,
    TableComponent,
    SpinnerComponent,
    TempComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    RouterOutlet,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
