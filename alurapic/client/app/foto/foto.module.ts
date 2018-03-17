import { NgModule } from "@angular/core";
import { FotoComponent } from "./foto.component";
@NgModule({
    declarations:[FotoComponent],
    exports:[FotoComponent] // export, diz que quem for usar esse modulo vai poder usar esse component
})
export class FotoMudule{}