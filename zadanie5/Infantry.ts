import Unit from "./Unit";
import Weapon from "./Weapon";

class Interface extends Unit {
  constructor(
    name: string,
    hitPoints: number,
    moveDistance: number,
    weapons: Weapon[]) {
    super(
      name,
      hitPoints,
      moveDistance,
      weapons
    );
  }
}