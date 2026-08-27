function updateResults(result) {

    if (!result) {

        console.error(
            "FPS sonucu oluşturulamadı."
        );

        return;
    }


    const fpsValue =
        document.getElementById(
            "fpsValue"
        );

    fpsValue.textContent =
        result.averageFPS;


    /* Renk sınıflandırması */
    fpsValue.className = "";

    let performanceClass = "good";

    if (result.averageFPS >= 120) {
        performanceClass = "excellent";
        fpsValue.classList.add("excellent");
    } else if (result.averageFPS >= 60) {
        performanceClass = "good";
        fpsValue.classList.add("good");
    } else if (result.averageFPS >= 30) {
        performanceClass = "medium";
        fpsValue.classList.add("medium");
    } else {
        performanceClass = "low";
        fpsValue.classList.add("low");
    }

    /* Main FPS panel'ına renk ekle */
    const mainFpsPanel =
        document.querySelector(".main-fps");

    mainFpsPanel.className = "main-fps";
    mainFpsPanel.classList.add(performanceClass);


    document.getElementById(
        "fpsRange"
    ).textContent =
        `${result.minimumFPS} - ${result.maximumFPS} FPS`;


    const lowFpsEl =
        document.getElementById(
            "lowFps"
        );

    lowFpsEl.textContent =
        result.onePercentLow;

    lowFpsEl.parentElement.className = "";
    if (result.onePercentLow >= 60) {
        lowFpsEl.parentElement.classList.add("excellent");
    } else if (result.onePercentLow >= 30) {
        lowFpsEl.parentElement.classList.add("good");
    } else if (result.onePercentLow >= 15) {
        lowFpsEl.parentElement.classList.add("medium");
    } else {
        lowFpsEl.parentElement.classList.add("low");
    }


    const zeroLowEl =
        document.getElementById(
            "zeroLow"
        );

    zeroLowEl.textContent =
        result.zeroPointOneLow;

    zeroLowEl.parentElement.className = "";
    if (result.zeroPointOneLow >= 60) {
        zeroLowEl.parentElement.classList.add("excellent");
    } else if (result.zeroPointOneLow >= 30) {
        zeroLowEl.parentElement.classList.add("good");
    } else if (result.zeroPointOneLow >= 15) {
        zeroLowEl.parentElement.classList.add("medium");
    } else {
        zeroLowEl.parentElement.classList.add("low");
    }


    const renderFpsEl =
        document.getElementById(
            "renderFps"
        );

    renderFpsEl.textContent =
        result.renderedFPS;

    renderFpsEl.parentElement.className = "";
    if (result.renderedFPS >= 120) {
        renderFpsEl.parentElement.classList.add("excellent");
    } else if (result.renderedFPS >= 60) {
        renderFpsEl.parentElement.classList.add("good");
    } else if (result.renderedFPS >= 30) {
        renderFpsEl.parentElement.classList.add("medium");
    } else {
        renderFpsEl.parentElement.classList.add("low");
    }


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
