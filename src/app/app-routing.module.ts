import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



const routes : Routes =
  [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },

  ];

@NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })

export class AppRoutingModule { }
