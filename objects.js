var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Aleman',
    amistoso: true,
    dueña: 'Maria Lopez',
    info: function () {
        console.log('Mi perro es un ' + this.raza);
    }
}

mascota.info();