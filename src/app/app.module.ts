import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MyBankComponent } from './components/my-bank/my-bank.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'



export const routes =  [
  { path: 'myBank/account', component: AccountDetailsComponent, label: 'Account' },
  { path: 'myBank/Transactions', component: TransactionsComponent, label: 'Transactions' }
 ]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    SidenavComponent,
    MyBankComponent,
    AccountDetailsComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
