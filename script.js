const plantContainer = document.getElementById("plantCards");

const plants = [
  {
    name: "Calathea",
    latinName: "Calathea",
    light: "half sunny",
    water: "when dry",
    imageURL: "./assets/calathea.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet ab fugit, ipsam eligendi accusamus tenetur ratione autem non aperiam nobis sequi placeat, hic minus similique quis aliquam quidem. Magnam sunt nam laudantium, deleniti quia ab quisquam porro vitae sequi corrupti maximeitaque in aliquam nobis voluptas blanditiis inventore debitis."
  }, 
  {
    name: "Monstera",
    latinName: "Monstera deliciosa",
    light: "sunny",
    water: "when dry",
    imageURL: "./assets/monstera.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet ab fugit, ipsam eligendi accusamus tenetur ratione autem non aperiam nobis sequi placeat, hic minus similique quis aliquam quidem. Magnam sunt nam laudantium, deleniti quia ab quisquam porro vitae sequi corrupti maximeitaque in aliquam nobis voluptas blanditiis inventore debitis."

  }, 
  {
    name: "Moses stentavlor",
    latinName: "Maranta leuconeura",
    light: "light shadow",
    water: "regularily",
    imageURL: "./assets/maranta.jpg",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet ab fugit, ipsam eligendi accusamus tenetur ratione autem non aperiam nobis sequi placeat, hic minus similique quis aliquam quidem. Magnam sunt nam laudantium, deleniti quia ab quisquam porro vitae sequi corrupti maximeitaque in aliquam nobis voluptas blanditiis inventore debitis."

  },
  {
    name: "Coleus",
    latinName: "Solenostemon scutellarioides",
    light: "sunny",
    water: "often",
    imageURL: "./assets/coleus.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet ab fugit, ipsam eligendi accusamus tenetur ratione autem non aperiam nobis sequi placeat, hic minus similique quis aliquam quidem. Magnam sunt nam laudantium, deleniti quia ab quisquam porro vitae sequi corrupti maximeitaque in aliquam nobis voluptas blanditiis inventore debitis."

  },
  {
    name: "Ficus",
    latinName: "Ficus lyrata",
    light: "half sunny",
    water: "when dry",
    imageURL: "./assets/ficus.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet ab fugit, ipsam eligendi accusamus tenetur ratione autem non aperiam nobis sequi placeat, hic minus similique quis aliquam quidem. Magnam sunt nam laudantium, deleniti quia ab quisquam porro vitae sequi corrupti maximeitaque in aliquam nobis voluptas blanditiis inventore debitis."

  }
];

// Loop to create plants copy. This loop includes createPlant function that do that 
for(let i = 0; i < plants.length; i++) {
  createPlant(plants[i]);
}

function createPlant(plant) {
  plantContainer.innerHTML += 
  `<div class="plant-card">
      <h2 class="plant-title">${plant.name}</h2>
      <p class="grey-text">${plant.latinName}</p>
      <img class="plant-image" src="${plant.imageURL}"/>
      <p class="info-text">${plant.light}</p>
      <p class="info-text">${plant.water}</p>
      <button id="modalBtn" class="button" onclick ="learnMore('${plant.name}')">Learn more</button>
  </div>`;
}


// CODE FÖR POP UP FÖNSTER 
function learnMore(plantName) { 

    const plant = plants.find(p => p.name === plantName);
    const modal = document.getElementById('simpleModal');  
    const closeBtn = document.getElementsByClassName('closeBtn')[0]; 

    modal.querySelector('h2').innerText = plant.name;
    modal.querySelector('img').src = plant.imageURL;
    modal.querySelector('p').innerText = plant.description;
    modal.style.display = 'block';

    closeBtn.addEventListener('click', function closeModal() {
        modal.style.display = 'none'; 
    }); 

    window.addEventListener('click', function outsideClick(e) {
        if(e.target == modal) {
            modal.style.display = 'none'
        }
    })
  }


