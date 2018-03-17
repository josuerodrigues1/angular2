import { Component, Inject } from "@angular/core";
import { Http } from "@angular/http";
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    fotos: Object[] = [];

    //Primeiro jeito, construtos e stream, eu me inscrevo so stream.. 
    //para saber o que ta acontecendo la dentro

    /*constructor(@Inject(Http) http){
        let stream = http.get('/v1/fotos');
        stream.subscribe(function(res){
            this.fotos = res.json();
        });
    }*/

    //Segundo jeito.. Com a classe anonima
    /*constructor(http: Http){

        let stream = http.get('/v1/fotos');
        stream.subscribe(function(res){

            this.fotos = res.json();
        });
    }*/

    //Terceiro jeito.. com Arrow
    /*    constructor(http:Http){
            http.get('v1/fotos').subscribe(res =>{
                this.fotos = res.json();
            })
        }*/

    //O Bonitão, resolvo logo no map a resposta.. e depois sigo em frente
    constructor(http: Http) {
        http.get('v1/fotos')
            .map(res => res.json()) //para o map funcionar precisa do import la no modulo principal
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }
}
