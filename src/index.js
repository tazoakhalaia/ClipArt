let dropdown = document.querySelector('#dropdown')
let dropmenu = document.querySelector('.drop')
let open = true
let searchOpen = true

dropdown.addEventListener('click', ()=>{
    open = !open
    if(open){
        dropmenu.style.display = "block"
    }else {
        dropmenu.style.display = "none"
    }
})

let searchinput = document.querySelector('.search')
let searchbtn = document.querySelector('.searchimg')

searchbtn.addEventListener('click', ()=>{
    searchOpen = !searchOpen
    if(searchOpen){
        searchinput.style.display = "flex"
    }else{
        searchinput.style.display = "none"
    }
})