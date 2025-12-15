// const fragment = document.createDocumentFragment();
// const li = fragment
// .appendChild(document.createElement("section"))
// .appendChild(document.createElement("ul"))
// .appendChild(document.createElement("li"))
// .appendChild(document.createElement("li"))
// .appendChild(document.createElement("li"))
// .appendChild(document.createElement("li"))

// li.textContent = "Namaste Rahul"
// li.textContent = "Namaste Duniya"
// document.body.appendChild(fragment);

const fragment = document.createDocumentFragment();
const div = fragment
.appendChild(document.createElement("section"))
 const ul = div.appendChild(document.createElement("ul"))
 ul.id = "ulList"
 ul.className = "menu"
 for(let i = 0; i<=4;i++){
      const li = document.createElement("li");
      li.className = "item"
      li.id = `item-${i}`;
      li.textContent = `listItem ${i}`
      ul.appendChild(li);
 }
document.body.appendChild(fragment);

const color = document.getElementsByClassName("menu")[0]
console.log(color)
color.style.backgroundColor = "red";
// const li = document.getElementsByClassName("item")[0].style.backgroundColor="green"
for(let i = 0; i<=4;i++){
      document.getElementsByClassName("item")[`${i}`].style.backgroundColor="green"
}