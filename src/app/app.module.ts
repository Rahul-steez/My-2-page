import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentEventosComponent } from './components/component-eventos/component-eventos.component';
import { ComponentHeaderComponent } from './components/component-header/component-header.component';
import { ComponentMostrarComponent } from './components/component-eventos/component-mostrar/component-mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentEventosComponent,
    ComponentHeaderComponent,
    ComponentMostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
