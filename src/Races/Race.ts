abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) { }

  public get dexterity(): number {
    return this._dexterity;
  }
  public get name(): string {
    return this._name;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}

export default Race;
