datamaps = {
    0: {
        "Name": "Liyue", //nama maps
        "img": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/liyuemap.png", //bgmaps atas
        "Text": "A bountiful harbor that lies in the east of Teyvat.Mountains stand tall and proud alongside the stone forest, that together with the open plains and lively rivers make up Liyue's bountiful landscape, which shows its unique beauty through each of the four seasons. Just how many gifts from the Geo God lie in wait amongst the rocks of Liyue's mountains?",
        "BG": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/liyuelogo.png", //bg maps bawah
        "Hover": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/hoverliyue.png",
        "item": {
            0: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/harbor.png", //img kecil
            1: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/dihua.jpg", //img kecil
            2: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/tianheng.jpg", //img kecil
        }
    },
    1: {
        "Name": "Mondstadt",
        "img": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/mondstatmap.png",
        "Text": "A city of freedom that lies in the northeast of Teyvat.From amongst mountains and wide-open plains, carefree breezes carry the scent of dandelions — a gift from the Anemo God, Barbatos — across Cider Lake to Mondstadt, which sits on an island in the middle of the lake.",
        "BG": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/monlogo.png",
        "Hover": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/hovermondstat.png",
        "item": {
            0: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/mon1.jpg",
            1: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/mon2.jpg",
            2: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/mon3.jpg",
        }
    },
    2: {
        "Name": "Inazuma", //nama maps
        "img": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/inazumamap.png", //bgmaps atas
        "Text": "An Isolated Archipelago Far East of TeyvatOvercome endless thunderstorms and set foot on the islands of red maple and cherry blossoms. On winding shores and towering cliffs, and in forests and mountains full of secrets, witness the Eternity pursued by Her Excellency, the Almighty Narukami Ogosho.",
        "BG": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/inalogo.png", //bg maps bawah
        "Hover": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/hoverinazuma.png",
        "item": {
            0: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/ina1.jpg", //img kecil
            1: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/ina2.jpg", //img kecil
            2: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/ina3.jpg", //img kecil
        }
    },
    3: {
        "Name": "Sumeru", //nama maps
        "img": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/sumerumap.png", //bgmaps atas
        "Text": "The city of scholars located in the west-central part of Teyvat.A fantastical nation of both lush rainforest and barren desert, where countless fruits of wisdom grow and are buried. Whether Travelers travel from afar through the forest to reach the academy city or delve deep into the desert to discover the historical ruins of the red desert, a wealth of valuable knowledge awaits them here.",
        "BG": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/sumlogo.png", //bg maps bawah
        "Hover": "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/hoversumeru.png",
        "item": {
            0: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/sum1.jpg", //img kecil
            1: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/sum2.jpg", //img kecil
            2: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/sum3.jpg", //img kecil
        }
    },
}

function loadmaps(lws) {
    document.getElementById("nameBawah").innerHTML = document.getElementById("name").innerHTML = "// " + datamaps[lws].Name + " \\\\";
    //document.getElementById("Text-Desk").innerHTML = datamaps[lws].Text;
    // document.getElementById("Text-Desk_bawah").innerHTML = datamaps[lws].Text;
    document.getElementById("LWOQP").style = "background-image: url(" + datamaps[lws].img +
        "); background-size: cover; background-repeat: no-repeat; background-position: center;display: grid;";

    document.getElementById("holderpat").style = "background-image: url(" + datamaps[lws].BG +
        "); background-size: cover; background-repeat: no-repeat; background-position: center;display: none;";
    document.getElementById("FLIKER").innerHTML = ""
    document.getElementById("Mlg").src = datamaps[lws].BG;
    for (let index = 0; index < 3; index++) {
        document.getElementById("FLIKER").innerHTML += `<img src="` + datamaps[lws].item[index] +
            `" class="Autpil">`;
    }
}

function loadmap(lws) {
    document.getElementById("Text-Desk_bawah").innerHTML = datamaps[lws].Text;
    document.getElementById("LWOQP").style = "background-image: url(" + datamaps[lws].img +
        "); background-size: cover; background-repeat: no-repeat; background-position: center;";
    document.getElementById("Mlg").src = datamaps[lws].BG;
    document.getElementById("FLIKER").innerHTML = ""
    for (let index = 0; index < 3; index++) {
        document.getElementById("FLIKER").innerHTML += `<img src="` + datamaps[lws].item[index] +
            `" class="Autpil">`;
    }
    lmpz=lws;
}
var lmpz=0;
loadmap(1)

function flikerpat() {
    for (let index = 0; index < Object.keys(datamaps).length; index++) {
        document.getElementById("Powld").innerHTML +=
            `<div class="fortex" id="pi${index}" onclick="loadmaps(${index})">
            <img src="${datamaps[index].img}" alt=""  onmouseover="wujupu(this,${index},'hov')" onmouseout="wujupu(this,${index},'img')">
        </div>
        `
    }
}
flikerpat()

function fasup() {
    lmpz++
    if (lmpz > 4) {
        lmpz = 0;
    }
    loadmaps(lmpz)
}

function fasdown() {
    lmpz--
    if (lmpz < 0) {
        lmpz = 4;
    }
    loadmaps(lmpz)
}

function fuipot() {
    document.getElementById("holderpat").style.display = "none";
    document.getElementById("LWOQP").style.display = "grid";
}

function wujupu(element, la, ty) {
    if (ty == "hov") {
        element.src = datamaps[la].Hover;
    } else {
        element.src = datamaps[la].img;
    }
}