document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    { name: "Student Attendance", url: "https://tvcattendencev2.netlify.app/" },
    { name: "Multi-Text Editor", url: "https://tvcmultitext.netlify.app/" } // Add your new projects here
  ];

  const projectList = document.getElementById("project-list");

  projects.forEach(project => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";
    link.textContent = project.name;
    listItem.appendChild(link);
    projectList.appendChild(listItem);
  });
});
