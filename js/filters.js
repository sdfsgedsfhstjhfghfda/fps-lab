function populateSelect(elementId, database) {

    const select =
        document.getElementById(elementId);

    if (!select) {

        console.error(
            `Element bulunamadı: ${elementId}`
        );

        return;
    }


    select.innerHTML = "";


    database.forEach(item => {

        const option =
            document.createElement("option");

        option.value = item.id;

        option.textContent = item.name;

        select.appendChild(option);

    });

}


function initializeFilters() {

    populateSelect(
        "game",
        GAME_DATABASE
    );

    populateSelect(
        "gpu",
        GPU_DATABASE
    );

    populateSelect(
        "cpu",
        CPU_DATABASE
    );


    document.getElementById(
        "game"
    ).value =
        "cyberpunk2077";


    document.getElementById(
        "gpu"
    ).value =
        "rtx5070";


    document.getElementById(
        "cpu"
    ).value =
        "r9_8945hx";

}
