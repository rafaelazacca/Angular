import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';*/
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    /*FontAwesomeModule,*/


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
