import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentEventosComponent } from  './components/component-eventos/component-eventos.component';
import { ComponentHeaderComponent } from  './components/component-header/component-header.component';
import { ComponentMostrarComponent } from './components/component-eventos/component-mostrar/component-mostrar.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'header-component' },
  { path: 'header-component', component: ComponentHeaderComponent },
  { path: 'eventos-component', component: ComponentEventosComponent },
  { path: 'mostrar-component', component: ComponentEventosComponent },
  { path: '**', component: ComponentHeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
