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
        list.classList.toggle('custom_select__list--open');
    }
    }
}
customSelect();