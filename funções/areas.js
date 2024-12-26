function calcularAreaRetangulo(l, a) {
    if(typeof l !== "number" || typeof a !== "number") {
        throw new Error ("calcularAreaRetangulo aceita dois parametros do tipo number")
    }
    return l * a
}

function calcularAreaTriangulo(b, a) {
    if(typeof b !== "number" || typeof a !== "number") {
        throw new Error ("calcularAreaTriangulo aceita dois parametros do tipo number")
    }
    return (b * a) / 2
}

function calcularAreaCirculo(r) {
    if (typeof r !== "number") {
        throw new Error("CalcularAreaCirculo: raio precisa ser number")
    }

    return Math.PI * r * r
}

