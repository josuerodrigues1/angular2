import { Component,Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector:'foto',
  templateUrl:'./foto.component.html'
})
export class FotoComponent{
  //Esses input é pra dizer que eles podem receber valor
  //<foto url="img/leao.jpg" titulo="Leão"></foto>
  @Input() titulo;
  @Input() url;
}