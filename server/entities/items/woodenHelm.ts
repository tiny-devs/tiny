import { ItemsIds, ItemType, GearType } from "../../../shared/Enums.ts"
import ItemBase from "./itemBase.ts"
import { buyPrice, sellPrice } from "./itemPrices.ts";

export default class WoodenHelm extends ItemBase {

    constructor(dropChance: number, customBuyPrice: number = 0) {
        super(0, ItemsIds.WoodenHelm, ItemType.Weareable, GearType.Head, 0, 0, 1, true, 0, 0, 0, dropChance, (customBuyPrice !== 0 ? customBuyPrice : buyPrice.WoodenHelm), sellPrice.WoodenHelm)
    }
}