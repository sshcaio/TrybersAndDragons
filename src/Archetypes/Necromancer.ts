import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _archetypeInstance = 0;
  private _energyType: EnergyType = 'mana';

  public static createdArchetypeInstances(): number {
    this._archetypeInstance += 1;
    return this._archetypeInstance;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
