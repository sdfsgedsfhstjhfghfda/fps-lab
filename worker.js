const GPU_DATABASE = [
    { id: "gtx1650", name: "NVIDIA GeForce GTX 1650", score: 35 },
    { id: "gtx1650_super", name: "NVIDIA GeForce GTX 1650 SUPER", score: 42 },
    { id: "gtx1660", name: "NVIDIA GeForce GTX 1660", score: 48 },
    { id: "gtx1660_super", name: "NVIDIA GeForce GTX 1660 SUPER", score: 55 },
    { id: "gtx1660_ti", name: "NVIDIA GeForce GTX 1660 Ti", score: 58 },
    { id: "rtx2060", name: "NVIDIA GeForce RTX 2060", score: 65 },
    { id: "rtx2060_super", name: "NVIDIA GeForce RTX 2060 SUPER", score: 72 },
    { id: "rtx2070", name: "NVIDIA GeForce RTX 2070", score: 76 },
    { id: "rtx2070_super", name: "NVIDIA GeForce RTX 2070 SUPER", score: 82 },
    { id: "rtx2080", name: "NVIDIA GeForce RTX 2080", score: 88 },
    { id: "rtx2080_super", name: "NVIDIA GeForce RTX 2080 SUPER", score: 92 },
    { id: "rtx2080_ti", name: "NVIDIA GeForce RTX 2080 Ti", score: 100 },

    { id: "rtx3060", name: "NVIDIA GeForce RTX 3060", score: 72 },
    { id: "rtx3060_ti", name: "NVIDIA GeForce RTX 3060 Ti", score: 88 },
    { id: "rtx3070", name: "NVIDIA GeForce RTX 3070", score: 96 },
    { id: "rtx3070_ti", name: "NVIDIA GeForce RTX 3070 Ti", score: 103 },
    { id: "rtx3080", name: "NVIDIA GeForce RTX 3080", score: 120 },
    { id: "rtx3080_ti", name: "NVIDIA GeForce RTX 3080 Ti", score: 130 },
    { id: "rtx3090", name: "NVIDIA GeForce RTX 3090", score: 135 },
    { id: "rtx3090_ti", name: "NVIDIA GeForce RTX 3090 Ti", score: 142 },

    { id: "rtx4060", name: "NVIDIA GeForce RTX 4060", score: 82 },
    { id: "rtx4060_ti", name: "NVIDIA GeForce RTX 4060 Ti", score: 92 },
    { id: "rtx4070", name: "NVIDIA GeForce RTX 4070", score: 115 },
    { id: "rtx4070_super", name: "NVIDIA GeForce RTX 4070 SUPER", score: 128 },
    { id: "rtx4070_ti", name: "NVIDIA GeForce RTX 4070 Ti", score: 135 },
    { id: "rtx4070_ti_super", name: "NVIDIA GeForce RTX 4070 Ti SUPER", score: 142 },
    { id: "rtx4080", name: "NVIDIA GeForce RTX 4080", score: 165 },
    { id: "rtx4080_super", name: "NVIDIA GeForce RTX 4080 SUPER", score: 172 },
    { id: "rtx4090", name: "NVIDIA GeForce RTX 4090", score: 200 },

    { id: "rtx5070", name: "NVIDIA GeForce RTX 5070", score: 135 },
    { id: "rtx5070_ti", name: "NVIDIA GeForce RTX 5070 Ti", score: 155 },
    { id: "rtx5080", name: "NVIDIA GeForce RTX 5080", score: 185 },
    { id: "rtx5090", name: "NVIDIA GeForce RTX 5090", score: 240 },

    { id: "rx570", name: "AMD Radeon RX 570", score: 35 },
    { id: "rx580", name: "AMD Radeon RX 580", score: 40 },
    { id: "rx590", name: "AMD Radeon RX 590", score: 44 },
    { id: "rx5500xt", name: "AMD Radeon RX 5500 XT", score: 48 },
    { id: "rx5600xt", name: "AMD Radeon RX 5600 XT", score: 62 },
    { id: "rx5700", name: "AMD Radeon RX 5700", score: 68 },
    { id: "rx5700xt", name: "AMD Radeon RX 5700 XT", score: 76 },
    { id: "rx6600", name: "AMD Radeon RX 6600", score: 70 },
    { id: "rx6600xt", name: "AMD Radeon RX 6600 XT", score: 78 },
    { id: "rx6700xt", name: "AMD Radeon RX 6700 XT", score: 95 },
    { id: "rx6800", name: "AMD Radeon RX 6800", score: 110 },
    { id: "rx6800xt", name: "AMD Radeon RX 6800 XT", score: 125 },
    { id: "rx6900xt", name: "AMD Radeon RX 6900 XT", score: 135 },
    { id: "rx6950xt", name: "AMD Radeon RX 6950 XT", score: 142 },
    { id: "rx7600", name: "AMD Radeon RX 7600", score: 76 },
    { id: "rx7600xt", name: "AMD Radeon RX 7600 XT", score: 84 },
    { id: "rx7700xt", name: "AMD Radeon RX 7700 XT", score: 105 },
    { id: "rx7800xt", name: "AMD Radeon RX 7800 XT", score: 120 },
    { id: "rx7900xt", name: "AMD Radeon RX 7900 XT", score: 150 },
    { id: "rx7900xtx", name: "AMD Radeon RX 7900 XTX", score: 175 },

    { id: "arc_a380", name: "Intel Arc A380", score: 42 },
    { id: "arc_a580", name: "Intel Arc A580", score: 62 },
    { id: "arc_a750", name: "Intel Arc A750", score: 70 },
    { id: "arc_a770", name: "Intel Arc A770", score: 78 },
    { id: "arc_b580", name: "Intel Arc B580", score: 95 }
];

const CPU_DATABASE = [
    { id: "i5_9400f", name: "Intel Core i5-9400F", score: 55 },
    { id: "i5_10400f", name: "Intel Core i5-10400F", score: 65 },
    { id: "i5_11400f", name: "Intel Core i5-11400F", score: 72 },
    { id: "i5_12400f", name: "Intel Core i5-12400F", score: 88 },
    { id: "i5_13400f", name: "Intel Core i5-13400F", score: 95 },
    { id: "i5_14400f", name: "Intel Core i5-14400F", score: 100 },
    { id: "i5_14600k", name: "Intel Core i5-14600K", score: 120 },

    { id: "i7_10700k", name: "Intel Core i7-10700K", score: 85 },
    { id: "i7_11700k", name: "Intel Core i7-11700K", score: 92 },
    { id: "i7_12700k", name: "Intel Core i7-12700K", score: 110 },
    { id: "i7_13700k", name: "Intel Core i7-13700K", score: 135 },
    { id: "i7_14700k", name: "Intel Core i7-14700K", score: 145 },

    { id: "i9_10900k", name: "Intel Core i9-10900K", score: 95 },
    { id: "i9_11900k", name: "Intel Core i9-11900K", score: 100 },
    { id: "i9_12900k", name: "Intel Core i9-12900K", score: 125 },
    { id: "i9_13900k", name: "Intel Core i9-13900K", score: 150 },
    { id: "i9_14900k", name: "Intel Core i9-14900K", score: 160 },
    { id: "i9_14900hx", name: "Intel Core i9-14900HX", score: 155 },

    { id: "r5_3600", name: "AMD Ryzen 5 3600", score: 65 },
    { id: "r5_5600", name: "AMD Ryzen 5 5600", score: 82 },
    { id: "r5_5600x", name: "AMD Ryzen 5 5600X", score: 86 },
    { id: "r5_7600", name: "AMD Ryzen 5 7600", score: 105 },
    { id: "r5_7600x", name: "AMD Ryzen 5 7600X", score: 110 },

    { id: "r7_5700x", name: "AMD Ryzen 7 5700X", score: 100 },
    { id: "r7_5800x", name: "AMD Ryzen 7 5800X", score: 105 },
    { id: "r7_5800x3d", name: "AMD Ryzen 7 5800X3D", score: 125 },
    { id: "r7_7700x", name: "AMD Ryzen 7 7700X", score: 120 },
    { id: "r7_7800x3d", name: "AMD Ryzen 7 7800X3D", score: 145 },
    { id: "r7_9700x", name: "AMD Ryzen 7 9700X", score: 140 },
    { id: "r7_9800x3d", name: "AMD Ryzen 7 9800X3D", score: 160 },

    { id: "r9_5900x", name: "AMD Ryzen 9 5900X", score: 115 },
    { id: "r9_5950x", name: "AMD Ryzen 9 5950X", score: 125 },
    { id: "r9_7900x", name: "AMD Ryzen 9 7900X", score: 140 },
    { id: "r9_7950x", name: "AMD Ryzen 9 7950X", score: 150 },
    { id: "r9_7950x3d", name: "AMD Ryzen 9 7950X3D", score: 158 },
    { id: "r9_8945hx", name: "AMD Ryzen 9 8945HX", score: 145 },
    { id: "r9_9950x", name: "AMD Ryzen 9 9950X", score: 165 },
    { id: "r9_9950x3d", name: "AMD Ryzen 9 9950X3D", score: 175 }
];

const GAME_DATABASE = [
    { id: "cyberpunk2077", name: "Cyberpunk 2077" },
    { id: "reddead2", name: "Red Dead Redemption 2" },
    { id: "gta5", name: "Grand Theft Auto V" },
    { id: "gtavi", name: "Grand Theft Auto VI" },
    { id: "rdr", name: "Red Dead Redemption" },
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
    { id: "assassins_creed_valhalla", name: "Assassin's Creed Valhalla" },
    { id: "assassins_creed_shadows", name: "Assassin's Creed Shadows" },
    { id: "far_cry_6", name: "Far Cry 6" },
    { id: "dying_light_2", name: "Dying Light 2" },
    { id: "alan_wake_2", name: "Alan Wake 2" },
    { id: "starfield", name: "Starfield" },
    { id: "hogwarts", name: "Hogwarts Legacy" },
    { id: "the_last_of_us", name: "The Last of Us Part I" },
    { id: "last_of_us_2", name: "The Last of Us Part II Remastered" },
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

function calculatePerformance(config) {

    const gpu = GPU_DATABASE.find(
        item => item.id === config.gpu
    );

    const cpu = CPU_DATABASE.find(
        item => item.id === config.cpu
    );

    const game = GAME_DATABASE.find(
        item => item.id === config.game
    );

    if (!gpu || !cpu || !game) {
        return null;
    }

    let fps =
        55 *
        (gpu.score / 100) *
        (cpu.score / 100);

    if (config.resolution === "1080") {
        fps *= 1.35;
    } else if (config.resolution === "1440") {
        fps *= 1.0;
    } else if (config.resolution === "1600") {
        fps *= 0.88;
    } else if (config.resolution === "2160") {
        fps *= 0.62;
    }

    const qualityMultiplier = {
        low: 1.35,
        medium: 1.15,
        high: 1.0,
        ultra: 0.82
    };

    fps *= qualityMultiplier[config.quality] || 1;

    if (config.rt === true || config.rt === "on") {
        fps *= 0.68;
    }

    const upscaleMultiplier = {
        native: 1,
        quality: 1.22,
        balanced: 1.35,
        performance: 1.55
    };

    fps *= upscaleMultiplier[config.upscaling] || 1;

    if (config.ram < 16) {
        fps *= 0.82;
    } else if (config.ram >= 32) {
        fps *= 1.03;
    }

    fps = Math.max(5, Math.round(fps));

    let renderedFPS = fps;

    if (config.frameGeneration === "2x") {
        renderedFPS = Math.round(fps * 1.55);
    }

    if (config.frameGeneration === "3x") {
        renderedFPS = Math.round(fps * 2.1);
    }

    if (config.frameGeneration === "4x") {
        renderedFPS = Math.round(fps * 2.65);
    }

    return {
        game: game.name,
        gpu: gpu.name,
        cpu: cpu.name,

        averageFPS: renderedFPS,
        renderedFPS: renderedFPS,

        minimumFPS: Math.max(
            1,
            Math.round(renderedFPS * 0.75)
        ),

        maximumFPS: Math.round(
            renderedFPS * 1.12
        ),

        onePercentLow: Math.max(
            1,
            Math.round(fps * 0.72)
        ),

        zeroPointOneLow: Math.max(
            1,
            Math.round(fps * 0.58)
        ),

        bottleneck:
            gpu.score < cpu.score
                ? "GPU"
                : "CPU"
    };
}

function jsonResponse(data, status = 200) {
    return new Response(
        JSON.stringify(data),
        {
            status,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            }
        }
    );
}

export default {

    async fetch(request) {

        if (request.method === "OPTIONS") {
            return jsonResponse(null);
        }

        if (request.method !== "POST") {
            return jsonResponse({
                success: false,
                error: "Sadece POST isteği kullanılabilir."
            }, 405);
        }

        try {

            const config = await request.json();

            const result =
                calculatePerformance(config);

            if (!result) {
                return jsonResponse({
                    success: false,
                    error: "Geçersiz GPU, CPU veya oyun."
                }, 400);
            }

            return jsonResponse({
                success: true,
                result: result
            });

        } catch (error) {

            return jsonResponse({
                success: false,
                error: "Geçersiz istek."
            }, 400);

        }
    }
};
