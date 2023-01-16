import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()

export class DbzService {
    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 15000 },
        { nombre: 'Vegetha', poder: 8000 }
    ]
    nuevo: Personaje = { nombre: 'Personaje', poder: 1400 }

    constructor() { }

    get personjes() {
        return [...this._personajes]
    }
    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje)
    }
}