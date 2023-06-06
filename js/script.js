const prendas = [
    {
        nombre: 'Polo',
        marcas: [
            {
                nombre: 'NIKE',
                precio: 35
            },
            {
                nombre: 'ADIDAS',
                precio: 45
            },
            {
                nombre: 'PUMA',
                precio: 55
            }
        ]
    },
    {
        nombre: 'Pantalon',
        marcas: [
            {
                nombre: 'NIKE',
                precio: 35
            },
            {
                nombre: 'ADIDAS',
                precio: 45
            },
            {
                nombre: 'INDEX',
                precio: 55
            }
        ]
    },
    {
        nombre: 'casacas',
        marcas: [
            {
                nombre: 'NORT FACE',
                precio: 75
            },
            {
                nombre: 'GOTCHA',
                precio: 65
            },
            {
                nombre: 'NAVIGATA',
                precio: 85
            }
        ]
    }
]

let prendasSeleccionadas = []

const obtenerPrenda = () => {

    let opcion = parseFloat(prompt('===== MENÚ =====\n1. POLO\n2. PANTALON\n3. CASACAS\nIngrese una opción (número) del menú:'))

    let marcas

    switch (opcion) {
        case 1:
            marcas = '===== MARCAS =====\n1. NIKE\n2. ADIDAS\n3. PUMA'
            break
        case 2:
            marcas = '===== MARCAS =====\n1. NIKE\n2. ADIDAS\n3. INDEX'
            break
        case 3:
            marcas = '===== MARCAS =====\n1. NORT FACE\n2. GOTCHA\n3. NAVIGATA'
            break
        default:
            marcas = 'Opción inválida'
            break
    }

    alert(marcas)

    let precioMaximo = parseFloat(prompt('===== MENÚ =====\n1. S/.40\n2. S/.60\n 3. S/.90\nIngrese una opción (precio) del menú:'))

    let prendasFiltradas = prendas[opcion - 1].marcas.filter(prenda => prenda.precio <= precioMaximo)

    while (prendasFiltradas.length === 0) {

        alert('No hay prendas disponibles dentro del rango de precio seleccionado.')

        precioMaximo = parseFloat(prompt('===== MENÚ =====\n1. S/.40\n2. S/.60\n 3. S/.90\nIngrese una opción (precio) del menú:'))

        prendasFiltradas = prendas[opcion - 1].marcas.filter(prenda => prenda.precio <= precioMaximo)

    }

    let opcionesPrendas = ''

    prendasFiltradas.forEach((prenda, index) => {

        opcionesPrendas += `${index + 1}. ${prenda.nombre}\n`

    })

    let opcionCompra = parseFloat(prompt(`===== OPCIONES DE COMPRA =====\n${opcionesPrendas}Ingrese una opción (número) para comprar:`))

    while (opcionCompra < 1 || opcionCompra > prendasFiltradas.length) {

        alert('Opción inválida.')
        opcionCompra = parseFloat(prompt(`===== OPCIONES DE COMPRA =====\n${opcionesPrendas}Ingrese una opción (número) para comprar:`))

    }

    let prendaSeleccionada = prendasFiltradas[opcionCompra - 1]

    alert(`Ha seleccionado comprar ${prendaSeleccionada.nombre} por S/.${prendaSeleccionada.precio} ¡Disfrute su compra!`)

    prendasSeleccionadas.push(prendaSeleccionada)

    let deseaOtraPrenda = prompt('¿Desea seleccionar otra prenda? (Sí - No)')

    if (deseaOtraPrenda.toLowerCase() === 'sí' || deseaOtraPrenda.toLowerCase() === 'si') {
        obtenerPrenda()
    } else {
        realizarCompra()
    }

    return prendaSeleccionada
}

const realizarCompra = () => {

    let subtotal = 0

    prendasSeleccionadas.forEach((prenda) => {

        let cantidad = parseFloat(prompt(`===== COMPRA =====\nIngrese la cantidad de ${prenda.nombre} que desea comprar:`))

        while (isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad)) {

            alert('No se pueden ingresar números negativos, decimales, letras o símbolos!')
            cantidad = parseFloat(prompt(`===== COMPRA =====\nIngrese la cantidad de ${prenda.nombre} que desea comprar:`))

        }

        let precioUnidad = prenda.precio
        let subtotalPrenda = cantidad * precioUnidad

        subtotal += subtotalPrenda

        alert(`===== Compra realizada =====
            Prenda: ${prenda.nombre}
            Cantidad: ${cantidad}
            Precio por unidad: S/. ${precioUnidad}
            Subtotal: S/. ${subtotalPrenda}`)
    })

    let igv = subtotal * 0.18
    let totalCompra = subtotal + igv

    alert(`===== RESUMEN DE COMPRA =====
    Subtotal: S/. ${subtotal}
    IGV: S/. ${igv}
    Total compra (incluido IGV): S/. ${totalCompra}`)

    alert('Gracias por su compra.')
}

obtenerPrenda()

