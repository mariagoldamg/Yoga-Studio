const images = document.querySelectorAll (`.item`);

images.forEach (i=> {
    i.addEventListener (`mouseover`, ()=> {
        removeFocus();
        i.classList.add (`selected`)})})

        
        
        
        function removeFocus () {
    images.forEach ( i=> {i.classList.remove (`selected`)})}
   

