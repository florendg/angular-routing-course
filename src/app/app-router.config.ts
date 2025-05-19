import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HomeComponent} from './home/home.component';
import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent),
  }
]

