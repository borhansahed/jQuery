      
      
                                  // Basic CSS manipulation in jQuery


// if you want to style your website with jQuery then need to use css(attribute name , attribute value) method.
$('h3').css('color', 'blue')

// if you want to remove css property then you need to use removeProperty method
$('h3').removeProperty('color')


// if you want to use multiple css style in one line then you need to use {} ex: {"color": "red" , "font-size": "3px"}
$('p').css({'color': 'pink' , 'font-size': '2rem'})

//if you want to add css class or remove class then you need to use addClass method and removeClass method
// if you want to add css class multiple in one line then you need to space between classes ex: addClass(1 2)
$('h3').addClass('style1 style2')
$('h3').removeClass('style1 style2')

