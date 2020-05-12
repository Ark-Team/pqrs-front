export class Usuario {

    constructor(
        public clave: string,
        public email: string,
        public estado: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public identificacion: number,
        public nombre: string,
        public telefono: number,
        public usuCreador: string,
        public usuId: string,
        public usuModificador: string,
        public compId_Compania: String,
        public tusuId_TipoUsuario: String
    ) { }

}