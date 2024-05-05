import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HomeComponent} from './Components/home/home.component'
import { LoginComponent } from './Components/login/login.component';
import { HomeNeighborComponent } from './Components/home-neighbor/home-neighbor.component';
import { HomeManagerComponent } from './Components/home-manager/home-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NotesComponent } from './Components/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeNeighborComponent,
    HomeManagerComponent,
    
    // NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
