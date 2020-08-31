import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './birding/login/login.component';
import { RegisterComponent } from './birding/register/register.component';
import { BirdwatcherComponent } from './birding/birdwatcher/birdwatcher.component';
import { ServiceComponent } from './birding/service/service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './birding/home/home.component';
import { ListComponent } from './birding/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BirdwatcherComponent,
    ServiceComponent,
    HomeComponent,
    ListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
