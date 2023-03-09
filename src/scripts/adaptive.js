
function openMenu() {
    const menu = document.querySelector('[data-adaptive]')
    menu.style.display = "flex"
}
function closeMenu(){
    const menu = document.querySelector('[data-adaptive]')
    menu.style.display = "none"
}
const openFilter = () => {
    const filter = document.querySelector('[data-filter]')
    if(filter.dataset.filter === "visible"){
        filter.dataset.filter = "hidden"
    }
    else{
        filter.dataset.filter = "visible"
    }
}