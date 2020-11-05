import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContectComponent } from './contect/contect.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contact', component: ContectComponent },
];

@NgModule({
  declarations: [ContectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContectModule { }
