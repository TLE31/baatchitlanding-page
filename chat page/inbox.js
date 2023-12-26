let channel = document.querySelector(".first-row");
let Responsivechannel = document.querySelector(".slide-first-menu");
let acitveFriends = document.querySelector(".third-row")
let chatWithPerson = document.querySelector(".chat-with-this-person")
let defaultConvoTemplate = document.querySelector(".default-convo-template")
let closeMenu = document.querySelector(".closeMenu")
let slideMenu = document.querySelector(".slide-first-menu")
let menuBtn = document.querySelector("#slide-menu")
let blockBox = document.getElementById("dotForBlock")
channel.addEventListener('click' , (e)=> {
    let elem = e.target;
    let value = elem.innerHTML;
    chatWith(value)
})
Responsivechannel.addEventListener('click' , (e)=> {
    let elem = e.target;
    if(elem.className == "channel-name"){
        let value = elem.innerHTML;
        chatWith(value)
        slideMenu.style.left = "-50%"
    }
})
acitveFriends.addEventListener('click' , (e)=> {
    let elem = e.target;
    if(elem.tagName == "H5"){
        let value = elem.innerHTML;
        chatWith(value)
        console.log(value);
    }
    else if(elem.className == "friends"){
        let value = elem.querySelector("h5").innerHTML;
        chatWith(value)
    }
})

function chatWith(name){
    chatWithPerson.innerHTML = name;
    defaultConvoTemplate.innerHTML = `${name}`
}
closeMenu.addEventListener('click' , () => {
    slideMenu.style.left = "-50%"
})
menuBtn.addEventListener('click' , () => {
    slideMenu.style.left = "0%"
})

// blockBox