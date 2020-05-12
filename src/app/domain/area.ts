export class Area {

    constructor(
        public areaId: number,
        public estado: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public nombre: string,
        public usuCreador: string,
        public usuModificador: string,
        public compId_Compania: string
    ) { }
}
