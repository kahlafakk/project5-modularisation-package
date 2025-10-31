export function cekSkak(board) {
  let kingPos = null;
  let rookPos = null;

  // Cari posisi Raja dan Benteng
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "K") kingPos = [i, j];
      if (board[i][j] === "R") rookPos = [i, j];
    }
  }

  if (!kingPos || !rookPos) {
    return "Tidak ada Raja atau Benteng!";
  }

  const kr = kingPos[0];
  const kc = kingPos[1];
  const rr = rookPos[0];
  const rc = rookPos[1];

  // Cek horizontal (baris sama)
  if (kr === rr) {
    let blocked = false;
    if (kc < rc) {
      for (let c = kc + 1; c < rc; c++) {
        if (board[kr][c] !== ".") blocked = true;
      }
    } else {
      for (let c = rc + 1; c < kc; c++) {
        if (board[kr][c] !== ".") blocked = true;
      }
    }
    if (!blocked) return "SKAK!";
  }

  // Cek vertical (kolom sama)
  if (kc === rc) {
    let blocked = false;
    if (kr < rr) {
      for (let r = kr + 1; r < rr; r++) {
        if (board[r][kc] !== ".") blocked = true;
      }
    } else {
      for (let r = rr + 1; r < kr; r++) {
        if (board[r][kc] !== ".") blocked = true;
      }
    }
    if (!blocked) return "SKAK!";
  }

  return "Aman";
}
