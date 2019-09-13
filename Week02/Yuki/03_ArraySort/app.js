var fruits = [ "Durian", "Figs", "Blackberries", "Elderberries", "Apricots", "Cherry", "Graopefruit"];

document.getElementById("output").innerHTML = fruits;

fruits.sort();
fruits.reverse();

function reverse() {
    fruits.reverse();
    document.getElementById("output").innerHTML = fruits;
}