//alert('hello monina');
let count = 645;

// add dynamic content
// this function render an image inside a html element
function render() {
    let container = document.getElementById('pokemon');
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`    
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.onclick = function() {
    // conditional to say not below 1, not negative numbers
    // we don't use else, because we only want positive numbers
    if (count > 1 ) {
        count = count - 1;
        console.log(count);
        render();
    }
}

next.onclick = function() {
    // there are only 649 pokemon images, so we want to count until 649
    // increment the count only until 650, because there are no more images
    if (count < 649 ) {
        count = count + 1;
        console.log(count);
        render();
    }
}

// we need to render the first image, and then, depend on the button pressed,
// render next or prev images
render();