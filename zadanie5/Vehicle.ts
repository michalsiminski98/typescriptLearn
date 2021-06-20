import Unit from "./Unit";
import Weapon from "./Weapon";

class Vehicle extends Unit {
  private fuelLeft: number;
  private maxFuel: number;
  private fuelConsumptionPerMove: number;

  constructor(
    fuel: number,
    fuelConsumptionPerMove: number,
    name: string,
    hitPoints: number,
    moveDistance: number,
    weapons: Weapon[]
  ) {
    super(name, hitPoints, moveDistance, weapons);
    this.fuelLeft = fuel;
    this.maxFuel = fuel;
    this.fuelConsumptionPerMove = fuelConsumptionPerMove;
  }
}

export default Vehicle;
