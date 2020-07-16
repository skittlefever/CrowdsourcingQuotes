/*
    Because we are using the Bootstrap carousel 
    we need to wait until the whole document is 
    loaded before we manipulate it
*/

document.addEventListener("DOMContentLoaded", (e) => {

    /*
        Okay we grab the Section and the images like you did 
    */

    const carouselSection = document.querySelectorAll('.carousel-section')
    const imageList = document.querySelectorAll('.images')

    /*
       I also grab what i want to make clickable
    */

    const allBtn = document.querySelector('.all');
    const wisdomBtn = document.querySelector('.wisdom');
    // const happyBtn = document.querySelector('.happiness');
    const friendshipBtn = document.querySelector('.friendship');
    const loveBtn = document.querySelector('.love');
    const adventureBtn = document.querySelector('.adventure');


    /*
        Because we are going to mess with the HTML we 
        need somewhere to store the images and the data-class
    */
    const List = []


    /*
        So the for below skips through all the content \
        we want and stores the important bits in JavaScript (dataClass and Image)
     */


    for (let i = 0; i < imageList.length; i++) {
        const item = {
            "tag": `${imageList[i].dataset.class}`,
            // "url": `${imageList[i].children[0].src}`,
            "url": `${imageList[i].children[0].children[0].src}`
            
            
        }
        List.push(item);
    }
    


    /*
        The function below rebuilds the sections 
    */


    function buildSection(tag) {

        //This for loops through the Carousel Sections
        // for (let j = 0; j < carouselSection.length; j++) {
            // This line wipes out all the html in them.
            carouselSection[0].innerHTML = ""
            carouselSection[1].innerHTML = ""
            let items = 0;
            // This checks what tag is clicked
            if (tag != "all") {
                //if not all
                for (let x = 0; x < List.length; x++) {
                    // this cycles through the List and sees if it matches the tag
                    if (List[x].tag === tag) {
                        /*
                        if it does it adds it to the carousel, 
                        now my one doesnt work out what to do on the 4th item 
                        it should add it to the next carousel. 
                        Do you think you can work out what to do here?
                        */
                        items++;

                        if(items <=4){
                            carouselSection[0].appendChild(buildItem(List[x].tag, List[x].url))
                        }else{
                            carouselSection[1].appendChild(buildItem(List[x].tag, List[x].url))
                        }
                        // carouselSection[j].appendChild(buildItem(List[x].tag, List[x].url))
                        // items++;
                    }
                }
            } else {
                for (let x = 0; x < List.length; x++) {
                    // this loops through the whole list and adds all the items but the same as above can you work it out?

                    items++;
                    if(items <=4){
                        carouselSection[0].appendChild(buildItem(List[x].tag, List[x].url))
                    }else{
                        carouselSection[1].appendChild(buildItem(List[x].tag, List[x].url))
                    }
                    // carouselSection[j].appendChild(buildItem(List[x].tag, List[x].url))
                    // items++;


                }

            }
        // }
    }

    function buildItem(dataClass, src) {
        //here we rebuild the item with the correct details these are the div's
        let item = document.createElement('div')
        item.classList.add('col-3', 'images')
        item.dataset.class = dataClass
        // this rebuilds the images
        let image = document.createElement('img')
        image.src = src
        item.appendChild(image)
        // and then we spit it out at the end
        return item;
    }

    /*
        All of these are just simple button clicks it looks 
        for the element and listens for a click then runs the sectionBuilder
     */
    allBtn.addEventListener('click', (e) => {
        buildSection('all')
    })
    wisdomBtn.addEventListener('click', (e) => {
        buildSection('wisdom')
    })
    friendshipBtn.addEventListener('click', (e) => {
        buildSection('friendship')
    })
    loveBtn.addEventListener('click', (e) => {
        buildSection('love')
    })
    adventureBtn.addEventListener('click', (e) =>{
        buildSection('adventure')
    })

  

})




/* Popup Modal in Submit Quote page */
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    // it should also clear the form here, now the form will clear after 200ms - as transition set in css
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
/* buttons to open other websites on Book detail pages */
function moreQuote1() {
    window.open("https://www.goodreads.com/work/quotes/4039699-northanger-abbey", "blank");
   
}
function amazon1() {
    window.open("https://www.amazon.com/gp/product/1593082649/ref=x_gr_w_bb_sout?ie=UTF8&tag=x_gr_w_bb_sout-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1593082649&SubscriptionId=1MGPYB6YW3HWK55XCGG2", "blank");
   
}
function goodreads1() {
    window.open("https://www.goodreads.com/book/show/50398.Northanger_Abbey", "blank");
   
}
function audible1() {
    window.open("https://www.amazon.com/s?k=Northanger+Abbey&i=audible&tag=x_gr_w_bb_audible-20&ref=x_gr_w_bb_audible-20", "blank");
   
}
function eBook1() {
    window.open("https://www.goodreads.com/ebooks/download/50398.Northanger_Abbey", "blank");
   
}

function moreQuote2() {
    window.open("https://www.goodreads.com/work/quotes/886002-the-lorax", "blank");
   
}
function amazon2() {
    window.open("https://www.amazon.co.uk/gp/product/0679889108/ref=x_gr_w_bb_sout?ie=UTF8&tag=x_gr_w_bb_sout_uk-21&linkCode=as2&camp=1634&creative=6738", "blank");
   
}
function goodreads2() {
    window.open("https://www.goodreads.com/book/show/7784.The_Lorax?ac=1&from_search=true&qid=n94GG4y4d6&rank=1#", "blank");
   
}
function audible2() {
    window.open("https://www.amazon.com/s?k=The+Lorax&i=audible&tag=x_gr_w_bb_audible-20&ref=x_gr_w_bb_audible-20", "blank");
   
}
function eBook2() {
    window.open("https://www.chrisrossarthur.com/uploads/3/8/5/9/38596187/dr._seuss_the_loraxbokos-z1.pdf", "blank");
   
}



