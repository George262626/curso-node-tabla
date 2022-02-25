const { multiplicarCinco } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colorPrincipal = require("colors");

console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log("base: yargs", argv.base);

// const [, , arg3 = "tabla=5"] = process.argv;
// const [, tabla = 1] = arg3.split("=");

//console.log(base);

//const tabla = 2;

multiplicarCinco(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
//fs.writeFileSync(`tabla-${tabla}.txt`, salida);

/*
fs.writeFile(`tabla-${tabla}.txt`, salida, (err) => {
  if (err) throw err;
  console.log(`tabla-${tabla}.txt creada`);
});
*/
