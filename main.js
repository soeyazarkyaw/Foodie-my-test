import './style.scss';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import 'waypoints/lib/noframework.waypoints.min.js'
import * as bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.min.js';


var typed = new Typed('#element', {
  strings: ['Food ...', 'Drink ...'],
  typeSpeed:30, // Default value
  loop:true,
  backDelay:3000,
  backSpeed:30,
});

let toDown = {
  distance: '50px',
  origin:'top',
  interval : 500,
  
}

ScrollReveal().reveal('.toDown', toDown);

let toRight = {
  distance: '50px',
  origin:'left',
  interval : 500,
  
}

ScrollReveal().reveal('.toRight', toRight);

let toLeft = {
  distance: '50px',
  origin:'right',
  interval : 500,
  
}

ScrollReveal().reveal('.toLeft', toLeft);

let menuLists = [
  {
      id:1,
      img : "/img/plate1.png",
      title:"Barbecue Salad",
      description : "Special Delicious Dish",
      price : 22.2,
      currency : "$"
  },
  {
      id:2,
      img : "/img/plate2.png",
      title:"Salad with fish",
      description : "Special Delicious Dish",
      price : 30.5,
      currency : "$"
  },
  {
      id:3,
      img : "/img/plate3.png",
      title:"Spinach Salad",
      description : "Special Delicious Dish",
      price : 50,
      currency : "$"
  },

];

let menuRow = document.getElementById("menuRow");

menuLists.forEach(function(menulist){
  let div = document.createElement("div");
  div.classList.add("col-10", "col-md-4", "col-lg-3", "toDown");
  div.innerHTML =`
                      <div class="card mt-3 menuStyle">
                      <img src="${menulist.img}" class="w-75 my-3 mx-auto" alt="">
                      <div class="card-body">
                        <h4 class="fw-bold mt-4">${menulist.title}</h4>
                        <p class="text-black-50">${menulist.description}</p>
                        <div class="d-flex justify-content-between">
                          <p class="my-auto">$${menulist.price}</p>
                          <a href="#" class="btn btn-lg btn-primary toDown">
                            <i class="bi bi-cart"></i>
                          </a>
                        </div>
                      </div>
                      </div>
  `;
  menuRow.append(div);
});

new Waypoint({
  element: document.getElementById('home-content'),
  handler: function(direction) {
      let oldNavLink = document.querySelector(".nav-link.active");
      if(oldNavLink != null){
          oldNavLink.classList.remove("active");
      }
      let currentNavLink = document.querySelector(`[href="#home"]`);
      currentNavLink.classList.add('active');
  },
  offset: "10%"
});

let sections = ['about','service','menu','contact'];
sections.forEach(function (section){
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {
            let oldNavLink = document.querySelector(".nav-link.active");
            oldNavLink.classList.remove("active");
            let currentNavLink = document.querySelector(`[href="#${section}"]`);
            currentNavLink.classList.add('active');
        },
        offset: "50%"
    })
});