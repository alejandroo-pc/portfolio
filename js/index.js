/* creating objects */
let today = new Date();
let thisYear = today.getFullYear();

/* appending array of "skills" to unordered list */
let skills = [
  "Javascript",
  "HTML",
  "CSS",
  "C++",
  "Bilingual",
  "Self-starter",
  "Resiliant",
];

const skillsSection = document.querySelector("#skills");
const skillsList = document.querySelector('#skills-list');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.classList.add('newSkill');

  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

/* message form handeling */
const messageForm = document.getElementsByName("leave_message");

messageForm[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  console.log(name, email, message);

  /* Displaying message list */
  const messageList = document.querySelector("#messageList");
  const newMessage = document.createElement("li");
  newMessage.className = "newMessageText"; /* class name for css style */

  newMessage.innerHTML = `<a href="mailto: ${email}">${name}</a>
   <span>wrote: ${message} </span>`;

  /* button handeling */
  const removeButton = document.createElement("button");
  removeButton.className = "removeMessageButton"; /* class name for css style */
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm[0].reset();
});

/*error handeling function*/
function handelError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response
}

/* using fetch() to access github API */
fetch("https://api.github.com/users/alejandro-patino-camargo/repos")
  .then(handelError)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    /* DOM traverasal to append github API data */
    const projectList = document.querySelector('#project-list');

    for (var i = 0; i < data.length; i++) {
      const project = document.createElement("li");
      project.classList.add('project');

      // project.innerHTML = `<ul style="padding-left: 0px;"> ${data[i].name}</ul>`
      project.innerHTML = `<a target="_blank" class="link link--no-decor" href="${data[i].html_url}">${data[i].name}</a>`
      projectList.appendChild(project);
    }
  }).catch(error => console.log(error));