import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {
    path:'categories',
    component:CategoriesComponent,
  }
]

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class CategoriesModule { }
