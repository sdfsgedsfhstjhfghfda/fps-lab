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


    /*
     * Temel FPS
     */

    let fps =
        55 *
        (gpu.score / 100) *
        (cpu.score / 100);


    /*
     * Çözünürlük
     */

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