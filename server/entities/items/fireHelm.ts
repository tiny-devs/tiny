import { ItemsIds, ItemType, GearType } from "../../../shared/Enums.ts"
import ItemBase from "./itemBase.ts"
import { buyPrice, sellPrice } from "./itemPrices.ts";

export default class FireHelm extends ItemBase {

    constructor(dropChance: number, customBuyPrice: number = 0) {
        super(0, ItemsIds.FireHelm, ItemType.Weareable, GearType.Head, 0, 0, 50, true, 0, 0, 0, dropChance, (customBuyPrice !== 0 ? customBuyPrice : buyPrice.FireHelm), sellPrice.FireHelm)
    }
}