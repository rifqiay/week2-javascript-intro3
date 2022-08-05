const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 100);
  });
};

switch (new Date().getDay()) {
  case 0:
    day = "minggu";
    break;
  case 1:
    day = "senin";
    break;
  case 2:
    day = "selasa";
    break;
  case 3:
    day = "rabu";
    break;
  case 4:
    day = "kamis";
    break;
  case 5:
    day = "jumat";
    break;
  case 6:
    day = "sabtu";
    break;
}

cekHariKerja(day)
  .then((result) => {
    console.log(`${result} adalah hari kerja`);
  })
  .catch((error) => {
    console.log(error.message);
  });

// async function coba() {
//   try {
//     const result = await cekHariKerja(day);
//     console.log(`${result} adalah hari kerja`);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// coba();
