document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    createTask(document.querySelector('#new-task-description').value) 
    form.reset()
  })
});

function createTask(newTask){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'Finished!'
  p.textContent = `${newTask} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(event) {
  event.target.parentNode.remove()
}

