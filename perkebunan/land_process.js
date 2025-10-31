export function validasiLahan(lahan) {
  for (let i = 0; i < lahan.length; i++) {
    let baris = lahan[i];
    let jumlahSubur = 0;

    for (let j = 0; j < baris.length; j++) {
      if (baris[j] === "subur") jumlahSubur++;
    }


    if (jumlahSubur < baris.length / 2) {
      for (let j = 0; j < baris.length; j++) {
        baris[j] = "kering";
      }
    }
  }
  return lahan;
}

export function hitungPetak(lahan, cuacaCocok) {
  let totalSubur = 0;
  let totalDitanami = 0;

  for (let i = 0; i < lahan.length; i++) {
    for (let j = 0; j < lahan[i].length; j++) {
      if (lahan[i][j] === "subur") {
        totalSubur++;
        if (cuacaCocok) totalDitanami++;
      }
    }
  }

  return { totalSubur, totalDitanami };
}