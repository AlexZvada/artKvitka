export const selectLang = (e)=>{
    const value = e.value;
    switch (value) {
        case 'ru':
            localStorage.setItem('lang', "ru")
            location.reload()
            break;
        case 'ua':
            localStorage.setItem('lang', 'ua')
            location.reload()
            break;
        case 'en':
            localStorage.setItem('lang', 'en')
            location.reload()
        default:
            break;
    }
}