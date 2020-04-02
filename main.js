let toggleNavStatus = false;

let toggleNav = function() {
      let getSidebar = document.querySelector(".nav-sidebar");
      let getSidebarUL = document.querySelector(".nav-sidebar ul");
      let getSidebarTitle = document.querySelector(".nav-sidebar ul span");
      let getSidebarLinks = document.querySelectorAll(".nav-sidebar ul li a");

      if(toggleNavStatus === false){

            getSidebarUL.style.visibility = "visible";
            getSidebar.style.width=  "250px";
            getSidebarTitle.style.opacity ="0.7";

            let arrayLen = getSidebarLinks.length;

            for(let i=0;i<arrayLen;i++){
                  getSidebarLinks[i].style.opacity="1";
            }
            toggleNavStatus= true;
      }
      
      else if(toggleNavStatus === true){
            getSidebar.style.width=  "50px";
            getSidebarTitle.style.opacity ="0 ";

            let arrayLen = getSidebarLinks.length;

            for(let i=0;i<arrayLen;i++){
                  getSidebarLinks[i].style.opacity="0";
            }
            
            getSidebarUL.style.visibility = "hidden";
            toggleNavStatus= false;
      }
} 