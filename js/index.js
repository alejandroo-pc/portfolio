/* creating objects */
let today = new Date();
let thisYear = today.getFullYear();

/* appending to the footer element */
const footer = document.querySelector("#footer");
const content = document.createElement("p");

content.textContent = "Alejandro " + thisYear;
footer.appendChild(content);

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
const skillsList = document.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.classList.add('tag');

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

/* initialized varibles for XML requests */
var githubRequest = new XMLHttpRequest();

githubRequest.open('GET', 'https://api.github.com/users/alejandro-patino-camargo/repos');
githubRequest.send();

githubRequest.onload = function () {
  /****  error handling ******/

  /* if server connection is successful */
  if (githubRequest.status >= 200 && githubRequest.status < 400) { 
    var ourData = JSON.parse(githubRequest.responseText);
    console.log("We connected to the sever, no errors were returned");

  /* display data */  
    console.log(ourData);
    renderProjects(ourData);
  } else {
  /* for debugging purposes */
     console.log("We connected to the sever, but it returned an error");
  }
};
/* DOM traversal to display JSON data */
const projectSection = document.querySelector('#projects');
const projectList = document.querySelector('#project-list');

/* retrieve JSON data through name attribute */
function renderProjects(data) {
  for (var i = 0; i < data.length; i++){
    const project = document.createElement("li");
    project.classList.add('project');

    project.innerHTML = "<ul>" + data[i].name + "</ul>";
    projectList.appendChild(project);
  }
};