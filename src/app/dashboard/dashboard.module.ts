import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';

const route:Routes=[
  {
    path:'',
    component:DashboardComponent,
    loadChildren:() => import('../categories/categories.module').then(m => m.CategoriesModule),
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule.forChild(route),

  ]
})
export class DashboardModule { }
