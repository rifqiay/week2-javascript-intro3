// 1
// const tes = new Promise((resolve, reject) => {
//   let kondisi = true;
//   setTimeout(() => {
//     const name = [
//       "Abigail",
//       "Alexandra",
//       "Amanda",
//       "Angela",
//       "Bella",
//       "Carol",
//       "Caroline",
//       "Carolyn",
//       "Diana",
//       "Elizabeth",
//       "Ella",
//       "Faith",
//       "Olivia",
//     ];
//     if (kondisi) {
//       resolve(name);
//     } else {
//       reject(new Error("Sorry data not found"));
//     }
//   }, 5000);
// });

// tes
//   .then((result) => {
//     result.map((item) => {
//       console.log(`Name : ${item}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

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
