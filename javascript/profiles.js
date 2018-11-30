// Use ES6 template literal feature to dynamically include profile section

let profiles = [
  {
    name: "Andrew Gray",
    image_path: "images/profile_photos/andrewgray.jpeg",
    team: "AI",
    position: "General",
    email: "16acdg@queensu.ca",
    linkedin: ""
  },
  {
    name: "Brayden Secord",
    image_path: "images/profile_photos/braydensecord.jpeg",
    team: "AI",
    position: "General",
    email: "16acdg@queensu.ca",
    linkedin: ""
  },
  {
    name: "Jack Demeter",
    image_path: "images/profile_photos/jackdemeter.jpeg",
    team: "AI",
    position: "AI Team Manager",
    email: "16acdg@queensu.ca",
    linkedin: ""
  }
]

var profilesHTML = "";

for (i in profiles) {
  profilesHTML += profileTemplate(profiles[i])
}

document.getElementById("profiles_container").innerHTML = profilesHTML;

// Returns an ES6 template literal (i.e. string of necessary html) for a person's profile
function profileTemplate(person) {
  return `
  <div class="profile_container">
    <img src="${person.image_path}" class="profile_image"/>
    <p class="profile_name">${person.name}</p>
    <p class="profile_position">${person.position}</p>
    <p class="profile_email">${person.email}</p>
    <a href="${person.linkedin}"><img src="images/linkedin_icon.png" class="linkedin_icon"/></a>
  </div>
  `
}
