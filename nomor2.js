const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
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
  }, 100);
};

function tampil(cek, month) {
  try {
    if (cek) throw cek;
    if (month) {
      month.map((item) => {
        console.log(item);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}

getMonth(tampil);
