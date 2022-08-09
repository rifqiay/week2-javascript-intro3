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
    }, 1000);
  });
};

//then(), catch()
//then untuk menangkap value promise jika kondisi resolve atau sukses
// catch untuk menangkap value promise jika kondisi reject atau gagal
function then(day) {
  cekHariKerja(day)
    .then((result) => {
      console.log(`${result} adalah hari kerja`);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
then("minggu");
then("senin");

//try catch
// try untuk menyisipkan code javascript yang mungkin terjadi error
//catch menangkap error yang terjadi di blok try
async function cek(day) {
  try {
    const result = await cekHariKerja(day);
    console.log(`${result} adalah hari kerja`);
  } catch (error) {
    console.log(error.message);
  }
}
cek("minggu");
cek("senin");
