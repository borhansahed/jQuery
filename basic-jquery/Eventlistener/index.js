                                // Event listener jQuery

// in javascript
// document.querySelector('button').addEventListener('click', ()=>{
//     document.querySelector('h3').innerText = 'hello iam a hacker'})


//if want to add event listener in jquery then you need to use on('click', function(){}) or click(function (){}) method.
//if want to toggle your text for styling in jquery then you need to use toggleClass method. it helps you to toggle your text for styling.
$('button').click(()=>{
    $('h3').text('I have an interview tomorrow')
    $('p').toggleClass('style1')
})

// if want to add multiple event listener ex:
$('.myButton').css({'margin-top': '30px'});

$('.myButton').click( function () {
    let value  =this.innerHTML
    $('h3').text(value + 'clicked')
})
