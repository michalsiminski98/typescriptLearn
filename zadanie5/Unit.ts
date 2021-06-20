import Weapon from "./Weapon";

abstract class Unit {
  private name: string;
  private hitPointsLeft: number;
  private maxHitPoints: number;
  private moveDistance: number;
  private weapons: Weapon[];
  constructor(
    name: string,
    hitPoints: number,
    moveDistance: number,
    weapons: Weapon[]
  ) {
    this.name = name;
    this.hitPointsLeft = hitPoints;
    this.maxHitPoints = hitPoints;
    this.moveDistance = moveDistance;
    this.weapons = weapons;
  }
}
export default Unit;
