//********************************************************************************
//
//  Injects the project information into the div with id projects-container
//  Andrew Gray
//  Aug 17, 2019
//
//********************************************************************************

const ID_TO_INJECT_INTO = "projects-container"

const PROJECT_DATA = [
  {
    name: "Race Car AI Navigation",
    link: "https://16acdg.github.io/projname"
  },
  {
    name: "Promptu",
    link: "https://16acdg.github.io/projname"
  },
  {
    name: "A* Pathfinding Implementation",
    link: "https://16acdg.github.io/pathfinding"
  },
  {
    name: "D&D CMS",
    link: "https://16acdg.github.io/projname"
  },
  {
    name: "Lloyd's Deployment Algorithm Application",
    link: "https://16acdg.github.io/projname"
  },
  {
    name: "iOS Workout App",
    link: "https://16acdg.github.io/projname"
  },
  {
    name: "Mousesweeper",
    link: "https://16acdg.github.io/projname"
  },
  {
    name: "Quandary",
    link: "https://16acdg.github.io/projname"
  }
]

function populateProjects() {
  var projContainer = document.getElementById(ID_TO_INJECT_INTO)
  for (var i = 0; i < PROJECT_DATA.length; i++) {
    projContainer.innerHTML += `
      <a href="${PROJECT_DATA[i].link}" target="_blank">
        <div class="project-container">
          <span>${PROJECT_DATA[i].name}</span>
        </div>
      </a>
    `
  }
}
