export interface Product {
  id: number;
  name: string;
  peso:string;
  dimensiones: string;
  colores: string;
  descripcion: string;
}

export const products = [
  {
    id: 1,
    name: 'Cubierta UPVC',
    peso: '5.1 Kg/mt2',
    dimensiones: 'Ancho: 1.07 mts x Largo 11.80 mts Calibre 2.5 mm',
    colores: 'Azul, Blanco, Rojo, Verde',
    descripcion: 'Cubierta UPVC para techos livianos'
  },
  {
    id: 2,
    name: 'Cubierta UPVC Cresta Baja',
    peso: '3.96 Kgs/mt2',
    dimensiones:'Ancho 1.13 mts x Largo 11.80 mts Calibre 2.0 mm',
    colores: 'Blanco, Rojo',
    descripcion: 'Cubiertas UPVC ideales para bodegas y almacenes'
  },
  {
    id: 3,
    name: 'Cubierta UPVC Reforzada',
    peso: '4.96 kgs/mt2',
    dimensiones: 'Ancho 1.05 mts x Largo 11.80 mts Calibre 2.5 mm',
    descripcion: 'Cubiertas UPVC reforzadas para techos bajos o expuertos a vientos fuertes'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/