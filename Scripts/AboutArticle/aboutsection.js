/*This JS Code For Top Sales and New Sales but this code are work when the window width are less than 992px**/
    const arr = ['Images/ArticleWithSections/TopSales/topSalesImageFIrst.png','Images/ArticleWithSections/TopSales/topSalesImageSecond.png','Images/ArticleWithSections/TopSales/topSalesImageThird.png','Images/ArticleWithSections/TopSales/topSalesImageFourth.png'];
    const textArr = ["Adobe ColdFusion Enterprise 2018","Logitech G604 910-005650","Microsoft Windows 10 Enterprise","ESET NOD32 Smart Security"]

let sliderTextFirst = document.querySelector('.slider_text_first')
let sliderTextSecond = document.querySelector('.slider_text_second')

function topSalesSliderNext(){
    let getContainerFirst = document.querySelector("#upload_slider_first");
    let randomImages = Math.floor(Math.random() * arr.length);
            getContainerFirst.src = arr[randomImages]

        if(randomImages == 0){
            sliderTextFirst.innerHTML = textArr[0]
        }
        if(randomImages == 1){
            sliderTextFirst.innerHTML = textArr[1]
        }
        if(randomImages == 2){
            sliderTextFirst.innerHTML = textArr[2]
        }
        if(randomImages == 3){
            sliderTextFirst.innerHTML = textArr[3]
        }
}

function topSalesSliderPrev(){
    let getContainer = document.querySelector("#upload_slider_first");
    let randomImages = Math.floor(Math.random() * arr.length);
        getContainer.src = arr[randomImages];
        
        if(randomImages == 0){
            sliderTextFirst.innerHTML = textArr[0]
        }
        if(randomImages == 1){
            sliderTextFirst.innerHTML = textArr[1]
        }
        if(randomImages == 2){
            sliderTextFirst.innerHTML = textArr[2]
        }
        if(randomImages == 3){
            sliderTextFirst.innerHTML = textArr[3]
        }
}

function newSalesSliderNext(){
    let getContainerFirst = document.querySelector("#upload_slider_second");
    let randomImages = Math.floor(Math.random() * arr.length);
            getContainerFirst.src = arr[randomImages]

        if(randomImages == 0){
            sliderTextSecond.innerHTML = textArr[0]
        }
        if(randomImages == 1){
            sliderTextSecond.innerHTML = textArr[1]
        }
        if(randomImages == 2){
            sliderTextSecond.innerHTML = textArr[2]
        }
        if(randomImages == 3){
            sliderTextSecond.innerHTML = textArr[3]
        }
}

function newSalesSliderPrev(){
    let getContainer = document.querySelector("#upload_slider_second");
    let randomImages = Math.floor(Math.random() * arr.length);
        getContainer.src = arr[randomImages];
        
        if(randomImages == 0){
            sliderTextSecond.innerHTML = textArr[0]
        }
        if(randomImages == 1){
            sliderTextSecond.innerHTML = textArr[1]
        }
        if(randomImages == 2){
            sliderTextSecond.innerHTML = textArr[2]
        }
        if(randomImages == 3){
            sliderTextSecond.innerHTML = textArr[3]
        }
}