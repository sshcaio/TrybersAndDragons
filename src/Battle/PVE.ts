import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _fighter: Fighter;
  private _monster: (Fighter | SimpleFighter)[];

  constructor(fighter: Fighter, monster: (Fighter | SimpleFighter)[]) {
    super(fighter);

    this._fighter = fighter;
    this._monster = monster;
  }

  public fight(): number {
    this._monster.forEach((monster) => {
      while (this._fighter.lifePoints > 0 && monster.lifePoints > 0) {
        this._fighter.attack(monster);
        monster.attack(this._fighter);
      }
    });
    
    return this._fighter.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;
