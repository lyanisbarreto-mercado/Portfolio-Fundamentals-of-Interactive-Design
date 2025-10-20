var aboutLinks = document.getElementsByClassName('about-links');
    var aboutDes = document.getElementsByClassName('about-des');
    
    function opentab(element, tabname){
        for(aboutLink of aboutLinks) {
            aboutLink.classList.remove("active-link")
        }
        for(des of aboutDes) {
            des.classList.remove("active-des")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-des");
    }
//Dropdown
function dropdownOne(button) {
  document.getElementById("algariDropdown").classList.toggle("show");
  
  const caret = document.getElementById("caret-one");
  caret.classList.toggle("fa-caret-down");
  caret.classList.toggle("fa-caret-up");

  const textSpan = button.querySelector(".dropbtn-text");
  textSpan.classList.toggle("underline");
  }

function dropdownTwo(button) {
  document.getElementById("antcaviDropdown").classList.toggle("show");

  const caret = document.getElementById("caret-two");
  caret.classList.toggle("fa-caret-down");
  caret.classList.toggle("fa-caret-up");

  const textSpan = button.querySelector(".dropbtn-text");
  textSpan.classList.toggle("underline");
}

function dropdownThree(button) {
  document.getElementById("rociDropdown").classList.toggle("show");

  const caret = document.getElementById("caret-three");
  caret.classList.toggle("fa-caret-down");
  caret.classList.toggle("fa-caret-up");

  const textSpan = button.querySelector(".dropbtn-text");
  textSpan.classList.toggle("underline");
}
