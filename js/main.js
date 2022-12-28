function customSelect() {
    if (document.querySelector('.custom_select')) {
    let select = document.querySelector('.custom_select');
    select.setAttribute('hidden', '');

    let options = Array.from(select.querySelectorAll('option'));

    let definition = document.createElement('div');
        definition.classList.add('custom_select__definiton', 'form__input');
        select.parentNode.insertBefore(definition, select);

    let chose = document.createElement('button');
        chose.setAttribute('type', 'button');
        chose.classList.add('custom_select__chose');
        chose.innerText = options[0].innerText;
        definition.appendChild(chose);

    let list = document.createElement('div');
        list.classList.add('custom_select__list');
        definition.appendChild(list);
    
    options.forEach(function (item) {
        var listItem = document.createElement('button');
        listItem.setAttribute('type', 'button');
        listItem.classList.add('custom_select__option');
        listItem.innerText = item.innerText;
        if(item.value === 'placeholder') {
            listItem.setAttribute('disabled', '');
        }
        list.appendChild(listItem);

    listItem.onclick = function() {
        list.classList.toggle('custom_select__list--open');
        chose.innerText = listItem.innerText;
        select.value = item.value;
    };
    });
    chose.onclick = function() {
       list.classList.toggle('custom_select__list--open')
    } 
    }
    const menuBody = document.querySelector('.custom_select__list');

    document.addEventListener('click', menu);

    function menu(event) {
        if (event.target.closest('.custom_select__chose')) {
            menuBody.classList.toggle('custom_select__list', 'custom_select__list--open');
        }
        if (!event.target.closest('.custom_select__chose')) {
            menuBody.classList.remove('custom_select__list--open')  
        } 
    }
    }

customSelect()


function customSlider(sliderClassName) {
    let slider = document.querySelector(sliderClassName);
    let currentSlide = 0;
    let slides = slider.querySelectorAll('.slider__elem');

    let list = document.createElement('ul');
    list.classList.add('custom_slider__dots')
    slider.appendChild(list);

    for(i =0; i < slides.length; i++) {
    let li = document.createElement('li');
    let btn = document.createElement('button');

    btn.classList.add('custom_slider__dot');
    btn.innerText = i + 1;
    li.appendChild(btn);
    list.appendChild(li);
}

let buttons = slider.querySelectorAll('.custom_slider__dot');
      
buttons.forEach((btn) => {
    btn.onclick = function () {
        btn.classList.add('custom_slider__dot--current');
        currentSlide = btn.innerText - 1; 
        changeSlide();
    };
});

    let changeSlide = () => {
        slides.forEach((item) => {
            item.classList.remove('slider__elem--active');
        });
        buttons.forEach((btn) => {
            btn.classList.remove('custom_slider__dot--current');
        })

        currentSlide >= slides.length ? (currentSlide = 0) : null;
        currentSlide <= -1 ? (currentSlide = slides.length - 1) : null;

        buttons[currentSlide].classList.add('custom_slider__dot--current');
        slides[currentSlide].classList.add('slider__elem--active');
    };  
    
    changeSlide();


slider.querySelector('.custom_slider__arrow--previous').addEventListener('click', () => {
    currentSlide--
    changeSlide();
});
slider.querySelector('.custom_slider__arrow--next').addEventListener('click', () => {
    currentSlide++
    changeSlide();
});

}

customSlider('.slider');