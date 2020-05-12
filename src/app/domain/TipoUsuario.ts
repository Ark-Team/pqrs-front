export class TipoUsuario {
    constructor(
        public estado: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public nombre: string,
        public tusuId: number,
        public usuCreador: string,
        public usuModificador: string
    ) { }
}