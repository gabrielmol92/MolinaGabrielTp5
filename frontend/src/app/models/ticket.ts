import { Espectador } from "./espectador";

export class Ticket {
    _id! : number;
    precioTicket!: number;
    categoriaEspectador!: string;
    fechaCompra!: string;
    espectador!: Espectador;
}
