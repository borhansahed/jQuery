

                                  // Basic HTML manipulation IN jQuery

//$ is querySelector shortcut 


//text is used for change innerText 
$('.lifeGoal h2').text('You were hired in google. Congratulation')

//if you want to select only id then you need to add # in front of id name
$('#p-1').text('Now i am a googler')

//html is used for add innerHtml that means you can add html tags in 
$('.dream p').html('<b>Your Ahliya is waiting for you</b>')

//append is used to add text in first 
$('#p-2').append(' Donot upset')

//prepend is used to add text in last
$('#p-3').prepend('Allah is with you. ')

//if you want to add any element before element then you need to use before method.
//if you want to add any element after element then you need to use after method.


//if you want to access any attribute value . First of all you need to select html tag and then use attr(attribute name)
$('a').attr('target')

//if you want to remove any attribute then you use removeAttr method.
$('a').removeAttr('href')

//if you want to set attribute then you need access html tag and use attr(attributeName, attribute value)
$('a').attr('href', 'https://www.facebook.com/mohammad.sah.sahed.3/')


                        
                                     
