const body = document.querySelector('body')
const input = document.querySelector('input')
const button = document.querySelector('button')
const container = document.querySelector('.container')
const overlay = document.querySelector('.notification')
const delBtn = document.querySelector('.yes')
const IgnoreBtn = document.querySelector('.no')
const cont = document.querySelector('.cont')
const loader = document.querySelector('.loader')
console.log('hi');



button.addEventListener('click', (e) => {
  e.preventDefault();

  let task = [];
  const day = new Date().getDate()
  console.log(day);
  const month = new Date().getMonth() + 1
  console.log(month);
  const year = new Date().getFullYear()
  console.log(year);
  const hour = new Date().getHours() 
  console.log(hour);
  const minute = new Date().getMinutes()
  console.log(minute);
  const gmt = new Date().getTime()
  console.log(gmt);
  if (input.value == '') {
    alert('Input field cannot be empty')
  }
  else{
 let html =
 `
  <div class="task">
<div class="writeups">
  <p class="title">${input.value}</p>
  <p class="date">${day}/${month}/${year}</p>
</div>
<div class="corner">
  <div class="icons">
    <div class="edit"><img src="edit.svg" alt=""></div>
    <div class="clear"><img src="delete.svg" alt=""></div>
  </div>
  <p class="time">${hour}:${minute}</p>
</div>
  </div>
  `
  container.insertAdjacentHTML('beforeend', html)  
  input.value = '';
  }
  const time = document.querySelector('.time')
 const clearAll = document.querySelectorAll('.clear')
 const editAll = document.querySelectorAll('.edit')
//  const time = document.querySelectorAll('.time')
//  clearAll.forEach(clear=>{
//   clear.addEventListener("click", ()=>{
//     console.log('dav')
//   //   clear.parentElement.parentElement.parentElement = ""
//   // let parentElement =  clear.parentElement.parentElement.parentElement 
//   console.log("hey")
//   })

// })
for (let i = 0; i < clearAll.length; i++) {
  clearAll[i].addEventListener('click', (e) => {
      console.log('hi');
      e.preventDefault()
      e.stopImmediatePropagation()
      console.log(clearAll[i]);
      console.log("hey")
      overlay.classList.remove('hide')
      delBtn.addEventListener('click', (e) => {
        e.preventDefault();
       const loading = setInterval(() => {
          loader.classList.remove('hide')
          overlay.classList.add('hide')
        });
        setTimeout(() => {
          loader.classList.add('hide')
          clearAll[i].parentElement.parentElement.parentElement.remove()
          clearInterval(loading)
        }, 3500);
      
      })
      IgnoreBtn.addEventListener('click', (e) => {
        e.preventDefault()
        overlay.classList.add('hide')
      })
  })
}

for (let i = 0; i < editAll.length; i++) {
  editAll[i].addEventListener('click', (e) => {

      console.log('hi');
      e.preventDefault()
      e.stopImmediatePropagation()
      console.log(editAll[i]);
     
  button.innerHTML = 'Edit'
  input.value = editAll[i].parentElement.parentElement.parentElement
  .querySelector("p")
  .innerHTML;
  button.addEventListener('click', (e) => {
    input.value = editAll[i].parentElement.parentElement.parentElement
    .querySelector("p").innerHTML
    let statement = 'Edited by'
    editAll[i].parentElement.parentElement.parentElement.remove();
    input.value = ''
    button.innerHTML = 'Add'
  })

  });
  }
  localStorage.setItem("userTasks", JSON.stringify(html));
window.onload = () => {
  if(
    localStorage.getItem('userTasks')
  ){
    localStorage.getItem("userTasks")    
  }
}

})


// localStorage.setItem('num', 11)
// window.onload = () => {
// let num = localStorage.getItem('num')
// console.log(num);
// }