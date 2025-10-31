import { lahan, weatherData } from "./data.js";
import { validasiLahan, hitungPetak } from "./land_process.js";
import { cekCuaca } from "./weather_checker.js";

console.log("Program Manajemen Lahan Perkebunan Cerdas\n");

const lahanTervalidasi = validasiLahan(lahan);
const cuacaCocok = cekCuaca(weatherData);
const hasil = hitungPetak(lahanTervalidasi, cuacaCocok);


console.log("=== HASIL MANAJEMEN LAHAN ===");
console.log("Kondisi akhir lahan:");
console.log(lahanTervalidasi);
console.log(`\nTotal petak subur: ${hasil.totalSubur}`);
console.log(`Total petak yang ditanami: ${hasil.totalDitanami}`);