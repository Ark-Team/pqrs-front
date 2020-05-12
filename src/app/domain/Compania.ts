export class Compania {

    constructor(
        public compId: string,
	    public direccion: string,
	    public email: string,
	    public estado: string,
	    public fechaCreacion: Date,
	    public fechaModificacion: Date,
	    public nombre: string,
	    public telefono: number,
	    public usuCreador: string,
	    public usuModificador: string
    ){}

}