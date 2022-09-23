import { EnergyType } from '../Energy';

abstract class Archetype {
  constructor(
    private _name: string,
    private _special = 0,
    private _cost = 0,
  ) { }

  public get name(): string {
    return this._name;
  }
  
  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  public static createdArchetypesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;
}

export default Archetype;
