//1.______________JAVSCRIPT CODE FOR MULTIPLE ELEMENTS WITH CLASS .parallax______________________
var paraArray = document.querySelectorAll('.parallax');
   paraArray.forEach(function(el){
        document.addEventListener('scroll', function(){
            var elOffsetTop = el.offsetTop; // the element top position relative to the top of the offsetParent element
            var windowScroll = window.scrollY; //returns the number of pixels that the document is currently scrolled vertically
            var scrollSpeed = 2;
            var bgScroll = -((windowScroll - elOffsetTop)/scrollSpeed);
            var bgPosition = 'center ' + bgScroll + 'px';
            el.style.backgroundPosition = bgPosition;
        });
    }); 
 

//2._____________JAVASCRIPT CODE FOR MULTIPLE FADE IN ELEMENTS WITH CLASS .element-fade-in_______________

//_____this is the array of elements that are getting the fade in effect
    var fadeInArray = document.querySelectorAll('.element-fade-in');

//_____this will execute the given function on page load.
window.onload = function(){
    fadeInArray.forEach(function(el){
       el.style.opacity = '0';
    });       
}

//_____this is a for each function that will cicle thru the given aray and execute a function with given element as parameter. El being each and all elements in the fadeInArray array.
fadeInArray.forEach(function(el){
    document.addEventListener('scroll', function(){
        // this gives back a constant of elements distance from the top of the page
        var yPosition = 0;
        function getPosition(el){
            while(el){
                yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
                el = el.offsetParent;
            }
        }
        getPosition(el)

        // elemnts distance form the top of the page + the height of an element / 2
        var elementHeight = el.getBoundingClientRect().height;
        var bottomOfElement = yPosition + elementHeight/2;

        // window scroll y (changes on scroll) + the height of the window
        var windowScroll = window.scrollY;
        var windowHeight = window.innerHeight;
        var bottomOfWindow = windowScroll + windowHeight;

        if(bottomOfWindow > bottomOfElement){
            el.classList.add('fade');
        }
    });
});

//3._____________NAV-TAB ICON CLICK EVENTS_______________
