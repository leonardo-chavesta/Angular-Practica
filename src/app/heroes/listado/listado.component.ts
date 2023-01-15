import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'IronMando', 'Thor'];
  heroesBorrados: string[] = []
  
  borrarHeroe(): void { 
    const db = this.heroes.shift()
    this.heroesBorrados.push(db!) 
  }
}
