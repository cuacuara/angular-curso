import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor'];
  heroeborrado: string = '';
  borrarHeroe() 
  {
    //var i = arr.indexOf( item );
    this.heroeborrado = this.heroes.shift() || '';
   
    console.log(this.heroeborrado);
}

}


