import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _Fighter: Fighter;
  private _FighterTwo: Fighter;

  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this._Fighter = player;
    this._FighterTwo = enemy;
  }

  public fight(): number {
    let counter = 0;

    while (this._Fighter.lifePoints > 0 && this._FighterTwo.lifePoints > 0) {
      this._Fighter.attack(this._FighterTwo);
      this._FighterTwo.attack(this._Fighter);
      if (this._Fighter.lifePoints <= 0) {
        counter = -1;
      } else {
        counter = 1;
      }
    }

    return counter;
  }
}

export default PVP;