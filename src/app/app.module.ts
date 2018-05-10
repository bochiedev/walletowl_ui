import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginService } from './services/login/login.service';
import { RegisterService } from './services/register/register.service';
import { TypingAnimationDirective } from 'angular-typing-animation'







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    TypingAnimationDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,

  ],
  providers: [
    RegisterService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
