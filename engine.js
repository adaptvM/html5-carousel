class Carousel {
  //constructor
  constructor(carouselID) {
    this.carousel = document.getElementById(carouselID);
    this.items;
    this.currentItem = 0;
    this.data = [];
  }

  totalItems() {
    return this.data.length;
  }

  addData() {
    this.data.push({
      "icon": "'far fa-file-alt fa-6x'",
      "title": "Mobile learning and apps",
      "content": "Learners expect experiences they can touch and tools which are accessible from anywhere. We use HTML5 to build responsive content which learners can navigate like the apps and websites they love. One experience on any device"
    });
  }

  cards() {
    console.log(this.items);
  }

  createDots() {
    let circles = document.getElementsByClassName('circles')[0];
    let itemTotal = this.totalItems();
    for (let x = 0; x < itemTotal; x++) {
      const i = document.createElement('i');
      i.classList.add('far', 'fa-circle', 'fa-sm');
      circles.appendChild(i);
    }
  }

  createItems() {
    this.data.forEach((item) => {

      const div = document.createElement('div');
      div.classList.add('item', 'align');
      div.innerHTML =
        `
        <i class=${item.icon}></i>
       

        
        <h3> ${item.title} </h3> 
        <p> ${item.content} </p> 
        `
      this.carousel.appendChild(div);
    })

    this.items = this.carousel.querySelectorAll('.item');
    // const item = document.getElementsByClassName('item')[1];
    // item.style.display = 'none';
  }

}




const items = {
  iconName: '',
  title: '',
  content: ''
}

const wheel = new Carousel('carousel');
wheel.addData();
wheel.createDots();
wheel.createItems();
wheel.cards();