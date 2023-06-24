const projects = [
  {
    title: "Project 1",
    image: "path/to/project1-image.jpg",
    description: "This is my first project",
    pageContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, sem vitae maximus dignissim, ipsum lectus cursus sapien, vitae tincidunt tellus lacus eget turpis."
  },
  {
    title: "Project 2",
    image: "path/to/project2-image.jpg",
    description: "This is my second project",
    pageContent: "Nullam consequat arcu quis neque venenatis, a interdum lorem blandit. Nulla sit amet finibus mauris, nec luctus est. Etiam auctor augue et leo tincidunt efficitur."
  },
  // Add more project objects as needed
];

const projectList = document.getElementById("project-list");

function openProjectPage(index) {
  const project = projects[index];

  const projectPage = document.createElement("div");
  projectPage.innerHTML = `
    <h2>${project.title}</h2>
    <img src="${project.image}" alt="${project.title}">
    <p>${project.pageContent}</p>
  `;

  document.body.innerHTML = '';
  document.body.appendChild(projectPage);
}

projects.forEach((project, index) => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;
  projectItem.appendChild(projectTitle);

  const projectImage = document.createElement("img");
  projectImage.src = project.image;
  projectItem.appendChild(projectImage);

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  projectItem.appendChild(projectDescription);

  projectItem.addEventListener("click", () => {
    openProjectPage(index);
  });

  projectList.appendChild(projectItem);
});
