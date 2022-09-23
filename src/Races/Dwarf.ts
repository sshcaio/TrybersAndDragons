import Race from './Race';

class Dwarf extends Race {
  private static _raceInstance = 0;

  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints = 80,
  ) {
    super(
      _name,
      _dexterity,
    );
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._raceInstance += 1;
    return this._raceInstance;
  }
}

export default Dwarf;
