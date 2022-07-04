class Estudiante {
    constructor(nombre, lista = ["Javascript", "HTML", "CSS"]) {
      this.nombre = nombre;
      this.lista = lista;
    }
  
    obtenDatos() {
      let objData = { ...this.lista };
      return objData;
    }
  }
  
  let student_1 = new Estudiante("Manuel");   
  
  console.log(student_1.obtenDatos())