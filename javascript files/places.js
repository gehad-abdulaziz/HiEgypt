window.onscroll = function(){
    be: 'smooth';
    scrollFunction();
    };
    function scrollFunction() {
    var mybutton = document. getElementById("ttpbtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
    }
    function ScrollToTop() {
    document.body.scrollTop = 0;    
    document.documentElement.scrollTop = 0;
    }