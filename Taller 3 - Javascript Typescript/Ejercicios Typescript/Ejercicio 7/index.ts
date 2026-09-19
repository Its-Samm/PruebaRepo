
class Vehiculo{
    marca: string;
    modelo: string;

    constructor(marca: string, modelo:string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInformacion(): void {
        console.log(this.marca);
        console.log (this.modelo);
    }
}

const vehiculo1 = new Vehiculo ("Toyota", "corolla");
const vehiculo2 = new Vehiculo ("Mazda", "3")

vehiculo1.mostrarInformacion();
vehiculo2.mostrarInformacion();

export {};