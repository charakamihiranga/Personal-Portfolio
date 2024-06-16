// Active Work

const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
  if(linkWork) {
   linkWork.forEach((a) => a.classList.remove('active-work'));
   this.classList.add('active-work');
  }
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));


//Background header

function scrollHeader(){
  const header = document.getElementById('header');
  if(this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);

// Mixitup Filter

let mixerProjects = mixitup('.projects__container', {
  selectors: {
      target: '.project__item'
  },
  animation: {
      duration: 300
  }
});




// swiper js 

var testiswiper = new Swiper(".testimonial__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


// Email js 

const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      Messsage = document.getElementById('message'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

    //show message
    contactMessage.textContent = 'Please fill in all fields';
  }else{

    emailjs.sendForm('service_h68s8po','template_ma5mj3g','#contact-form','IgD99_1ESBuXLYhF4')
    .then(() => {
      //show message and add coor 
      contactMessage.classList.add('color-light');
      contactMessage.classList.textContent = 'Message sent successfully';

      //clear fields
      setTimeout(() => {
        contactMessage.textContent = '';
      },5000);
    },(error) =>{
      alert('Something went wrong',error);
    }); 

    contactName.value = '';
    contactEmail.value = '';
    Messsage.value = '';
    
  }
}


contactForm.addEventListener('submit', sendEmail);
