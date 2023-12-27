const container = document.getElementById("_container");

let greencolors = [
    "#01a362",
    "#7CFC00",
    "#BCED91",
    "#00C957"
];

const numperOfSquares = 99;

for(let i = 0 ; i < numperOfSquares; i++){
    const activity = document.createElement("div");
    activity.classList.add("activity");
    activity.addEventListener("mouseover",()=>{
        addColor(activity);
    });
    activity.addEventListener("mouseout",()=>{
        addColor(activity);
    })
    container.appendChild(activity);
}

function addColor(squarestyle){
    const gettingColor = greencolorsf();
    squarestyle.style.backgroundColor=gettingColor;
    squarestyle.style.boxShadow =` 0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`
}

function greencolorsf(){
    return greencolors[Math.floor(Math.random() * greencolors.length) ];
}

