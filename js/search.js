(function () {
    const input = document.getElementById("hardware-search-input");
    const resultsEl = document.getElementById("hardware-search-results");

    if (!input || !resultsEl) {
        return;
    }

    const groups = [
        { key: "gpu", label: "EKRAN KARTI", kind: "GPU", selectId: "gpu", source: GPU_DATABASE },
        { key: "cpu", label: "İŞLEMCİ", kind: "CPU", selectId: "cpu", source: CPU_DATABASE },
        { key: "game", label: "OYUN", kind: "OYUN", selectId: "game", source: GAME_DATABASE }
    ];

    let flatResults = [];
    let activeIndex = -1;

    function fold(text) {
        return String(text || "")
            .toLowerCase()
            .replace(/ı/g, "i")
            .replace(/İ/g, "i")
            .replace(/[\s\-_.]+/g, "");
    }

    function matches(item, query) {
        const needle = fold(query);
        if (!needle) {
            return false;
        }
        return fold(item.name).indexOf(needle) !== -1 || fold(item.id).indexOf(needle) !== -1;
    }

    function hideResults() {
        resultsEl.hidden = true;
        resultsEl.innerHTML = "";
        flatResults = [];
        activeIndex = -1;
    }

    function applyChoice(entry) {
        const select = document.getElementById(entry.selectId);
        if (!select) {
            return;
        }
        select.value = entry.id;
        if (typeof runCalculator === "function") {
            runCalculator();
        }
        input.value = entry.name;
        hideResults();
        const calculator = document.getElementById("calculator");
        if (calculator) {
            calculator.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    function setActive(index) {
        const buttons = resultsEl.querySelectorAll(".hardware-search-item");
        buttons.forEach(function (button, i) {
            button.classList.toggle("is-active", i === index);
        });
        if (buttons[index]) {
            buttons[index].scrollIntoView({ block: "nearest" });
        }
        activeIndex = index;
    }

    function render(query) {
        const needle = query.trim();
        if (!needle) {
            hideResults();
            return;
        }

        resultsEl.innerHTML = "";
        flatResults = [];

        groups.forEach(function (group) {
            const hits = group.source.filter(function (item) {
                return matches(item, needle);
            }).slice(0, 8);

            if (!hits.length) {
                return;
            }

            const section = document.createElement("div");
            section.className = "hardware-search-group";

            const title = document.createElement("div");
            title.className = "hardware-search-group-title";
            title.textContent = group.label;
            section.appendChild(title);

            hits.forEach(function (item) {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "hardware-search-item";
                button.innerHTML =
                    "<span>" + item.name + "</span>" +
                    "<span class=\"hardware-search-kind\">" + group.kind + "</span>";
                const entry = {
                    id: item.id,
                    name: item.name,
                    selectId: group.selectId
                };
                button.addEventListener("click", function () {
                    applyChoice(entry);
                });
                section.appendChild(button);
                flatResults.push(entry);
            });

            resultsEl.appendChild(section);
        });

        if (!flatResults.length) {
            const empty = document.createElement("div");
            empty.className = "hardware-search-empty";
            empty.textContent = "Eşleşen ekran kartı, işlemci veya oyun yok.";
            resultsEl.appendChild(empty);
        }

        resultsEl.hidden = false;
        activeIndex = flatResults.length ? 0 : -1;
        setActive(activeIndex);
    }

    input.addEventListener("input", function () {
        render(input.value);
    });

    input.addEventListener("keydown", function (event) {
        if (resultsEl.hidden || !flatResults.length) {
            return;
        }
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setActive((activeIndex + 1) % flatResults.length);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActive((activeIndex - 1 + flatResults.length) % flatResults.length);
        } else if (event.key === "Enter" && activeIndex >= 0) {
            event.preventDefault();
            applyChoice(flatResults[activeIndex]);
        } else if (event.key === "Escape") {
            hideResults();
        }
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".hardware-search")) {
            hideResults();
        }
    });
}());
