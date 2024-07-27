document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('nav-2').classList.remove('hidden');
});

document.getElementById('cross').addEventListener('click', function() {
    document.getElementById('nav-2').classList.add('hidden');
});

const line1 = document.getElementById('line-1');
const line2 = document.getElementById('line-2');
const line3 = document.getElementById('line-3');
const img1 = document.getElementById('img2');
const button = document.getElementById('butt');
const companyLine = document.querySelector('.line_companies')

//Intersection Observer 
const initialTranslateLtoR = -48*4;
const initialTranslateRtol = 36*4;
function SetupIntersectionObserver(target,LtoR,speed,axis){
    let observer = new IntersectionObserver(function(entries){
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll' , scrollListner);
        }else{
            document.removeEventListener('scroll', scrollListner);
        }
    })
    observer.observe(target);
    function scrollListner(){
        if(axis=='y'){
            const translateX = (window.innerHeight-target.getBoundingClientRect().top)*speed; //getBoundingClientRect().top property in JavaScript provides the distance from the top edge of the viewport (the visible part of the browser window) to the top edge of the element’s bounding box. 
            let totalTranslate = 0 ;
            if(LtoR){
            totalTranslate=translateX+initialTranslateLtoR
            }else{
            totalTranslate=-(translateX+initialTranslateRtol);
            }
            target.style.transform = `translateX(${totalTranslate}px)`
        }else{
            const translateY = ((window.innerHeight-target.getBoundingClientRect().top))*speed; //getBoundingClientRect().top property in JavaScript provides the distance from the top edge of the viewport (the visible part of the browser window) to the top edge of the element’s bounding box. 
            let totalTranslate = 0 ;
            if(LtoR){//top to bottom
               totalTranslate=translateY;
            }else{
                totalTranslate=-translateY;
            }
             target.style.transform = `translateY(${totalTranslate}px)`
        }
    } 
}

SetupIntersectionObserver(companyLine,true,1,'y')
SetupIntersectionObserver(line1,true,0.15,'y'); 
SetupIntersectionObserver(line2,false,0.15,'y'); 
SetupIntersectionObserver(line3,true,0.15,'y'); 
SetupIntersectionObserver(img2,true,0.1,'x'); 


button.addEventListener('click', function(e) {
    let video = document.getElementById('play');
    let videosec = document.getElementById('img1');
    let upperbody = document.getElementById('upperbody');


    video.classList.remove('hidden');
    // video.style.width = videosec.offsetWidth +'px';
    // video.style.height = videosec.offsetHeight+'px';
    upperbody.classList.add('hidden');
});

//intersection observer codeBlock animation id="codeSection2"

const elements = [] ;
for(let i=1 ; i<=8 ; i++){
    elements.push(document.querySelector(`#code_line_${i}`));
}

console.log(elements);
let codeBlock = document.querySelector("#codeSection2");
let observer = new IntersectionObserver(function (entries){
    let execeuteLine;
    if(entries[0].isIntersecting){
        let i=0;
        let lineExecute = setInterval(function(e){
            if (i >= elements.length) {
                clearInterval(lineExecute);
            } else {
                elements[i].classList.remove('invisible');
                i++;
            }
        },500)
    }
}) 

observer.observe(codeBlock);
let Intersect = document.querySelector('#progresBg');
let progressBar = document.querySelector('#progressBar');
let progressTxt = document.querySelector('#progressTxt');

let widthsArr = [11, 20, 28, 32 ,100];

function progressAnimation(entries) {
    if (entries[0].isIntersecting) {
        let i = 0;
        let progressInterval = setInterval(function() {
            if (i >= widthsArr.length) {

                clearInterval(progressInterval);
                return;
            }
            
            if (i === 2) {
                progressTxt.textContent = 'Extracting App..';
            } else if (i === 3) {
                progressTxt.textContent = 'Installing the Application.';
            } else if (i === 4) {
                progressTxt.textContent = 'Installed!';
            }

            progressBar.style.width = `${widthsArr[i]}%`;
            i++;
        }, 500);
    }
}

let observr = new IntersectionObserver(progressAnimation);
observr.observe(Intersect);


// FAQ SECTIONS 
const dtElements =  document.querySelectorAll('dt');

dtElements.forEach(elements=>{
    elements.addEventListener('click' , ()=>{
        const arailCont = elements.getAttribute('aria-controls') ;
        const content = document.getElementById(arailCont);
        content.classList.toggle('hidden');
    })
})