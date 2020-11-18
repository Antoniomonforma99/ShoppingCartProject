import { OutletContext } from "@angular/router";

export class Articulo {

    talla : string;
    cantidad : number;
    importeReal : number;
    importeRebajado : number;
    rebajado : boolean;
    constructor(talla : string, cantidad : number, importeReal : number, rebajado : boolean, importeRebajado : number) {
        this.talla = talla;
        this.cantidad = cantidad;
        this.importeReal = importeReal;
        this.rebajado = rebajado;
        if (rebajado) {
            this.importeRebajado = importeRebajado
        } else {
            this.importeRebajado = importeReal
        }
     }
  
  
  }
  