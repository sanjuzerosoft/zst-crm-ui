import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import {Header} from './header/header';
import {Sidebar} from './sidebar/sidebar';
import {Layout} from './layout/layout';
import { Leadslist } from './leads/leadslist/leadslist';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'layout', component: Layout },
  { path: 'leadslist', component: Leadslist },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];




