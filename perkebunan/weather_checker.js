export function cekCuaca(weatherData) {
  const { temperature, humidity, windSpeed } = weatherData;

  console.log("=== Pengecekan Cuaca ===");
  console.log(`Suhu: ${temperature}°C`);
  console.log(`Kelembaban: ${humidity}%`);
  console.log(`Kecepatan Angin: ${windSpeed} km/jam`);

  if (
    temperature < 20 || temperature > 30 ||
    humidity <= 50 ||
    windSpeed >= 15
  ) {
    console.log("Cuaca tidak cocok untuk bercocok tanam.\n");
    return false;
  } else {
    console.log("Cuaca cocok untuk bercocok tanam, sehingga tidak ada peringatan.\n");
    return true;
  }
}
