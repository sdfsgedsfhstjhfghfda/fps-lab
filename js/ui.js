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


    // Otomatik sıcaklık tahmini gösterimi
    if (result.thermalAnalysis) {
        const thermal = result.thermalAnalysis;

        // Sol üst bilgi paneli
        const gpuTempDisplay = document.getElementById("gpu-temp-display");
        const cpuTempDisplay = document.getElementById("cpu-temp-display");
        const gpuTempStatus = document.getElementById("gpu-temp-status");
        const cpuTempStatus = document.getElementById("cpu-temp-status");

        if (gpuTempDisplay) {
            gpuTempDisplay.textContent = `${thermal.gpuTemperature}°C`;
            gpuTempDisplay.style.color = thermal.gpuThermalColor;
        }
        if (cpuTempDisplay) {
            cpuTempDisplay.textContent = `${thermal.cpuTemperature}°C`;
            cpuTempDisplay.style.color = thermal.cpuThermalColor;
        }
        if (gpuTempStatus) {
            gpuTempStatus.textContent = thermal.gpuThermalStatus;
            gpuTempStatus.style.color = thermal.gpuThermalColor;
            gpuTempStatus.style.backgroundColor = `${thermal.gpuThermalColor}20`;
        }
        if (cpuTempStatus) {
            cpuTempStatus.textContent = thermal.cpuThermalStatus;
            cpuTempStatus.style.color = thermal.cpuThermalColor;
            cpuTempStatus.style.backgroundColor = `${thermal.cpuThermalColor}20`;
        }

        // Sonuç panelindeki sıcaklık değerleri
        const gpuTempEl = document.getElementById("gpuTempResult");
        const cpuTempEl = document.getElementById("cpuTempResult");

        if (gpuTempEl) {
            gpuTempEl.textContent = `${thermal.gpuTemperature}°C`;
            gpuTempEl.style.color = thermal.gpuThermalColor;
        }
        if (cpuTempEl) {
            cpuTempEl.textContent = `${thermal.cpuTemperature}°C`;
            cpuTempEl.style.color = thermal.cpuThermalColor;
        }

        // Thermal Analysis bölümü
        const cpuTemperatureEl = document.getElementById("cpuTemperature");
        const gpuTemperatureEl = document.getElementById("gpuTemperature");
        const cpuThermalStatusEl = document.getElementById("cpuThermalStatus");
        const gpuThermalStatusEl = document.getElementById("gpuThermalStatus");
        const thermalStatusEl = document.getElementById("thermalStatus");
        const cpuThrottleRiskEl = document.getElementById("cpuThrottleRisk");
        const gpuThrottleRiskEl = document.getElementById("gpuThrottleRisk");

        if (cpuTemperatureEl) {
            cpuTemperatureEl.textContent = `${thermal.cpuTemperature}°C`;
        }
        if (gpuTemperatureEl) {
            gpuTemperatureEl.textContent = `${thermal.gpuTemperature}°C`;
        }
        if (cpuThermalStatusEl) {
            cpuThermalStatusEl.textContent = thermal.cpuThermalStatus;
            cpuThermalStatusEl.style.color = thermal.cpuThermalColor;
            cpuThermalStatusEl.style.backgroundColor = `${thermal.cpuThermalColor}20`;
        }
        if (gpuThermalStatusEl) {
            gpuThermalStatusEl.textContent = thermal.gpuThermalStatus;
            gpuThermalStatusEl.style.color = thermal.gpuThermalColor;
            gpuThermalStatusEl.style.backgroundColor = `${thermal.gpuThermalColor}20`;
        }
        if (thermalStatusEl) {
            thermalStatusEl.textContent = thermal.overallThermalStatus;

            // Overall status color
            const statusColors = {
                'EXCELLENT': '#53f2b3',
                'GOOD': '#5eeaff',
                'ACCEPTABLE': '#ffc45d',
                'CONCERNING': '#ff718b'
            };
            thermalStatusEl.style.color = statusColors[thermal.overallThermalStatus] || '#5eeaff';
            thermalStatusEl.style.borderColor = statusColors[thermal.overallThermalStatus] || '#5eeaff';
            thermalStatusEl.style.backgroundColor = `${statusColors[thermal.overallThermalStatus] || '#5eeaff'}15`;
        }
        if (cpuThrottleRiskEl) {
            cpuThrottleRiskEl.textContent = thermal.cpuThrottleRisk;

            const riskColors = {
                'LOW': '#53f2b3',
                'MODERATE': '#ffc45d',
                'HIGH': '#ff718b'
            };
            cpuThrottleRiskEl.style.color = riskColors[thermal.cpuThrottleRisk] || '#5eeaff';
        }
        if (gpuThrottleRiskEl) {
            gpuThrottleRiskEl.textContent = thermal.gpuThrottleRisk;

            const riskColors = {
                'LOW': '#53f2b3',
                'MODERATE': '#ffc45d',
                'HIGH': '#ff718b'
            };
            gpuThrottleRiskEl.style.color = riskColors[thermal.gpuThrottleRisk] || '#5eeaff';
        }
    }

}
