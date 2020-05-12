export class Proceso {

    constructor(
        public estado: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public nombre: string,
        public prosId: string,
        public usuCreador: string,
        public usuModificador: string,
        public areaId_Area: string
    ) { }

}