let hero = {
  name: 'Lu',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: 'dagger',
    damage: 2
  }
};

function rest(person) {
  document.getElementById('health-stats').innerHTML = person.health;
  document.getElementById('inn').addEventListener('click', function() {
    if (person.health === 10) {
      alert('You are 100% healthy!');
    } else {
      person.health = 10;
      //  Option2: Object.assign(person, { health: 10 });
    }
    document.getElementById('health-stats').innerHTML = person.health;
  });

  return person;
}

rest(hero);

function pickUpItem(person, weapon) {
  document.getElementById('dagger').addEventListener('click', function() {
    Object.assign(person.inventory, {
      weapon: [{ type: 'dagger' }, { damage: 2 }]
    });
  });
}

pickUpItem(hero);
