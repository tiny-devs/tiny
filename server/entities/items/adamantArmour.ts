import { Items, ItemType, GearType } from "../../Enums.ts"
import ItemBase from "./itemBase.ts"
import { buyPrice, sellPrice } from "./itemPrices.ts";

export default class AdamantArmour extends ItemBase {

    constructor(dropChance: number, customBuyPrice: number = 0) {
        super(0, Items.AdamantArmour, ItemType.Weareable, GearType.Torso, 0, 0, 40, true, 0, 0, 0, dropChance, (customBuyPrice !== 0 ? customBuyPrice : buyPrice.AdamantArmour), sellPrice.AdamantArmour)
    }
}