

// step 1: create onLoad hendler
window.onload = () =>{
    main();
}

function main(){
    const root = document.getElementById('root')
    const btn = document.getElementById('change-btn')

    btn.addEventListener('click', function(){
        const bgColour = generateRGBColor();
        root.style.backgroundColor = bgColour;
    })

}
// step 2: rendor colour generator function

function generateRGBColor (){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}
// step 3: collect all necessary references

// step 4: handle the click event