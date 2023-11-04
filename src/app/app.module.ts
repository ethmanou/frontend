import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReglesComponent } from './regles/regles.component';
import { ContactComponent } from './contact/contact.component';
import { SessionComponent } from './session/session.component';
import { AcccueilComponent } from './acccueil/acccueil.component';

@NgModule({
  declarations: [
    AppComponent,
    AcccueilComponent,
    ReglesComponent,
    ContactComponent,
    SessionComponent,
    AcccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
