const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Halo, perkenalkan nama saya rian de bot, siapa nama kamu?",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohh ${data?.usia}, hobi kamu apa ya?`,
    `Waaww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
    `Ohhh ${data?.pacar}, ya udah kalau gitu, udahan ya?`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ usersData: usersData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1000]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Thank you ya ${usersData[0]} sudah main ke bot saya, kali-kali kita ${usersData[2]} bareng ya`;
  jawaban.value = "Siap, thanks juga!";
}

function botEnd() {
  window.location.reload();
}
