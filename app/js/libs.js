const template = document.querySelector('.product');
const btn = document.querySelector('#lazy-btn');

let data = {
    
    products: [
        
        //group one
        [
            {
                'data-src': '#modal-9',
                src: 'img/astral-cruise.png',
                alt: 'astral',
                class: 'astral',
                id: 'modal-9',
                productName: 'Astral Cruise',
                price1: 6,
                price2: 5
            
            },
            
            {
                'data-src': '#modal-10',
                src: 'img/symbolic-bag.png',
                alt: 'symbolic bag',
                class: 'symb-bag',
                id: 'modal-10',
                productName: 'Symbolic Bag',
                price1: 9,
                price2: 1
            
            },
            
            {
                'data-src': '#modal-11',
                src: 'img/onesie.png',
                alt: 'onesie',
                class: 'onesie',
                id: 'modal-11',
                productName: 'Onesie',
                price1: 5,
                price2: 7
            
            },
            
            {
                'data-src': '#modal-12',
                src: 'img/bite-me.png',
                alt: 'bite',
                class: 'bite',
                id: 'modal-12',
                productName: 'Bite Me',
                price1: 6,
                price2: 7
            
            }
            
        ],

        [
            {
                'data-src': '#modal-13',
                src: 'img/mascot-kitty.png',
                alt: 'kitty',
                class: 'kitty',
                id: 'modal-13',
                productName: 'Mascot Kitty - White',
                price1: 2,
                price2: 3

            },

            {
                'data-src': '#modal-14',
                src: 'img/Little-fella.png',
                alt: 'little fella',
                class: 'fella',
                id: 'modal-14',
                productName: 'Little Fella',
                price1: 3,
                price2: 4

            },

            {
                'data-src': '#modal-15',
                src: 'img/interesting-read.png',
                alt: 'int-read',
                class: 'int-read',
                id: 'modal-15',
                productName: 'Interesting Read',
                price1: 5,
                price2: 1

            },

            {
                'data-src': '#modal-16',
                src: 'img/the-carter.png',
                alt: 'the carter',
                class: 'carter',
                id: 'modal-16',
                productName: 'The Carter',
                price1: 7,
                price2: 1

            }
        ],
        
        [
            {
                'data-src': '#modal-17',
                src: 'img/the-carter.png',
                alt: 'the carter',
                class: 'carter',
                id: 'modal-17',
                productName: 'The Carter',
                price1: 4,
                price2: 3

            },

            {
                'data-src': '#modal-18',
                src: 'img/mascot-kitty.png',
                alt: 'kitty',
                class: 'kitty',
                id: 'modal-18',
                productName: 'Mascot Kitty -White',
                price1: 6,
                price2: 1

            },

            {
                'data-src': '#modal-19',
                src: 'img/Little-fella.png',
                alt: 'little fella',
                class: 'fella',
                id: 'modal-19',
                productName: 'Little Fella',
                price1: 5,
                price2: 8

            },

            {
                'data-src': '#modal-20',
                src: 'img/bite-me.png',
                alt: 'bite',
                class: 'bite',
                id: 'modal-20',
                productName: 'Bite Me',
                price1: 7,
                price2: 1

            }
        ],
        
        [
            {
                'data-src': '#modal-21',
                src: 'img/bite-me.png',
                alt: 'bite',
                class: 'bite',
                id: 'modal-21',
                productName: 'Bite Me',
                price1: 4,
                price2: 6
            },

            {
                'data-src': '#modal-22',
                src: 'img/Little-fella.png',
                alt: 'little fella',
                class: 'fella',
                id: 'modal-22',
                productName: 'Little Fella',
                price1: 8,
                price2: 1

            },

            {
                'data-src': '#modal-23',
                src: 'img/the-carter.png',
                alt: 'the carter',
                class: 'carter',
                id: 'modal-23',
                productName: 'The Carter',
                price1: 9,
                price2: 5

            },

            {
                'data-src': '#modal-24',
                src: 'img/onesie.png',
                alt: 'onesie',
                class: 'onesie',
                id: 'modal-24',
                productName: 'Onesie',
                price1: 7,
                price2: 7

            }
        ]
        
        
        
        
    ]
      
};

let i = 0;
  

btn.addEventListener('click', ()=>{
    
   data.products[i].forEach(el => {
    
    //console.log(el);
    
   const a = template.cloneNode(true);
    
    a.setAttribute('class', 'product col-4');
    a.setAttribute('data-lazy', 'lazy-style');
    
   let productPhoto = a.querySelector('.product-photo');
   let productName = a.children[1];
   //let productFooter = a.querySelector('.product-footer');
   let productPrice = a.querySelectorAll('.price');
       
    //Product Photo components
    
    let productPhotoChild1 = productPhoto.children[0];
    let productPhotoChild2 = productPhoto.children[2];
    let productPhotoChild3 = productPhoto.children[3];
    
    
    productPhotoChild1.setAttribute('data-src', `${el['data-src']}`);
    productPhotoChild2.setAttribute('src', `${el.src}`);
    productPhotoChild2.setAttribute('alt', `${el.alt}`);
    productPhotoChild2.setAttribute('class', `${el.class}`);
    productPhotoChild3.setAttribute('id', `${el.id}`);
    
    //Modal components
    
    let modal = productPhotoChild3.querySelector('.product');
    
    modal.children[0].setAttribute('src', `${el.src}`);
    modal.children[0].setAttribute('alt', `${el.alt}`);
    modal.children[0].setAttribute('class', `${el.class}`);
    
    modal.children[1].innerHTML = `${el.productName}`;
        
    //Product Name
    
    productName.innerHTML = `${el.productName}`;
    
    //Product price
       
    productPrice[0].children[1].innerHTML = `${el.price1}`;
    productPrice[0].children[2].innerHTML = `${el.price2}`;
       
    productPrice[1].children[1].innerHTML = `${el.price1}`;
    productPrice[1].children[2].innerHTML = `${el.price2}`;             
       
    //Add template
    
    document.querySelector('.row-lazy-load').appendChild(a);
        
}); 
    
    i=i+1;
    
    //надо сделать добавление i пока оно меньше или равно данных
    //проба для git
      
    
});

