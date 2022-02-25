const fs = require("fs");
const color = require("colors");

let salida = "";
let consol = "";

const multiplicarCinco = async (tabla = 5, listar = false, hasta = 10) => {
  try {
    for (i = 1; i <= hasta; i++) {
      consol += `${tabla} ${"X".green} ${i} ${"=".green} ${tabla * i} \n`;
      salida += `${tabla} X ${i} = ${tabla * i} \n`;
    }

    if (listar) {
      console.log("================".green);
      console.log(`  ${"TABLA DEL".red} ${tabla}`);
      console.log("================".green);

      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);
    return `tabla-${tabla}.txt`.green;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  multiplicarCinco,
};
