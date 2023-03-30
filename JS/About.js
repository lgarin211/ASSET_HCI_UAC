data = {
    0: {
        title: "An Epic Fantasy Adventure",
        desc: "Experience an immersive single-player campaign. As a traveler from another world, you will embark on a journey to reunite with your long-lost sibling and unravel the mysteries of Teyvat, and yourself.",
        img: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/about1.jpg"
    },
    1: {
        title: "Your World to Discover",
        desc: "Fly across the open world, swim through crystal-clear waters, and climb towering mountains. Stray off the beaten path to discover all the hidden secrets of a world full of wonder and mystery.",
        img: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/about2.jpg"
    },
    2: {
        title: "Travel Alone or Battle Together",
        desc: "Not just another mindless hack and slash. Manipulating the various elements is the key to defeating powerful enemies and solving challenging puzzles.",
        img: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/about3.png"
    },
    3: {
        title: "Master the Seven Elements",
        desc: "Charge head-on into battles solo, or invite friends to join the fight against dangerous monsters with 4-player cross-play for PS4, iOS, Android, and PC.",
        img: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/about4.png"
    },
    4: {
        title: "Build Your Dream Team",
        desc: "Choose who fights by your side. Build your party from over 20+ characters (with more to come) — each with unique abilities, personalities, and combat styles.",
        img: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/about5.jpg"
    },
}

dataS = {
    0: {
        img: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/ss1.jpg"
    },
    1: {
        img: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/ss2.jpg"
    },
    2: {
        img: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/ss3.jpg"
    },
    3: {
        img: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/ss4.jpg"
    },
    4: {
        img: "https://lgarin211.github.io/ASSET_HCI_UAC/ASSET/CHARAKTERASSET/ss5.jpg"
    },
}

Ar_F = 0;
Ar_C = 0;

function obinoz() {
    document.getElementById("ZPOWL").src = dataS[Ar_C].img;
    if (Ar_C == Object.keys(dataS).length - 1) {
        Ar_C = 0;
    } else {
        Ar_C++;
    }
}

function oricon() {
    document.getElementById("TITLE-F").innerHTML = data[Ar_F].title;
    //alert(data[Ar_F].desc)
    document.getElementById("DECS-F").innerHTML = data[Ar_F].desc;
    document.getElementById("BIG-F").src = data[Ar_F].img;

    if (Ar_F == Object.keys(data).length - 1) {
        Ar_F = 0;
    } else {
        Ar_F++;
    }
}


oricon(0)