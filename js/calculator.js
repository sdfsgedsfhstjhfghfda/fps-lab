function calculateTemperatures(config, gpu, cpu, game, isLaptop, gpuWatt, cpuWatt) {

    // Temel sıcaklık aralıkları (referans değerler)
    const baseCpuTemp = 55; // CPU için baz sıcaklık
    const baseGpuTemp = 60; // GPU için baz sıcaklık

    // Platform bazlı soğutma faktörleri
    const desktopCoolingFactor = 1.0;
    const laptopCoolingFactor = 0.85; // Laptop soğutması daha zayıf

    const coolingFactor = isLaptop ? laptopCoolingFactor : desktopCoolingFactor;

    // CPU güç tüketimi tahmini
    let cpuPowerEstimate;
    if (isLaptop) {
        cpuPowerEstimate = cpuWatt;
    } else {
        // Masaüstü CPU için güç tahmini (score bazlı)
        cpuPowerEstimate = cpu.score * 1.2;
    }

    // GPU güç tüketimi tahmini
    let gpuPowerEstimate;
    if (isLaptop) {
        gpuPowerEstimate = gpuWatt;
    } else {
        // Masaüstü GPU için güç tahmini (score bazlı)
        gpuPowerEstimate = gpu.score * 1.5;
    }

    // Oyun yükü faktörü
    const gameLoadFactors = {
        // Ultra yoğun oyunlar
        'cyberpunk2077': 1.25,
        'reddead2': 1.22,
        'black_myth_wukong': 1.28,
        'alan_wake_2': 1.30,
        'starfield': 1.25,
        'the_last_of_us': 1.22,

        // Çok yoğun oyunlar
        'gtavi': 1.18,
        'witcher_3': 1.20,
        'elden_ring': 1.18,
        'death_stranding_2': 1.15,

        // Yoğun oyunlar
        'gta5': 1.15,
        'god_of_war_ragnarok': 1.15,
        'spiderman2': 1.15,
        'horizon_forbidden_west': 1.15,

        // Orta seviye oyunlar
        'fortnite': 0.95,
        'valorant': 0.90,
        'cs2': 0.90,
        'overwatch2': 0.92,
        'apex': 0.94,

        // Hafif oyunlar
        'minecraft': 0.80,
        'among_us': 0.75,
        'stardew_valley': 0.75,

        // Varsayılan
        'default': 1.0
    };

    const gameLoadFactor = gameLoadFactors[game.id] || gameLoadFactors['default'];

    // Çözünürlük ve grafik ayarları etkisi
    let graphicsLoad = 1.0;

    // Çözünürlük etkisi
    const resolutionLoad = {
        '1080': 0.85,
        '1440': 1.0,
        '1600': 1.15,
        '2160': 1.35
    };
    graphicsLoad *= resolutionLoad[config.resolution] || 1.0;

    // Grafik kalitesi etkisi
    const qualityLoad = {
        'low': 0.70,
        'medium': 0.85,
        'high': 1.0,
        'ultra': 1.25
    };
    graphicsLoad *= qualityLoad[config.quality] || 1.0;

    // Ray Tracing etkisi
    if (config.rt) {
        graphicsLoad *= 1.20;
    }

    // CPU sıcaklık hesaplama
    let cpuTempIncrease = 0;

    // Güç bazlı sıcaklık artışı (doğrusal değil, yumuşak eğri)
    const cpuPowerFactor = Math.pow(cpuPowerEstimate / 65, 0.8); // 65W referans
    cpuTempIncrease += cpuPowerFactor * 15;

    // Oyun yükü etkisi
    cpuTempIncrease += (gameLoadFactor - 1) * 20;

    // Platform soğutma etkisi
    cpuTempIncrease *= (1 / coolingFactor);

    // Çözünürlük hafif CPU etkisi
    if (config.resolution === '2160') {
        cpuTempIncrease += 5;
    }

    // Final CPU sıcaklığı
    let estimatedCpuTemp = baseCpuTemp + cpuTempIncrease;

    // Gerçekçi sınırlar
    estimatedCpuTemp = Math.max(40, Math.min(95, estimatedCpuTemp));

    // GPU sıcaklık hesaplama
    let gpuTempIncrease = 0;

    // Güç bazlı sıcaklık artışı (yumuşak eğri)
    const gpuPowerFactor = Math.pow(gpuPowerEstimate / 150, 0.75); // 150W referans
    gpuTempIncrease += gpuPowerFactor * 20;

    // Grafik yükü etkisi
    gpuTempIncrease += (graphicsLoad - 1) * 25;

    // Platform soğutma etkisi
    gpuTempIncrease *= (1 / coolingFactor);

    // Upscaling etkisi (azaltır)
    const upscalingCooling = {
        'native': 1.0,
        'quality': 0.95,
        'balanced': 0.90,
        'performance': 0.85
    };
    gpuTempIncrease *= upscalingCooling[config.upscaling] || 1.0;

    // Frame Generation etkisi (GPU yükünü artırır ama display FPS etkisi farklı)
    if (config.frameGeneration !== 'off') {
        gpuTempIncrease += 5;
    }

    // Final GPU sıcaklığı
    let estimatedGpuTemp = baseGpuTemp + gpuTempIncrease;

    // Gerçekçi sınırlar
    estimatedGpuTemp = Math.max(45, Math.min(95, estimatedGpuTemp));

    // Sıcaklık durumları
    function getThermalStatus(temp, type) {
        const cpuRanges = [
            { max: 50, status: 'COOL', color: '#53f2b3' },
            { max: 65, status: 'NORMAL', color: '#5eeaff' },
            { max: 75, status: 'WARM', color: '#ffc45d' },
            { max: 85, status: 'HOT', color: '#ff8c42' },
            { max: 90, status: 'VERY HOT', color: '#ff718b' },
            { max: 95, status: 'CRITICAL', color: '#ff3333' }
        ];

        const gpuRanges = [
            { max: 55, status: 'COOL', color: '#53f2b3' },
            { max: 70, status: 'NORMAL', color: '#5eeaff' },
            { max: 80, status: 'WARM', color: '#ffc45d' },
            { max: 85, status: 'HOT', color: '#ff8c42' },
            { max: 90, status: 'VERY HOT', color: '#ff718b' },
            { max: 95, status: 'CRITICAL', color: '#ff3333' }
        ];

        const ranges = type === 'cpu' ? cpuRanges : gpuRanges;

        for (const range of ranges) {
            if (temp <= range.max) {
                return {
                    status: range.status,
                    color: range.color
                };
            }
        }

        return {
            status: 'CRITICAL',
            color: '#ff3333'
        };
    }

    const cpuThermalStatus = getThermalStatus(estimatedCpuTemp, 'cpu');
    const gpuThermalStatus = getThermalStatus(estimatedGpuTemp, 'gpu');

    // Thermal throttling risk analizi
    const cpuThrottleRisk = estimatedCpuTemp >= 85 ? 'HIGH' : estimatedCpuTemp >= 75 ? 'MODERATE' : 'LOW';
    const gpuThrottleRisk = estimatedGpuTemp >= 85 ? 'HIGH' : estimatedGpuTemp >= 80 ? 'MODERATE' : 'LOW';

    // Genel thermal durum
    let overallThermalStatus;
    const maxTemp = Math.max(estimatedCpuTemp, estimatedGpuTemp);

    if (maxTemp <= 65) {
        overallThermalStatus = 'EXCELLENT';
    } else if (maxTemp <= 75) {
        overallThermalStatus = 'GOOD';
    } else if (maxTemp <= 85) {
        overallThermalStatus = 'ACCEPTABLE';
    } else {
        overallThermalStatus = 'CONCERNING';
    }

    return {
        cpuTemperature: Math.round(estimatedCpuTemp),
        gpuTemperature: Math.round(estimatedGpuTemp),
        cpuThermalStatus: cpuThermalStatus.status,
        gpuThermalStatus: gpuThermalStatus.status,
        cpuThermalColor: cpuThermalStatus.color,
        gpuThermalColor: gpuThermalStatus.color,
        overallThermalStatus: overallThermalStatus,
        cpuThrottleRisk: cpuThrottleRisk,
        gpuThrottleRisk: gpuThrottleRisk
    };
}

function calculatePerformance(config) {

    const gpu =
        GPU_DATABASE.find(
            item => item.id === config.gpu
        );

    const cpu =
        CPU_DATABASE.find(
            item => item.id === config.cpu
        );

    const game =
        GAME_DATABASE.find(
            item => item.id === config.game
        );


    if (!gpu || !cpu || !game) {

        console.error(
            "GPU, CPU veya oyun bulunamadı."
        );

        return null;
    }

    // Platform kontrolü
    const isLaptop = config.platform === 'laptop';

    // Laptop watt değerleri
    const gpuWatt = isLaptop ? parseInt(config.gpuWatt) : null;
    const cpuWatt = isLaptop ? parseInt(config.cpuWatt) : null;

    // Otomatik sıcaklık tahmini
    let thermalAnalysis;
    try {
        thermalAnalysis = calculateTemperatures(config, gpu, cpu, game, isLaptop, gpuWatt, cpuWatt);
    } catch (error) {
        console.error("Sıcaklık hesaplaması hatası:", error);
        // Fallback değerleri
        thermalAnalysis = {
            cpuTemperature: 55,
            gpuTemperature: 60,
            cpuThermalStatus: 'NORMAL',
            gpuThermalStatus: 'NORMAL',
            cpuThermalColor: '#5eeaff',
            gpuThermalColor: '#5eeaff',
            overallThermalStatus: 'GOOD',
            cpuThrottleRisk: 'LOW',
            gpuThrottleRisk: 'LOW'
        };
    }

    // Mevcut sıcaklık değerlerini tahmini değerlerden al
    const gpuTemp = thermalAnalysis.gpuTemperature;
    const cpuTemp = thermalAnalysis.cpuTemperature;


    /*
     * Oyun-spesifik benchmark verisini ara
     */

    const benchmark =
        BENCHMARK_DATABASE.find(
            item =>
                item.game === config.game &&
                item.gpu === config.gpu &&
                item.resolution === config.resolution &&
                item.quality === config.quality &&
                item.rt === (config.rt ? true : false) &&
                item.upscaling === config.upscaling &&
                item.frameGeneration === config.frameGeneration
        );

    /*
     * Laptop için watt bazlı performans düşürme
     */
    let gpuMultiplier = 1;
    let cpuMultiplier = 1;

    if (isLaptop) {
        // GPU watt bazlı çarpan (referans: 150W masaüstü GPU)
        const desktopGpuWatt = 150;
        gpuMultiplier = Math.pow(gpuWatt / desktopGpuWatt, 0.75);

        // CPU watt bazlı çarpan (referans: 65W masaüstü CPU)
        const desktopCpuWatt = 65;
        cpuMultiplier = Math.pow(cpuWatt / desktopCpuWatt, 0.7);

        // Minimum çarpan sınırları
        gpuMultiplier = Math.max(0.4, gpuMultiplier);
        cpuMultiplier = Math.max(0.5, cpuMultiplier);
    }



    /*
     * Temel FPS - oyun optimization score'u ile çarpılır
     */

    let fps;

    if (benchmark) {

        fps = benchmark.averageFPS * gpuMultiplier * cpuMultiplier;

    } else {

        fps =
            55 *
            ((gpu.score * gpuMultiplier) / 100) *
            ((cpu.score * cpuMultiplier) / 100) *
            (game.optimization_score || 1);

    }


    /*
     * Çözünürlük (benchmark yoksa uygulanır)
     */

    if (!benchmark) {

        if (config.resolution === "1080") {

            fps *= 1.35;

        } else if (
            config.resolution === "1440"
        ) {

            fps *= 1.0;

        } else if (
            config.resolution === "1600"
        ) {

            fps *= 0.88;

        } else if (
            config.resolution === "2160"
        ) {

            fps *= 0.62;

        }


        /*
         * Grafik kalitesi
         */

        const qualityMultiplier = {

            low: 1.35,

            medium: 1.15,

            high: 1.0,

            ultra: 0.82

        };


        fps *=
            qualityMultiplier[
                config.quality
            ] || 1;


        /*
         * Ray Tracing
         */

        if (config.rt) {

            fps *= 0.68;

        }


        /*
         * Upscaling
         */

        const upscaleMultiplier = {

            native: 1,

            quality: 1.22,

            balanced: 1.35,

            performance: 1.55

        };


        fps *=
            upscaleMultiplier[
                config.upscaling
            ] || 1;

    }


    /*
     * RAM
     */

    if (config.ram < 16) {

        fps *= 0.82;

    } else if (config.ram >= 32) {

        fps *= 1.03;

    }


    /*
     * Minimum FPS
     */

    fps =
        Math.max(
            5,
            Math.round(fps)
        );


    /*
     * Frame Generation
     */

    let renderedFPS = fps;


    if (
        config.frameGeneration === "2x"
    ) {

        renderedFPS =
            Math.round(
                fps * 1.55
            );

    }


    if (
        config.frameGeneration === "3x"
    ) {

        renderedFPS =
            Math.round(
                fps * 2.1
            );

    }


    if (
        config.frameGeneration === "4x"
    ) {

        renderedFPS =
            Math.round(
                fps * 2.65
            );

    }


    const onePercentLow =
        Math.max(
            1,
            Math.round(
                fps * 0.72
            )
        );


    const zeroPointOneLow =
        Math.max(
            1,
            Math.round(
                fps * 0.58
            )
        );


    return {

        game: game.name,

        gpu: gpu.name,

        cpu: cpu.name,

        averageFPS: renderedFPS,

        renderedFPS: renderedFPS,

        minimumFPS:
            Math.max(
                1,
                Math.round(
                    renderedFPS * 0.75
                )
            ),

        maximumFPS:
            Math.round(
                renderedFPS * 1.12
            ),

        onePercentLow,

        zeroPointOneLow,

        bottleneck:
            gpu.score < cpu.score
                ? "GPU"
                : "CPU",

        // Otomatik tahmin edilen termal analiz
        thermalAnalysis: thermalAnalysis

    };

}
