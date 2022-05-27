// note that the "new Date()" function carries all these values in the exact order

// (year, month, day, hour, minutes, seconds)

// var futureDate=new Date(2022, 2, 16, 12, 30, 00);
// var today=new Date();
// var diff= futureDate-today
// console.log(diff)



//styling the mark-left
var markLeft=document.querySelector('.mark_left')
var icon=document.querySelector('.img_icon_first')
icon.addEventListener('click', ()=>{
    if(markLeft.style.transform==="translateX(0%)"){
        markLeft.style.transform="translateX(-103%)"
    }else{
        markLeft.style.transform==="translateX(-103%)"
            markLeft.style.transform="translateX(0%)"
    }
})
  


//image slider functionality
var imageslider=document.querySelector('.slider_cont')
let circle1=document.querySelector('.circle1')
circle1.addEventListener('click', ()=>{
    console.log('clicked')
    imageslider.style.background=`url('${arr[0]}') white no-repeat center `
})



let circle2=document.querySelector('.circle2')
circle2.addEventListener('click', ()=>{
    console.log('clicked')
    imageslider.style.background=`url('${arr[1]}') white no-repeat center `
})



let circle3=document.querySelector('.circle3')
circle3.addEventListener('click', ()=>{
    console.log('clicked')
    imageslider.style.background=`url('${arr[2]}') white no-repeat center `
})



let circle4=document.querySelector('.circle4')
circle4.addEventListener('click', ()=>{
    console.log('clicked')
    imageslider.style.background=`url('${arr[3]}')white no-repeat center `
})



let circle5=document.querySelector('.circle5')
circle5.addEventListener('click', ()=>{
    console.log('clicked')
    imageslider.style.background=`url('${arr[4]}')white no-repeat center `
})



let circle6=document.querySelector('.circle6')
circle6.addEventListener('click', ()=>{
    console.log('clicked')
    imageslider.style.background=`url('${arr[5]}')white no-repeat center `
})


   

let little=document.querySelector('.little')
var arr=['1 (3).jpg','1 (9).jpg','1 (14).jpg', '1 (12).jpg','download (6).png','download (7).png']
var color=["white", ]
var circle=[circle1,circle2,circle3,circle4,circle5,circle6]
 setInterval(imageSlide, 2000);
let counter=-1
function imageSlide(){
    
    counter++
    if(counter===6) counter=0
     imageslider.style.background=`url('${arr[counter]}') white  no-repeat center `;
    
    
}

// var back=document.querySelector('.back_to_top')
// back.addEventListener('click',()=>{
//     var body=document.getElementsByTagName('body')
//     body.style.scrollTop=0
// })








