class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }

 class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }

 let martin = new Persona('Martin', 26);
 let Programador = new Programador('Maria', 37, 4)
 martin.saludar();
Programador.codear();
 