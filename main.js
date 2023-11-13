// creat header 
let my_header = document.createElement("header");



let my_Hcontainer = document.createElement('div');
my_Hcontainer.className = "container";
my_after = document.createElement('::after')
logo = document.createElement("span");

myLogo = document.createTextNode('Elzero')

logo.appendChild(myLogo)
let list_nav = document.createElement("ul");
my_Hcontainer.appendChild(my_after)



// nav and links lists
let list1 = ['Home','About','Services','Contact'];

let list2 = ['elzero.org','google.com','www.freecodecamp.org','programs.edraak.org']




// add nav text
for( i=0;i<list1.length;i++)  {
    let Li_Nav = document.createElement('li');
    list_nav.appendChild(Li_Nav);
    let link_nav = document.createElement('a');
    link_nav.className = 'link'
    link_nav.href = list2[i];
    Li_Nav.appendChild(link_nav);
    mytext = document.createTextNode(list1[i]);
    link_nav.appendChild(mytext);
   
  
    
    
}


// append elements
my_header.appendChild(my_Hcontainer);
my_Hcontainer.appendChild(logo,list_nav);
my_Hcontainer.appendChild(list_nav);
document.body.appendChild(my_header);

// CSS Of The Header
let body = document.querySelector("body")

body.style.cssText = " font-family: 'Open Sans', sans-serif;background-color: rgb(221, 224, 226);"


let ul = document.querySelector('ul')
ul.style.cssText = 'list-style: none;'

let headerSpan = document.querySelector('header span')
headerSpan.style.cssText = " height: 40px;color:rgb(78, 221, 78);"







let header_ul = document.querySelector('header ul')
header_ul.style.cssText = "display: flex;flex: 1;align-items: center;justify-content: flex-end;gap: 5px; list-style: none;"


let headera = document.getElementsByTagName('a')


for(i=0;i<headera.length;i++){

    let link = headera[i]
   
    link.style.cssText = "text-decoration: none; color:rgb(117, 110, 110);"
}

let containerH = document.querySelector('.container')
containerH.style.cssText = "padding-left: 18px;padding-right: 23px;margin-left: auto;margin-right: auto;"

Header = document.querySelector('header')
Header.style.cssText = "position: absolute;left: 0;width: 100%;"

let containerHafter = document.querySelector('header .container::after')
my_after.style.cssText = "content: ''; position: absolute; height: 1px; background-color: #a2a2a2; bottom: 0; width: calc( 100% - 30px); left: 15px;"

// End Header 

let containerp = document.createElement('div');
containerp.className = "container2";
for(i=0;i<15;i++){

    let product = document.createElement('div');
    product.className = "product";

    let product_h1 = document.createElement('h1');
    textH1 = document.createTextNode('product')
    product_h1.appendChild(textH1)

    let product_p = document.createElement('p');
    textP = document.createTextNode(`${i+1}`)
    console.log(textP)
    product_p.appendChild(textP)

    containerp.appendChild(product)

    product.appendChild(product_h1)
    product.appendChild(product_p)

    document.body.appendChild(containerp)
}

container2 = document.querySelector('.container2')
container2.style.cssText = "    margin-top: 68px;position: absolute;margin:70px auto ;padding: 20px;  display: flex; flex-wrap:wrap;gap: 20px;justify-content: center;min-height: calc(10vh-142px);box-sizing: border-box;"

productCSS = document.querySelector('.product')


let products = document.getElementsByClassName('product')



for(i=0;i<products.length;i++){

    let product = products[i]
   
    product.style.cssText =  "background-color: rgb(117, 110, 110) ;text-align: center;padding: 5px;width: calc( (100% - 40px)/3 );height: 100px;align-items: center;display: flex;justify-content: center;align-items: center;flex-direction: column;"
}

footer = document.createElement('footer')
footerP = document.createElement('p')
myTextFooter = document.createTextNode("Copyright 2023")
footerP.appendChild(myTextFooter)
footer.appendChild(footerP);
document.body.appendChild(footer)


Footer = document.querySelector('footer')

Footer.style.cssText = "background-color: rgb(7, 163, 96);text-align: center;position: absolute;width: 100%;height: 40px;bottom: -492px;align-items: center;"

Footer_p = document.querySelector('footer p')

Footer_p.style.cssText = "margin-top: 10px;color: white;"