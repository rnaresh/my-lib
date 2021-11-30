import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MySecondLibModule } from 'my-second-lib';
import { MyLibModule } from 'my-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MyLibModule, MySecondLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
