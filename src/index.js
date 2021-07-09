let index = 0;
addpic = () => {
  let search = [
    "perfume",
    "dish",
    "fashion",
    "watch",
    "dress",
    "dessert",
    "bar",
    "car",
    "gucci",
    "chocolate",
    "suit",
    "cappuccino",
    "shades",
    "villa",
    "beach",
  ];
  let div = document.createElement("div");
  div.classList.add("gallery-item");
  div.innerHTML = `
  <img class="gallery-item-img" src="https://source.unsplash.com/random/?${search[index]}"/>
  <div class="gallery-item-after">
    <div class="gallery-item-after-label">labels</div>
    <div class="gallery-item-after-body">
      <div class="gallery-item-after-title">Title</div>
      <div class="gallery-item-after-subtitle">Subtitle</div>
    </div>
    <div class="gallery-item-after-footer">footer</div>
  </div>`;
  index++;
  document.getElementsByClassName("gallery")[0].appendChild(div);
};

for (i = 0; i < 15; i++) {
  setTimeout(addpic, 0);
}

function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }
  if (document.documentElement.clientWidth < 800) {
    console.log("too small to scroll");
    return;
  }

  //   event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
  event.currentTarget.scrollBy({
    top: 0,
    left: +event.deltaY * 2,
    behavior: "smooth",
  });
}

let element = document.getElementsByClassName("gallery")[0];
element.addEventListener("wheel", transformScroll);

menuClicked = (btnIndex) => {
  let btns = document.getElementsByClassName("menu-item-btn");
  Object.keys(btns).forEach((key) => {
    if (key == btnIndex) {
      btns[key].style.opacity = 1;
    } else {
      btns[key].style.opacity = 0.4;
    }
  });
};

document.getElementsByTagName("body").onload = menuClicked(0);
