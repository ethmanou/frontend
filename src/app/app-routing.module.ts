import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcccueilComponent } from './acccueil/acccueil.component';
import { ReglesComponent } from './regles/regles.component';
import { ContactComponent } from './contact/contact.component';
import { SessionComponent } from './session/session.component';
export const routes: Routes = [
  {path:'',component:AcccueilComponent},
  {path:'acccueil',component:AcccueilComponent},
  {path:'règles',component: ReglesComponent },
  {path:'contact',component: ContactComponent},
  {path:'session',component: SessionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
