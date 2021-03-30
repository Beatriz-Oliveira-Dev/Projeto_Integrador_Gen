import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LandingComponent,
    MenuComponent,
    EntrarComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
