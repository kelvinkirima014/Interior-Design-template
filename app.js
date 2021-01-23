//creates a css class to change hamburger menu
//on click
document.querySelector('.hamburger-menu')
.addEventListener('click',()=>{
    document.querySelector('.container').classList.toggle
    ('change');

});
// clicks home button
document.querySelector('#btn').
addEventListener('click',()=>{
    document.querySelector('#contact').
   style.scrollBehavior = 'smooth'
})



// the scroll button
document.querySelector('.scroll-btn')
 .addEventListener('click',()=>{
     document.querySelector('html').style
     .scrollBehavior = 'smooth';
     setTimeout(()=>{
        document.querySelector('html').style
        .scrollBehavior = 'unset';
     },1000);

})