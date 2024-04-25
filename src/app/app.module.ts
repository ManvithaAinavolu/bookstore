import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SellComponent } from './sell/sell.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ThankComponent } from './thank/thank.component';
import { BuyComponent } from './buy/buy.component';
import { OrderComponent } from './order/order.component';
import { RegComponent } from './reg/reg.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SellComponent,
    InstructionsComponent,
    ThankComponent,
    BuyComponent,
    OrderComponent,
    RegComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
