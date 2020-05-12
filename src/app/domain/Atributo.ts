export class Atributo {
    constructor(
        public atriId: number,
        public estado: string,
        public descripcion: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public nombre: string,
        public usuCreador: string,
        public usuModificador: string,
        public tipo: string,
        public checked: boolean
    ) { }
}