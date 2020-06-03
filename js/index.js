
var open = document.getElementById('open')
var moda = document.getElementById('modal')
var content = document.getElementById('content')

open.addEventListener('click',
    function(){
        moda.classList.add('active');
        content.style.opacity='1';
        
});

