const projects = [
  {
    title: "Project 1",
    image: "path/to/project1-image.jpg",
    description: "This is my first project",
  },
  {
    title: "Project 2",
    image: "path/to/project2-image.jpg",
    description: "This is my second project",
  },
  // Add more project objects as needed
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
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

  projectList.appendChild(projectItem);
});

// Create and add moving shapes
for (let i = 0; i < 5; i++) {
  const shape = document.createElement("div");
  shape.classList.add("shape");
  shape.style.top = `${Math.random() * 300}px`;
  shape.style.left = `${Math.random() * 300}px`;
  document.body.appendChild(shape);
}
