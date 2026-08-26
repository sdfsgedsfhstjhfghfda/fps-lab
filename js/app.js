function getConfiguration() {

    return {

        game:
            document.getElementById(
                "game"
            ).value,

        gpu:
            document.getElementById(
                "gpu"
            ).value,

        cpu:
            document.getElementById(
                "cpu"
            ).value,

        ram:
            Number(
                document.getElementById(
                    "ram"
                ).value
            ),

        resolution:
            document.getElementById(
                "resolution"
            ).value,

        quality:
            document.getElementById(
                "quality"
            ).value,

        rt:
            document.getElementById(
                "rt"
            ).value === "on",

        upscaling:
            document.getElementById(
                "upscaler"
            ).value,

        frameGeneration:
            document.getElementById(
                "fg"
            ).value

    };

}


function runCalculator() {

    const config =
        getConfiguration();


    const result =
        calculatePerformance(
            config
        );


    if (result) {

        updateResults(result);

    }

}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeFilters();


        const button =
            document.getElementById(
                "calculateButton"
            );


        button.addEventListener(
            "click",
            runCalculator
        );


        runCalculator();

    }
);