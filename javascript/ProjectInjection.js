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
    name: "Unity Dialog Editor Plugin",
    link: "/dialog-editor-unity"
  },
  {
    name: "Race Car AI Navigation",
    link: "/racecar-ai"
  },
  {
    name: "Promptu",
    link: "/Promptu"
  },
  {
    name: "A* Pathfinding Implementation",
    link: "/pathfinding"
  },
  {
    name: "D&D CMS",
    link: "/dndcms"
  },
  {
    name: "Lloyd's Deployment Algorithm Application",
    link: "https://16acdg.github.io/"
  },
  {
    name: "iOS Workout App",
    link: "https://16acdg.github.io/"
  },
  {
    name: "Mousesweeper",
    link: "/Mousesweeper"
  },
  {
    name: "Quandary",
    link: "https://16acdg.github.io/"
  }
]

function populateProjects() {
  var projContainer = document.getElementById(ID_TO_INJECT_INTO)
  for (var i = 0; i < PROJECT_DATA.length; i++) {
    projContainer.innerHTML += `
      <a href="${PROJECT_DATA[i].link}">
        <div class="project-container">
          <span><p>${PROJECT_DATA[i].name}</p></span>
        </div>
      </a>
    `
  }
}
