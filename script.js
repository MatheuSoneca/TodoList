const buttonCreateTask = document.querySelector("#buttonTask")
const taskInput = document.querySelector("#taskInput")
const templateTaskItem = document.querySelector("#taskItem .taskItem")
const taskList = document.querySelector("#taskList")
let counter = 0

const removeTask = (id) => {
  const taskItem = document.querySelector(`[data-id='${id}']`)
  taskItem.remove()
}

const validateString = (string) => {
  return string.trim() !== ""
}

const createTask = (textInput) => {
  const newTaskItem = templateTaskItem.cloneNode(true)
  const textElement = newTaskItem.querySelector("p")
  const button = newTaskItem.querySelector("button")
  const id = counter

  newTaskItem.dataset.id = id
  textElement.innerText = textInput
  button.onclick = () => removeTask(id)
  taskList.appendChild(newTaskItem)
  counter++
}

buttonCreateTask.onclick = () => {
  if (!validateString(taskInput.value)) return
  createTask(taskInput.value)
  taskInput.value = ""
}