window.onload = function() {
    var html = document.documentElement;
    html.style.overflow = 'hidden'; 
  
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';
  
    setTimeout(function() {
      popup.classList.remove('animate__fadeIn');
      popup.classList.add('animate__fadeOut'); 
      setTimeout(function() {
        popup.style.display = 'none';
        html.style.overflow = ''; 
      }, 1000);
    }, 1500); 
  };
  
  
  function bookfun(){
    alert("you BOOKED the meal");
  }
  document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
      });
  //======================================
 let availablekeywords1 = [
    'food',
    'burger',
    'juice',
    'buffalo',
    'koshari',
    'grilled chicken',
    'drinks',
    'desserts',
    'ice cream',
    'qshtota',
    'caffee',
    'caf',
    'special dish',
  ];
  
  const resultbox = document.querySelector(".result-box");
  const inputbox = document.getElementById("searchInput");
  
  inputbox.onkeyup = function() {
    let result=[];
    let input=inputbox.value;
    if(input.length){
        result=availablekeywords1.filter((keyword)=>{
            return   keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    
    display(result);
    if(!result.length)
    {
        resultbox.innerHTML='';
    }
  };
  
  function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectinput(this)>"+list+"</li>";
    });
    resultbox.innerHTML="<ul>"+ content.join('') +"</ul>";
}

  
function selectinput(list){
  inputbox.value=list.innerHTML;
  resultbox.innerHTML='';
}

function goButton()
{
    let search =inputbox.value.toLowerCase() ; 
    if(search.includes('food')||search.includes('buffalo')||search.includes('burger')){
      window.location.href = 'resturants.html#buffalo';
    }
   else if(search.includes('drink')||search.includes('caf')||search.includes('caffee')||search.includes('juice')){

    window.location.href = 'resturants.html#CAFE'; 
  }
  else if(search.includes('grilled chicken')||search.includes('koshari')||search.includes('special dish')){
    window.location.href = 'resturants.html#special-dish'; 
  }
    else if(search.includes('ice cream')||search.includes('qshtota')||search.includes('desserts')){
      window.location.href = 'resturants.html#Desserts'; 

}
}
