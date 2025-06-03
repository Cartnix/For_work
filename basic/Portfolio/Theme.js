let styleMode = localStorage.getItem('styleMode');
const Toggle = document.getElementById('ToggleTheme');

const enableDarkMode = () => {
    document.body.classList.add('darkTheme');
    localStorage.setItem('styleMode', 'dark');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkTheme');
    localStorage.setItem('styleMode', null);
}

Toggle.addEventListener('click',() => {
    styleMode = localStorage.getItem('styleMode');
    if(styleMode !== 'dark')
    {
        enableDarkMode();
    } else{
        disableDarkMode();
    }
});

if(styleMode === 'dark'){
    enableDarkMode()
}