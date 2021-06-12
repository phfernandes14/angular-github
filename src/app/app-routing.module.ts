import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {BuscaComponent} from './busca/busca.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'busca', component: BuscaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}