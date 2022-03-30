const kalimat1 = "kasur ini rusak";
const kalimat2 = "jelas salah";
const kalimat3 = "ibu raTna Antar ubi";

function coba(kalimat) {
  console.log(kalimat);
  let kal = kalimat.toLowerCase();
  const k1 = kal.split("");
  let salah = 0;

  for (let i = 0; i < k1.length; i++) {
    let j = k1.length - 1;
    // console.log(k1[i]);
    // console.log(k1[j]);

    if (k1[i] == k1[j - i]) {
      continue;
    } else {
      salah++;
      break;
    }
  }
  if (salah == 0) {
    console.log("benar");
  } else {
    console.log("salah");
  }
}

coba(kalimat1);
coba(kalimat2);
coba(kalimat3);
