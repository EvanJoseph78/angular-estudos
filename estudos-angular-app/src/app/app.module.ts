import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';
import { Card } from './components/card.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, Button, Card],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
