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
                : "CPU"

    };

}
