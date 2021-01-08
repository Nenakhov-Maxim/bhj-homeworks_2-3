let clickLeft = document.getElementsByClassName('slider__navigation').item(0).querySelector(".slider__arrow_next");
let clickRight = document.getElementsByClassName('slider__navigation').item(0).querySelector(".slider__arrow_prev");

clickLeft.onclick = goToNext;
clickRight.onclick = goToPrev;

function goToNext() {
    let sliderImage = document.getElementsByClassName('slider__image');
    let arrayImage = Array.from(sliderImage);
    for (let i = 0; i < arrayImage.length; i++) {
        const element = arrayImage[i];
        if (element.closest('div').className === "slider__item slider__item_active") {
            element.closest('div').className = "slider__item";
            if (i + 1 >= arrayImage.length) {
                arrayImage[0].closest('div').className = "slider__item slider__item_active";
            } else {
                arrayImage[i + 1].closest('div').className = "slider__item slider__item_active";
            }
            return false;
        }

    }
}

function goToPrev() {
    let sliderImage = document.getElementsByClassName('slider__image');
    let arrayImage = Array.from(sliderImage);
    for (let i = arrayImage.length - 1; i >= 0; i--) {
        const element = arrayImage[i];
        if (element.closest('div').className === "slider__item slider__item_active") {
            element.closest('div').className = "slider__item";
            if (i - 1 < 0) {
                arrayImage[0].closest('div').className = "slider__item slider__item_active";
            } else {
                arrayImage[i - 1].closest('div').className = "slider__item slider__item_active";
            }
            return false;
        }

    }
}