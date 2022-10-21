import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Alnilam');
const player2 = new Character('Alnitak');
const player3 = new Character('Mintaka');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = ([...battles]: Battle[]) => {
  battles.forEach((battle) => {
    const result = battle.fight();
    if (result === 1) {
      console.log('Player wins!');
    } else {
      console.log('Player loses!');
    }
  });
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
