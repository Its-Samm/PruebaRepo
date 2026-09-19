type Usuario = {
    id: number;
    nombre: string;
    edad: number;
    activo: boolean;

};

let usuarios: Usuarios[] = [
    {
        id: 1,
        nombre: "Zoe",
        edad: 25,
        activo: true
    },
    {
        id: 2,
        nombre: "David",
        edad: 30,
        activo: true
    },
    {
        id: 3,
        nombre: "Camila",
        edad: 18,
        activo: false
    }
];

function agregarUsuario(usuario: Usuario): void {
    usuarios.push(usuario);
}

function buscarUsuario(id: number): Usuario | undefined {
    return usuarios.find((usuario) => usuarios.id === id);
}

function mostrarUsuariosActivo(): Usuario[] {
    return usuarios.filter((usuario) => usuario.activo);
}

agregarUsuario({
    id: 4,
    nombre: "Pedro",
    edad: 40,
    activo: true
});

agregarUsuario({
    id: 5,
    nombre: "Jesus",
    edad: 28,
    activo: false
});

console.log(buscarUsuario(3));
console.log(buscarUsuario(10));

console.log(mostrarUsuariosActivo());

console.log (usuarios);

export{};


