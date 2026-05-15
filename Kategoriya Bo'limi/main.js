const catMod = document.getElementById("catMod");
const catKr = document.getElementById("catKr");
const catRm = document.querySelector(".catRm");
const catSdd = document.querySelector(".catSdd");
// ==========================================
const catModInp = document.querySelector("#catModInp");
// ====================
const catKrInp1 = document.getElementById("catKrInp1");
const catKrInp2 = document.getElementById("catKrInp2");
const catKrInp3 = document.getElementById("catKrInp3");
// =======================
const catRmInp1 = document.getElementById("catRmInp1");
const catRmInp3 = document.getElementById("catRmInp3");
const catRmInp2 = document.getElementById("catRmInp2");
// ==========================
const catSddInp1 = document.getElementById("catSddInp1");
const catSddInp2 = document.getElementById("catSddInp2");
const catSddInp3 = document.getElementById("catSddInp3");

// =============================

const catbtMod = document.getElementById("catbtMod");
const catbtKr = document.getElementById("catbtKr");
const catbtRm = document.getElementById("catbtRm");
const catbtSdd = document.getElementById("catbtSdd");
// ======================
   
catModInp.addEventListener("change", () => {
  if (catModInp.checked) {
    catMod.innerText = catModInp.value;
    catMod.style.display = "inline";
    catbtMod.style.display = "inline";
  } else {
    catMod.style.display = "none";
    catbtMod.style.display = "none";
  }
});
catbtMod.addEventListener("click", () => {
    catMod.style.display = "none";
    catbtMod.style.display = "none";
    catModInp.checked = false;
});
// ====================
catKrInp1.addEventListener("change", () => {
     if (catKrInp1.checked) { 
    catKr.innerText = catKrInp1.value;
    catKr.style.display = "inline";
    catbtKr.style.display = "inline";
     } else {
        catKr.style.display = "none";
        catbtKr.style.display = "none";
     }
});
catKrInp2.addEventListener("change", () => {
    if (catKrInp2.checked) {
        catKr.innerText = catKrInp2.value;
        catKr.style.display = "inline";
        catbtKr.style.display = "inline";
    } else {
        catKr.style.display = "none";
        catbtKr.style.display = "none";
    }
});
catKrInp3.addEventListener("change", () => {
    if (catKrInp3.checked) {
        catKr.innerText = catKrInp3.value;
        catKr.style.display = "inline";
        catbtKr.style.display = "inline";
    } else {
        catKr.style.display = "none";
        catbtKr.style.display = "none";
    }
});

catbtKr.addEventListener("click", () => {
    catKr.style.display = "none";
    catbtKr.style.display = "none";
    catKrInp1.checked = false;
    catKrInp2.checked = false;
    catKrInp3.checked = false;
});
// ===================

catRmInp1.addEventListener("change", () => {
     if (catRmInp1.checked) {
    catRm.innerText = catRmInp1.value;
    catRm.style.display = "inline";
        catbtRm.style.display = "inline";
     } else {
        catRm.style.display = "none";
        catbtRm.style.display = "none";
     }
}); 
catRmInp2.addEventListener("change", () => {
    if (catRmInp2.checked) {
        catRm.innerText = catRmInp2.value;
        catRm.style.display = "inline";
        catbtRm.style.display = "inline";
    } else {
        catRm.style.display = "none";
        catbtRm.style.display = "none";
    }
});
catRmInp3.addEventListener("change", () => {
    if (catRmInp3.checked) {
        catRm.innerText = catRmInp3.value;
        catRm.style.display = "inline";
        catbtRm.style.display = "inline";
    } else {
        catRm.style.display = "none";
        catbtRm.style.display = "none";
    }
});
catbtRm.addEventListener("click", () => {
    catRm.style.display = "none";
    catbtRm.style.display = "none";
    catRmInp1.checked = false;
    catRmInp2.checked = false;
    catRmInp3.checked = false;
});


// ======================
catSddInp1.addEventListener("change", () => {
     if (catSddInp1.checked) { 
    catSdd.innerText = catSddInp1.value;
    catSdd.style.display = "inline";
        catbtSdd.style.display = "inline";
     } else {
        catSdd.style.display = "none";
        catbtSdd.style.display = "none";
     }
});
catSddInp2.addEventListener("change", () => {
    if (catSddInp2.checked) {
        catSdd.innerText = catSddInp2.value;
        catSdd.style.display = "inline";
        catbtSdd.style.display = "inline";
    } else {
        catSdd.style.display = "none";
        catbtSdd.style.display = "none";
    }
});
catSddInp3.addEventListener("change", () => {
    if (catSddInp3.checked) {
        catSdd.innerText = catSddInp3.value;
        catSdd.style.display = "inline";
        catbtSdd.style.display = "inline";
    } else {
        catSdd.style.display = "none";
        catbtSdd.style.display = "none";
    }
});

catbtSdd.addEventListener("click", () => {
    catSdd.style.display = "none";
    catbtSdd.style.display = "none";
    catSddInp1.checked = false;
    catSddInp2.checked = false;
    catSddInp3.checked = false;
});
// =============================
const headerDiv = document.getElementById("headerDiv");
const openHeader = document.getElementById("profilBtn");

openHeader.addEventListener("click", () => {
    headerDiv.style.display = "block";
});