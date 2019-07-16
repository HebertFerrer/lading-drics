let line = document.getElementById('line');
let container = document.getElementById('container-btn')
let headerText = document.getElementById('header-text')
let buttons = document.getElementsByClassName('module-btn');
let _module = document.getElementsByClassName('module');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => animation(buttons[i], i));
}

function animation(button, index) {
    let containerHeight = container.clientHeight;
    let headerHeight = headerText.clientHeight;
    let buttonHeight = button.clientHeight;
    let moduleHeight = _module.clientHeight / 2;

    let height = headerHeight + (buttonHeight * (index + 1))

    line.style.height = `${height.toString()}px`;
    line.style.border = "solid #323232 1px";
    line.style.paddingTop = `30px`;
}
