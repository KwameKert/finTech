import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { ListPropertyComponent } from './components/list-property/list-property.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';


const routes: Routes = [ 

    {path: 'add', component: AddPropertyComponent },
    {path: 'list', component: ListPropertyComponent },
    {path: 'view', component: ViewPropertyComponent },


 ];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PropertyRoutingModule { }
