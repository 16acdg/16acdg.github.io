// Read in project information from js object using ES6 template literal feature

// Use null for any optional field if not filling it in.
// Optional fields include:
//  - repoLink
//  - videoSrc
//  - images
let projects = [
  {
    title: "iOS Workout App",
    tags: ["Swift"],
    description: "As part of a first-year engineering-design course, I, along with a partner, completed an iOS workout app. We both happened to have experience with iOS development so we thought the time spent learning some additional Swift skills needed to complete an app was worthwhile, especially considering the fact that most students do not complete a project near as advanced as this.<br>We used Xcode and Swift to build out a 7-minute iOS app for Ottawa-based physiotheraphy company MelioGuide, where the focus of the app was to provide easy-to-access workouts for individuals suffering from osteoporosis (the exercises were provided to us by MelioGuide and are specially designed to combat osteoporosis). Per course requirements, we spent the majority of our time in the project building out the UI, which led us to using AutoLayuot Constraints for formatting. We attempted to implement an MVC design framework to organize our classes, and persisted user data using iOS Core Data. Find a video-walkthrough of the app below.",
    images: null,
    videoSrc: "https://www.youtube.com/embed/ov8_6TLKhas",
    repoLink: "https://github.com/APSC100-584B/OsteoeperosisApp"
  },
  {
    title: "Quandary",
    tags: ["Swift"],
    description: "My first exposure to software development and specifically iOS development came in my last year of high school when I built a rebus puzzle game and published it to Apple's app store.<br>Having been my first major programming project, most of the codebase is pretty awful. I am currently working on refactoring the code, while adding some new features and touching up the UI. If you have any comments or ideas about this project, please let me know at <b>ndrwgr@gmail.com</b>!",
    images: ["./images/project_images/quandary/1.PNG", "./images/project_images/quandary/2.PNG", "./images/project_images/quandary/3.PNG", "./images/project_images/quandary/4.PNG"],
    videoSrc: null,
    repoLink: null
  },
  {
    title: "D&D CMS",
    tags: ["PHP", "MySQL", "Backend", "Frontend"],
    description: "As an introduction to back-end web development, I pursued Lynds.com's PHP with MySQL courses. Around this time, while playing Dungeons and Dragons with friends, I realized how frusturating and messy managing paper copies of character sheets can be, especially when one possesses several character sheets and/or players go long durations without playing, the sheets are easily misplaced. For this reason, I thought it a decent application and test of my skills/learning abilities to develop a character/content management system for D&D characters. A user can create an account as a player or a dm, where, as a player they can access several characters from their account dashboard, or as a dm, the user can add characters to their party and view character stats and manage inventory from their own dashboard. This is still currently a work in progress, but I hope to deploy it to Heroku soon.",
    images: ["./images/project_images/dndcms/1.png"],
    videoSrc: null,
    repoLink: "https://github.com/16acdg/dndcms"
  },
  {
    title: "Mousesweeper",
    tags: ["Java", "OOP"],
    description: "For the culminating project in my grade 12 computer science class, I worked in a team of 3 to develop our own vairant of the class Minesweeper, dubbed Mousesweeper. Instead of mines, the idea was that the user would uncover mousetraps, thus clearing the board for the mice to travel across and recover its cheese. Because this computer science classed focused on OOP and Java, this project accordingly has a major focus on OOP design and implementation.",
    images: ["./images/project_images/Mousesweeper/4.png"],
    videoSrc: null,
    repoLink: null
  }
]

var html = "";

for (i in projects) {
  html += projectTemplate(projects[i])
}

document.getElementById("projects_container").innerHTML = html;

// Returns an ES6 template literal (i.e. string of necessary html) for a person's profile
function projectTemplate(project) {

  // A project may only have a video, images, neither, or both
  var videoExists = project.videoSrc != null
  var photosExist = project.images != null
  var repoExists = project.repoLink != null


  var html = `
  <div class="project_container">
  `

  if (repoExists) {
    html += `
      <a href="${project.repoLink}" target="_blank"><img src="images/contact/github.png" class="project_github_link external_link"/></a>
    `
  }

  html += `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `

  if (videoExists) {
    html += `
    <iframe width="560" height="315" src="${project.videoSrc}" frameborder="1" allowfullscreen></iframe>
    `
  }

  if (photosExist) {
    html += `
    <img src=${project.images[0]} width="550" height="300">
    `
  }

  html += `
  </div>
  `

  return html
}
