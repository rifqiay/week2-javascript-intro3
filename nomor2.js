const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

function tampil(cek, month) {
  return new Promise((resolve, reject) => {
    if (cek == null) {
      resolve(month);
    } else {
      reject(cek);
    }
  })
    .then((result) => {
      result.map((e) => {
        console.log(e);
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}

getMonth(tampil);
