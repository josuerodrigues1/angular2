import { NgModule } from "@angular/core";
import{BrowserModule} from "@angular/platform-browser"; //pq a aplicação vai rodar no Browser
import { AppComponent } from "./app.component"; //meu componente
import { FotoMudule } from "./foto/foto.module"; //criei o modulo de foto
import { HttpModule } from "@angular/http";  // modulo do HTTP
import { PainelComponent } from "./painel/painel.component";

import 'rxjs/add/operator/map';


@NgModule({
    imports:[BrowserModule,FotoMudule,HttpModule],
    declarations:[AppComponent,PainelComponent], // 
    bootstrap:[AppComponent] // dizendo qual o componente principal, o primeiro que vai carregar
    

})
export class AppModule{}