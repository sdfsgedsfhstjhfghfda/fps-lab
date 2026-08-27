const WORKER_URL =
    "https://fps-lab.balocem6224.workers.dev";


function getConfiguration() {

    return {

        game:
            document.getElementById("game").value,

        gpu:
            document.getElementById("gpu").value,

        cpu:
            document.getElementById("cpu").value,

        ram:
            Number(
                document.getElementById("ram").value
            ),

        resolution:
            document.getElementById("resolution").value,

        quality:
            document.getElementById("quality").value,

        rt:
            document.getElementById("rt").value === "on",

        upscaling:
            document.getElementById("upscaler").value,

        frameGeneration:
            document.getElementById("fg").value

    };

}


async function runCalculator() {

    const config = getConfiguration();

    try {

        const response = await fetch(
            WORKER_URL,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(config)
            }
        );

        if (!response.ok) {
            throw new Error(
                `Worker HTTP hatası: ${response.status}`
            );
        }

        const result =
            await response.json();

        if (!result.success) {

            console.error(
                "FPS hesaplama hatası:",
                result.error
            );

            return;
        }

        updateResults(result);

    } catch (error) {

        console.error(
            "Worker bağlantı hatası:",
            error
        );

    }

}