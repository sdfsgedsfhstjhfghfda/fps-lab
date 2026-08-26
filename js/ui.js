function updateResults(result) {

    if (!result) {

        console.error(
            "FPS sonucu oluşturulamadı."
        );

        return;
    }


    document.getElementById(
        "fpsValue"
    ).textContent =
        result.averageFPS;


    document.getElementById(
        "fpsRange"
    ).textContent =
        `${result.minimumFPS} - ${result.maximumFPS} FPS`;


    document.getElementById(
        "lowFps"
    ).textContent =
        result.onePercentLow;


    document.getElementById(
        "zeroLow"
    ).textContent =
        result.zeroPointOneLow;


    document.getElementById(
        "renderFps"
    ).textContent =
        result.renderedFPS;


    document.getElementById(
        "gpuResult"
    ).textContent =
        result.gpu;


    document.getElementById(
        "cpuResult"
    ).textContent =
        result.cpu;


    document.getElementById(
        "resultGame"
    ).textContent =
        result.game;


    document.getElementById(
        "bottleneck"
    ).textContent =
        result.bottleneck;

}