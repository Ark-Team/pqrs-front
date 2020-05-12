export class Formulario {

    constructor(
        public estado: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public nombre: string,
        public formId: string,
        public usuCreador: string,
        public usuModificador: string,
        public compId_Compania: string
    ) { }
}