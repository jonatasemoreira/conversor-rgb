function convertToHex() {
    const redInput = document.getElementById("red");
    const greenInput = document.getElementById("green");
    const blueInput = document.getElementById("blue");

    const red = parseInt(redInput.value, 10);
    const green = parseInt(greenInput.value, 10);
    const blue = parseInt(blueInput.value, 10);

    if (isNaN(red) || isNaN(green) || isNaN(blue) || red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
        document.getElementById("result").textContent = "Valores de entrada inválidos";
        document.getElementById("color-sample").style.backgroundColor = "";
        return;
    }

    const hex = rgbToHex(red, green, blue);

    document.getElementById("result").textContent = hex;
    document.getElementById("color-sample").style.backgroundColor = hex;

    // Limpar campos de entrada após a conversão
    redInput.value = "";
    greenInput.value = "";
    blueInput.value = "";
}

function rgbToHex(r, g, b) {
    const validatedRed = Math.max(0, Math.min(r, 255));
    const validatedGreen = Math.max(0, Math.min(g, 255));
    const validatedBlue = Math.max(0, Math.min(b, 255));

    const hexRed = validatedRed.toString(16).padStart(2, "0");
    const hexGreen = validatedGreen.toString(16).padStart(2, "0");
    const hexBlue = validatedBlue.toString(16).padStart(2, "0");

    return `#${hexRed}${hexGreen}${hexBlue}`;
}

function clearFields() {
    document.getElementById("red").value = "";
    document.getElementById("green").value = "";
    document.getElementById("blue").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("color-sample").style.backgroundColor = "";
}