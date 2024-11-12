const autos = require('./autos.js');
const concesionaria = {
    vehiculos:autos,
    autosEnventa: function () {
        return this.vehiculos.filter(car => car.vendido === false)
    },
    vender:function (dominio) {
        this.vehiculos.forEach(car => {
            if(car.patente == dominio){
                car.vendido = true
            }
        })
    },
    autoFinanciable:function (cuotas) {
        const enVenta = this.autosEnventa();
        return enVenta.filter(car => car.cuotas >= cuotas);
    },
//autosNuevos: retorna los vehiculos con menos de 100km.
    autosNuevos: function(){
        return this.vehiculos.filter(element => element.km < 100);
    },

    autosNuevos2() { return this.vehiculos.filter(car => car.km < 100)},
// listaDeVentas: retorna la lista de los autos vendidos.
    listaDeVentas: function(){
        return this.vehiculos.filter(element => element.vendido === true);
    },
// totalDeVentas: me retorna la suma de los importes de los vehiculos vendidos.
    totalDeVentas: function(){
        let resultado = 0;
        this.vehiculos.forEach(element => {
            if(element.vendido === true){
                resultado += element.precio;
            }
        })
        return resultado
    },

    totalDeVentas2: function() { return this.listaDeVentas().reduce((total, vehiculo) => total + vehiculo.precio, 0); },

    // autosQuePuedeComprar: retorna la lista de los autos que sean menores o iguales al importe indicado por el cliente.
    autosQuePuedeComprar: function(importe){
        return this.vehiculos.filter(element => element.precio <= importe);
    },

    autosQuePuedeComprar2: function(importe) { return this.vehiculos.filter(vehiculo => vehiculo.precio <= importe && !vehiculo.vendido); },
}

//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.autosNuevos2());
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
//console.log(concesionaria.totalDeVentas2());
//console.log(concesionaria.autosQuePuedeComprar(100000));
//console.log(concesionaria.autosQuePuedeComprar2(100000));

module.exports = concesionaria;