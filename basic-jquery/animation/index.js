


                                // Animation in jQuery
                                // setTime means milisecond
                
//if want to hide element then you need to use and you can set time also : hide()
// hide(4000)

//if want to show hidden element then you need to use and you can set time also : show()
// show(3000)

//if you want to use hide and show both then you to use toggle() method . If you element hide then toggle() show your element or your element show then toggle() hide your element.
//toggle(400)

//  $('#btn').click(()=>{
// $('#div1').hide(3000)   
// $('#div1').show(3000)   
// $('#div1').toggle(3000)   
// })

//if you want to vex your element then you use to fadeout() or show vex element in website you can use fadein(). And fadeToggle can implement fadeout and fadein both.

//in fadeTo you can handle element opacity ex: fadeTo(setTime , opacityValue)

//  $('#btn').click(()=>{

// $('#div1').fadein(3000)   
// $('#div1').fadeOut(3000) 
// $('#div1').fadeToggle(3000) 
  // $('#div1').fadeTo(3000,0.1)   
// })


// if you use slideUp(setTime) your element is go upper and if you use slideDown(setTime) then your element go down
//you can also use slideToggle(text time)

//  $('#btn').click(()=>{
// $('#div1').slideUp()  
// $('#div1').slideDown()  
// $('#div1').slideToggle()  
// })



//animate({css style} , setTime)

$('#btn').click(()=>{
    $('#div1').animate({
     height: '300px',
     width: '800px',
     fontSize:'2rem',
     
        
    },3000)
   
    })
