import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LandingComponent } from './landing/landing.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FeedComponent } from './feed/feed.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DiretrizesComponent } from './diretrizes/diretrizes.component';




@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LandingComponent,
    EntrarComponent,
    RodapeComponent,
    FeedComponent,
    MenuComponent,
    PerfilComponent,
    DiretrizesComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
