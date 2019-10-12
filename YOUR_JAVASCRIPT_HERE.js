let hero = {
  name: 'Luisa',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: 'gun',
    damage: 3
  }
};

function rest(person) {
  document.getElementById('inn').addEventListener('click', function() {
    if (person.health === 10) {
      alert('You are 100% healthy!');
    } else {
      person.health = 10;
    }
    document.getElementById('health').innerHTML = person.health;
  });

  return person;
}

rest(hero);

function pickUpItem(person, weapon) {
  document.getElementById('dagger').addEventListener('click', function() {
    // not being able to print on screen however when using console.log it shows there
    Object.assign(person.inventory, {
      weapon: [{ type: 'dagger' }, { damage: 2 }]
    });
  });
}

pickUpItem(hero, weapon);

function changeHeroName() {
  const person = prompt('Please enter your Hero Name', '');
  if (person != null) {
    document.getElementById('hero-name').innerHTML = person;
  }
}

function displayStats(person) {
  document.getElementById('hero-name').innerHTML = person.name;
  document.getElementById('heroic').innerHTML = person.heroic;
  document.getElementById('health').innerHTML = person.health;
  document.getElementById('weapon').innerHTML = person.weapon.type;
  document.getElementById('damage').innerHTML = person.weapon.damage;
}

displayStats(hero);

function equipWeapon(person) {
  document.getElementById('bag').addEventListener('click', function() {});
}
