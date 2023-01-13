import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>Acumulador App</h1>
        <h3>La base es {{ base }}</h3>
        <button (click)="acumular('+')"> + 1 </button>
        <span>{{ numero }}</span>
        <button (click)="acumular('-') " > - 1 </button>
    `
})


export class ContadorComponent {
    numero: number = 10;
    base: number = 5;
    acumular(op: string): number {
        if (op == "+") return this.numero += this.base
        return this.numero -= this.base
    }
}