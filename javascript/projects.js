// Read in project information from js object using ES6 template literal feature

let projects = [
  {
    title: "Andrew Gray",
    description: "images/profile_photos/andrewgray.jpeg"
  },
  {
    title: "Brayden Secord",
    description: "images/profile_photos/braydensecord.jpeg"
  },
  {
    title: "Jack Demeter",
    description: "images/profile_photos/jackdemeter.jpeg"
  }
]

var html = "";

for (i in projects) {
  html += projectTemplate(projects[i])
}

document.getElementById("projects_container").innerHTML = html;

// Returns an ES6 template literal (i.e. string of necessary html) for a person's profile
function projectTemplate(project) {
  return `
  <div class="project_container">
    <h3>${project.title}</h3><img src="images/contact/github.png"/>
    <p>Java</p>
  </div>
  `
}
