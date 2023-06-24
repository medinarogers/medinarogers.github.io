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
  projectPage.id = "project-page";
  projectPage.innerHTML = `
    <h2>${project.title}</h2>
    <img src="${project.image}" alt="${project.title}">
    <p>${project.pageContent}</p>
    <div id="home-button">
      <a href="#">Back to Home</a>
    </div>
  `;

  document.body.innerHTML = '';
  document.body.appendChild(projectPage);

  const homeButton = document.getElementById("home-button");
  homeButton.addEventListener("click", () => {
    location.reload(); // Reload the page to go back to the landing page
  });
}

projects.forEach((project, index) => {
  const projectSnapshot = document.createElement("div");
  projectSnapshot.classList.add("project-snapshot");

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;
  projectSnapshot.appendChild(projectTitle);

  const projectImage = document.createElement("img");
  projectImage.src = project.image;
  projectSnapshot.appendChild(projectImage);

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  projectSnapshot.appendChild(projectDescription);

  projectSnapshot.addEventListener("click", () => {
    openProjectPage(index);
  });

  projectList.appendChild(projectSnapshot);
});

// Add moving shapes
document.addEventListener("mousemove", (event) => {
  const shape = document.createElement("div");
  shape.classList.add("shape");
  shape.style.top = `${event.clientY}px`;
  shape.style.left = `${event.clientX}px`;
  document.body.appendChild(shape);
});
