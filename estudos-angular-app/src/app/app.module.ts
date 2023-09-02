import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';
import { Card } from './components/card.component';
import { EntryDataComponent } from './components/entry-data.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, Button, Card, EntryDataComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
