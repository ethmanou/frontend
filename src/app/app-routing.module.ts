import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BarComponent } from './bar/bar.component';
import { ReglesComponent } from './regles/regles.component';
import { ContactComponent } from './contact/contact.component';
import { PlayComponent } from './play/play.component';
import { CreateaccountComponent} from './createaccount/createaccount.component';
import { SessionComponent } from './session/session.component';
const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'accueil',component: AccueilComponent},
  {path:'règles',component: ReglesComponent },
  {path:'contact',component: ContactComponent},
  {path:'play',component: PlayComponent}  ,
  {path:'createaccount',component: CreateaccountComponent},
  {path:'session',component: SessionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
