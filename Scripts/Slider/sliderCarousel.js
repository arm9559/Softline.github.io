const first_images_array = ["image_first.png","image_second.png","image_third.png","image_fourth.png","image_fiveth.png","image_sixth.png"];
let getSliderContainer = document.querySelector("#slider-second-images")
for(let i = 0; i < first_images_array.length;i++){
        let createElement = document.createElement("img")
            createElement.setAttribute("src",`Images/Main/${first_images_array[i]}`)
            getSliderContainer.append(createElement)
}
 
function next(){
    getSliderContainer.innerHTML = ""
    const first_images_array = ["image_first.png","image_second.png","image_third.png","image_fourth.png","image_fiveth.png","image_sixth.png"];
    first_images_array.reverse()
    for(let i = 0; i < first_images_array.length;i++){
        let createElement = document.createElement("img")
            createElement.setAttribute("src",`Images/Main/${first_images_array[i]}`)
            getSliderContainer.append(createElement)
    }
}

function prev(){
    getSliderContainer.innerHTML = ""
    const first_images_array = ["image_sixth.png","image_second.png","image_third.png","image_fourth.png","image_fiveth.png","image_first.png"];
    for(let i = 0; i < first_images_array.length;i++){
        let createElement = document.createElement("img")
            createElement.setAttribute("src",`Images/Main/${first_images_array[i]}`)
            getSliderContainer.append(createElement)
    }
}