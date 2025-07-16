        function visibleDropdown(){
        const toggleDropdowon =
        document.getElementById("dropdownMenu");
       if(toggleDropdowon.style.display === "none"){
        toggleDropdowon.style.display = "block"
       }
       else{
        toggleDropdowon.style.display = "none"
       }
        }
// hide dropdown on clicking outside the icon//
        document.addEventListener("click",
            function(event) {
                const dropDown = document.querySelector(".dropdown-menu");
                if(!dropDown.contains(event.target)){
                    document.getElementById("dropdownMennu").
                    style.display = "none";
                }
            }

        );

        // button action
        function btnAction(){
            alert("Sorry!No actions added yet.")
        }