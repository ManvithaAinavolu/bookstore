import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ThankComponent } from './thank/thank.component';
import { BuyComponent } from './buy/buy.component';
import { OrderComponent } from './order/order.component';
import { RegComponent } from './reg/reg.component';
 import { LogComponent } from './log/log.component';
//const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path : 'sell', component:SellComponent },
  {path: 'instruct',component: InstructionsComponent},
  {path:'thank',component:ThankComponent},
  {path:'buy',component:BuyComponent},
  {path:'order',component:OrderComponent},
  {path:'reg',component:RegComponent},
  {path:'log',component:LogComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
