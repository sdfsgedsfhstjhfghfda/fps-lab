const GPU_LIST = [
    { id: "gtx1650", name: "NVIDIA GeForce GTX 1650" },
    { id: "gtx1650_super", name: "NVIDIA GeForce GTX 1650 SUPER" },
    { id: "gtx1660", name: "NVIDIA GeForce GTX 1660" },
    { id: "gtx1660_super", name: "NVIDIA GeForce GTX 1660 SUPER" },
    { id: "gtx1660_ti", name: "NVIDIA GeForce GTX 1660 Ti" },

    { id: "rtx2060", name: "NVIDIA GeForce RTX 2060" },
    { id: "rtx2060_super", name: "NVIDIA GeForce RTX 2060 SUPER" },
    { id: "rtx2070", name: "NVIDIA GeForce RTX 2070" },
    { id: "rtx2070_super", name: "NVIDIA GeForce RTX 2070 SUPER" },
    { id: "rtx2080", name: "NVIDIA GeForce RTX 2080" },
    { id: "rtx2080_super", name: "NVIDIA GeForce RTX 2080 SUPER" },
    { id: "rtx2080_ti", name: "NVIDIA GeForce RTX 2080 Ti" },

    { id: "rtx3060", name: "NVIDIA GeForce RTX 3060" },
    { id: "rtx3060_ti", name: "NVIDIA GeForce RTX 3060 Ti" },
    { id: "rtx3070", name: "NVIDIA GeForce RTX 3070" },
    { id: "rtx3070_ti", name: "NVIDIA GeForce RTX 3070 Ti" },
    { id: "rtx3080", name: "NVIDIA GeForce RTX 3080" },
    { id: "rtx3080_ti", name: "NVIDIA GeForce RTX 3080 Ti" },
    { id: "rtx3090", name: "NVIDIA GeForce RTX 3090" },
    { id: "rtx3090_ti", name: "NVIDIA GeForce RTX 3090 Ti" },

    { id: "rtx4060", name: "NVIDIA GeForce RTX 4060" },
    { id: "rtx4060_ti", name: "NVIDIA GeForce RTX 4060 Ti" },
    { id: "rtx4070", name: "NVIDIA GeForce RTX 4070" },
    { id: "rtx4070_super", name: "NVIDIA GeForce RTX 4070 SUPER" },
    { id: "rtx4070_ti", name: "NVIDIA GeForce RTX 4070 Ti" },
    { id: "rtx4070_ti_super", name: "NVIDIA GeForce RTX 4070 Ti SUPER" },
    { id: "rtx4080", name: "NVIDIA GeForce RTX 4080" },
    { id: "rtx4080_super", name: "NVIDIA GeForce RTX 4080 SUPER" },
    { id: "rtx4090", name: "NVIDIA GeForce RTX 4090" },

    { id: "rtx5070", name: "NVIDIA GeForce RTX 5070" },
    { id: "rtx5070_ti", name: "NVIDIA GeForce RTX 5070 Ti" },
    { id: "rtx5080", name: "NVIDIA GeForce RTX 5080" },
    { id: "rtx5090", name: "NVIDIA GeForce RTX 5090" }
];

const CPU_LIST = [
    { id: "i5_9400f", name: "Intel Core i5-9400F" },
    { id: "i5_10400f", name: "Intel Core i5-10400F" },
    { id: "i5_11400f", name: "Intel Core i5-11400F" },
    { id: "i5_12400f", name: "Intel Core i5-12400F" },
    { id: "i5_13400f", name: "Intel Core i5-13400F" },
    { id: "i5_14400f", name: "Intel Core i5-14400F" },
    { id: "i5_14600k", name: "Intel Core i5-14600K" },

    { id: "i7_10700k", name: "Intel Core i7-10700K" },
    { id: "i7_11700k", name: "Intel Core i7-11700K" },
    { id: "i7_12700k", name: "Intel Core i7-12700K" },
    { id: "i7_13700k", name: "Intel Core i7-13700K" },
    { id: "i7_14700k", name: "Intel Core i7-14700K" },

    { id: "i9_10900k", name: "Intel Core i9-10900K" },
    { id: "i9_11900k", name: "Intel Core i9-11900K" },
    { id: "i9_12900k", name: "Intel Core i9-12900K" },
    { id: "i9_13900k", name: "Intel Core i9-13900K" },
    { id: "i9_14900k", name: "Intel Core i9-14900K" },
    { id: "i9_14900hx", name: "Intel Core i9-14900HX" },

    { id: "r5_3600", name: "AMD Ryzen 5 3600" },
    { id: "r5_5600", name: "AMD Ryzen 5 5600" },
    { id: "r5_5600x", name: "AMD Ryzen 5 5600X" },
    { id: "r5_7600", name: "AMD Ryzen 5 7600" },
    { id: "r5_7600x", name: "AMD Ryzen 5 7600X" },

    { id: "r7_5700x", name: "AMD Ryzen 7 5700X" },
    { id: "r7_5800x", name: "AMD Ryzen 7 5800X" },
    { id: "r7_5800x3d", name: "AMD Ryzen 7 5800X3D" },
    { id: "r7_7700x", name: "AMD Ryzen 7 7700X" },
    { id: "r7_7800x3d", name: "AMD Ryzen 7 7800X3D" },
    { id: "r7_9700x", name: "AMD Ryzen 7 9700X" },
    { id: "r7_9800x3d", name: "AMD Ryzen 7 9800X3D" },

    { id: "r9_5900x", name: "AMD Ryzen 9 5900X" },
    { id: "r9_5950x", name: "AMD Ryzen 9 5950X" },
    { id: "r9_7900x", name: "AMD Ryzen 9 7900X" },
    { id: "r9_7950x", name: "AMD Ryzen 9 7950X" },
    { id: "r9_7950x3d", name: "AMD Ryzen 9 7950X3D" },
    { id: "r9_8945hx", name: "AMD Ryzen 9 8945HX" },
    { id: "r9_9950x", name: "AMD Ryzen 9 9950X" },
    { id: "r9_9950x3d", name: "AMD Ryzen 9 9950X3D" }
];

const GAME_LIST = [
    { id: "cyberpunk2077", name: "Cyberpunk 2077" },
    { id: "reddead2", name: "Red Dead Redemption 2" },
    { id: "gta5", name: "Grand Theft Auto V" },
    { id: "gtavi", name: "Grand Theft Auto VI" },
    { id: "resident_evil_4", name: "Resident Evil 4" },
    { id: "resident_evil_7", name: "Resident Evil 7" },
    { id: "resident_evil_village", name: "Resident Evil Village" },
    { id: "resident_evil_9", name: "Resident Evil Requiem" },
    { id: "hogwarts_legacy", name: "Hogwarts Legacy" },
    { id: "elden_ring", name: "Elden Ring" },
    { id: "elden_ring_nightreign", name: "Elden Ring Nightreign" },
    { id: "black_myth_wukong", name: "Black Myth: Wukong" },
    { id: "god_of_war", name: "God of War" },
    { id: "god_of_war_ragnarok", name: "God of War Ragnarök" },
    { id: "spiderman_remastered", name: "Marvel's Spider-Man Remastered" },
    { id: "spiderman_miles", name: "Marvel's Spider-Man: Miles Morales" },
    { id: "spiderman2", name: "Marvel's Spider-Man 2" },
    { id: "horizon_zero_dawn", name: "Horizon Zero Dawn" },
    { id: "horizon_forbidden_west", name: "Horizon Forbidden West" },
    { id: "forza_horizon_5", name: "Forza Horizon 5" },
    { id: "forza_horizon_4", name: "Forza Horizon 4" },
    { id: "fortnite", name: "Fortnite" },
    { id: "valorant", name: "VALORANT" },
    { id: "cs2", name: "Counter-Strike 2" },
    { id: "minecraft", name: "Minecraft Java Edition" },
    { id: "warzone", name: "Call of Duty: Warzone" },
    { id: "modern_warfare_3", name: "Call of Duty: Modern Warfare III" },
    { id: "black_ops_6", name: "Call of Duty: Black Ops 6" },
    { id: "battlefield_2042", name: "Battlefield 2042" },
    { id: "battlefield_6", name: "Battlefield 6" },
    { id: "rainbow_six", name: "Rainbow Six Siege" },
    { id: "pubg", name: "PUBG: Battlegrounds" },
    { id: "apex", name: "Apex Legends" },
    { id: "overwatch2", name: "Overwatch 2" },
    { id: "destiny2", name: "Destiny 2" },
    { id: "monster_hunter_wilds", name: "Monster Hunter Wilds" },
    { id: "dragon_age_veilguard", name: "Dragon Age: The Veilguard" },
    { id: "baldurs_gate_3", name: "Baldur's Gate 3" },
    { id: "diablo4", name: "Diablo IV" },
    { id: "assassins_creed_mirage", name: "Assassin's Creed Mirage" },
    { id: "resident_evil_2", name: "Resident Evil 2" },
    { id: "resident_evil_3", name: "Resident Evil 3" },
    { id: "days_gone", name: "Days Gone" },
    { id: "death_stranding", name: "Death Stranding" },
    { id: "death_stranding_2", name: "Death Stranding 2" }
];

function populateSelect(elementId, database) {
    const select = document.getElementById(elementId);

    if (!select) {
        console.error(`Element bulunamadı: ${elementId}`);
        return;
    }

    select.innerHTML = "";

    database.forEach(item => {
        const option = document.createElement("option");

        option.value = item.id;
        option.textContent = item.name;

        select.appendChild(option);
    });
}

function initializeFilters() {
    populateSelect("game", GAME_LIST);
    populateSelect("gpu", GPU_LIST);
    populateSelect("cpu", CPU_LIST);

    document.getElementById("game").value = "cyberpunk2077";
    document.getElementById("gpu").value = "rtx5070";
    document.getElementById("cpu").value = "r9_8945hx";
}