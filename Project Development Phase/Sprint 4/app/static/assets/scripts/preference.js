const addForm = document.querySelector("form.add");
const ul = document.querySelector("ul.items");
let count = 0;
let pref_items = [];

const handleAddItem = (inputValue) => {
  if(count<5){
  const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  ul.innerHTML += html;
    count++;
    pref_items.push(inputValue);
    console.log(pref_items)
  }
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = addForm.add.value;
  if (inputValue.length){ 
    handleAddItem(inputValue); 
  }
  addForm.add.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    console.log(e.target.previousSibling)
    e.target.parentElement.remove();
    count--;
    
    //var index = pref_items.indexOf()
  }
});

