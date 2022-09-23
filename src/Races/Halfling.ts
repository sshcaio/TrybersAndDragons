import Race from './Race';

class Halfling extends Race {
  private static _raceInstance = 0;

  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints = 60,
  ) {
    super(
      _name,
      _dexterity,
    )
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._raceInstance++;
    return this._raceInstance;
  }

}

export default Halfling;
