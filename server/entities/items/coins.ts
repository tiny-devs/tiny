import { ItemsIds, ItemType, GearType } from "../../../shared/Enums.ts"
import ItemBase from "./itemBase.ts"

export default class Coins extends ItemBase {

    constructor(dropChance: number, totalCoins: number) {
        super(0, ItemsIds.Coin, ItemType.Money, GearType.None, totalCoins, 0, 0, false, 0, 0, 5, dropChance, 1, 1)
    }
}