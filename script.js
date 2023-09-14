const accesskey = "wHyU-3gTbgNSBt7iBU_gRNGEH-Lp04IgDxy6uZ81a_g"

const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("search-input")
const searchresult = document.querySelector(".search-result")
const showmore = document.getElementById("showmore")

let inputdata = ""
let page = 1;

async function searchimages() {
    inputdata = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchresult.innerHTML = "";
    }
    results.map((result) => {
        const imagewrapper = document.createElement('div');
        imagewrapper.classList.add(".search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;


        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imageLink);

        searchresult.appendChild(imagewrapper);

    })
    page++
  if (page > 1){
    showmore.style.display = "block"
  }  
}

formE1.addEventListener("submit", (event)=>{
    event.preventDefault()
    page=1;
    searchimages()

})
showmore.addEventListener("click", (event)=>{
  
    searchimages()

})