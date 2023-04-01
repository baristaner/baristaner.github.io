document.addEventListener('DOMContentLoaded', () => {

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const skillsList = document.getElementById('skills-list');
      const projectsList = document.getElementById('projects-list');
      const starIcon = '<i class="fas fa-star"></i>'; 


      data.skills.forEach(skill => {
        const li = document.createElement('li');
        const skillName = document.createElement('span');
        const skillIcon = document.createElement('i');
        const skillLevel = document.createElement('div');

        skillName.textContent = skill.name;
        skillIcon.innerHTML = `<img src="${skill.icon}" alt="${skill.name}" width="20" height="20">`; 
        skillIcon.style.marginRight = '5px'; 


        for (let i = 0; i < skill.level; i++) {
          skillLevel.innerHTML += starIcon;
        }

        li.appendChild(skillIcon);
        li.appendChild(skillName);
        li.appendChild(skillLevel);
        skillsList.appendChild(li);
      });


      data.projects.forEach(project => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const p = document.createElement('p');

        a.href = project.link;
        a.textContent = project.name;
        p.textContent = project.description;

        li.appendChild(a);
        li.appendChild(p);
        projectsList.appendChild(li);
      });
    });
});
