function weightConverter(num) {
    if (document.activeElement.id === "inputLB") {
        document.getElementById("outputKG").innerText = num / 2.2;
    } else {
        document.getElementById("outputLB").innerText = num * 2.2;
    }
}