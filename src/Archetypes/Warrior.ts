import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _archetypeInstance = 0;
  private _energyType: EnergyType = 'stamina';

  public static createdArchetypeInstances(): number {
    this._archetypeInstance += 1;
    return this._archetypeInstance;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
