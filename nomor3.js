// // 1
let cekKelulusan = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (n >= 70 && n <= 100) throw resolve("Selamat  Anda Lulus Ujian!");
        if (n >= 0 && n <= 69) throw reject("Maaf Anda Tidak Lulus Ujian!");
        if (n > 100 || n < 0) throw reject("Nilai salah");
      } catch (error) {
        return error;
      }
    }, 1000);
  });
};

cekKelulusan(80)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 2

const cekNum = (n) => {
  return new Promise((resolve, reject) => {
    let cek = n % 2 == 0;
    if (cek) {
      resolve(`${n} adalah bilangan genap`);
    } else {
      reject(new Error(`${n} adalah angka ganjil`));
    }
  });
};

cekNum(4)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
