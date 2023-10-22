import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BarComponent } from './bar/bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReglesComponent } from './regles/regles.component';
import { ContactComponent } from './contact/contact.component';
import { PlayComponent } from './play/play.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { SessionComponent } from './play/session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BarComponent,
    DashboardComponent,
    ReglesComponent,
    ContactComponent,
    PlayComponent,
    CreateaccountComponent,
    SessionComponent
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
