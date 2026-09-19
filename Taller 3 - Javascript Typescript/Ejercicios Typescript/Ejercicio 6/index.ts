
enum EstadoPedido {
    pendiente,
    EnProceso,
    Enviado,
    EnCamino,
    Cancelado,
    Entregado
}

let estadoPedido: EstadoPedido = EstadoPedido.Enviado;

console.log (estadoPedido);

export {};