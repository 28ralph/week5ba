// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];


let mainEl = document.getElementsByTagName("main")[0]


mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// mainEl.setAttribute("className", "flex-ctr");
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add("flex-around")

// for(let i = 0; i< menuLinks.length; i++){
//     let anc = document.createElement("a");
//     anc.textContent = menuLinks[i].text;
//     anc.setAttribute("href", menuLinks[i].href)
//     topMenuEl.append(anc)
// }

menuLinks.forEach(menu => {
    let anc = document.createElement("a");
    anc.textContent = menu.text;
    anc.setAttribute("href", menu.href)
    topMenuEl.append(anc)
})

// const subMenuEl = document.querySelector("#sub-menu");
// subMenuEl.style.height = "100%";

// subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
// subMenuEl.classList.add("flex-around")
// subMenuEl.style.position = "absolute"
// subMenuEl.style.top = 0;

// const topMenuLinks = document.getElementsByTagName("a")
// let showingSubMenu = false;

// topMenuEl.addEventListener("click", preventDefault);

// function preventDefault(e) {
//     if (e.target.localName !== "a") {
//         return
//     }
//     if (e.target.localName === "a") {
//         e.target.classList.remove("active")

//         showingSubMenu = false;
//         subMenuEl.style.top = "0";
//         return
//     }
//     if (e.target.localName === "a"){
//         e.target.classList.add("active")
//     }
//     if (e.target.localName === "a" ){
//         showingSubMenu = true;
//     }
//     else {
//         showingSubMenu = false;
//     }

// }
// // topMenuLinks.classList.remove("active");

// if (menuLinks.hasOwnProperty("subLinks")){
//     console.log(true)
// }