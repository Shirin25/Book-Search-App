import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { JavaComponent } from './java/java.component'; 
import { JavaScriptComponent } from './java-script/java-script.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { OopsComponent } from './oops/oops.component';
import { PythonComponent } from './python/python.component';
import { TempComponent } from './temp/temp.component';

const routes: Routes=[
  {path:'java',component:JavaComponent},
  {path:'java-script',component:JavaScriptComponent},
  {path:'machine-learning',component:MachineLearningComponent},
  {path:'oops',component:OopsComponent},
  {path:'python',component:PythonComponent},
  {path:'temp',component:TempComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
