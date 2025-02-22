import { ItemsIds, ItemType } from "../../../shared/Enums.ts"
import ItemBase from "./itemBase.ts"
import { Player } from "../player.ts"
import WoodenHelm from "./woodenHelm.ts"
import Coins from "./coins.ts"
import WoodenArmour from "./woodenArmour.ts"
import WoodenLegs from "./woodenLegs.ts"
import WoodenDagger from "./woodenDagger.ts"
import WoodenSword from "./woodenSword.ts"
import BronzeHelm from "./bronzeHelm.ts"
import BronzeArmour from "./bronzeArmour.ts"
import BronzeLegs from "./bronzeLegs.ts"
import BronzeDagger from "./bronzeDagger.ts"
import BronzeSword from "./bronzeSword.ts"
import IronHelm from "./ironHelm.ts"
import IronArmour from "./ironArmour.ts"
import IronLegs from "./ironLegs.ts"
import IronDagger from "./ironDagger.ts"
import IronSword from "./ironSword.ts"
import BluriteHelm from "./bluriteHelm.ts"
import BluriteArmour from "./bluriteArmour.ts"
import BluriteLegs from "./bluriteLegs.ts"
import BluriteDagger from "./bluriteDagger.ts"
import BluriteSword from "./bluriteSword.ts"
import AdamantHelm from "./adamantHelm.ts"
import AdamantArmour from "./adamantArmour.ts"
import AdamantLegs from "./adamantLegs.ts"
import AdamantDagger from "./adamantDagger.ts"
import AdamantSword from "./adamantSword.ts"
import FireHelm from "./fireHelm.ts"
import FireArmour from "./fireArmour.ts"
import FireLegs from "./fireLegs.ts"
import FireDagger from "./fireDagger.ts"
import FireSword from "./fireSword.ts"
import Coffee from "./consumable/coffee.ts"
import JamulsMachete from "./jamulsMachete.ts"
import JamulsGuitar from "./jamulsGuitar.ts"
import CactusJuice from "./consumable/cactusJuice.ts"
import LargeHp from "./consumable/largeHp.ts"
import SmallHp from "./consumable/smallHp.ts"
import Bread from "./consumable/bread.ts"
import SacredStone from "./sacredStone.ts"
import SacredFireSword from "./sacredFireSword.ts"

export default class Bag {
    public items: ItemBase[] = []
    public coins = 0
    public size = 24
    private player: Player

    constructor(player: Player) { 
        this.player = player
    }

    public useItem(itemId: ItemsIds) {
        const item = this.items.find(i => i.itemId == itemId)
        if (item) {
            if (item.type == ItemType.Consumable || item.type == ItemType.QuestConsumable) {
                this.player.addHp(item.healthRefuel)
                this.removeItem(item)
                return {used:true,wore:false}
            }
            if (item.type == ItemType.Weareable) {
                const wore = this.player.gear.wear(item, false)
                if (wore) {
                    this.removeItem(item)
                }
                return {used:false,wore:true}
            }
        }

        return {used:false,wore:false}
    }

    public dropItem(itemId: ItemsIds): boolean {
        const item = this.items.find(i => i.itemId == itemId)
        if (item && ((item.type !== ItemType.Quest && item.type !== ItemType.QuestConsumable) || this.player.isAdmin())) {
            if (this.player.currentRoom.itemsLayer[this.player.y][this.player.x] === 0) {
                this.player.currentRoom.addItem(this.player.y,this.player.x,item)
                this.removeItem(item)
                return true
            }
        }
        return false
    }

    public dropGold(amount: number): boolean {
        if (amount > 0 && amount <= this.coins) {
            if (this.player.currentRoom.itemsLayer[this.player.y][this.player.x] === 0) {
                this.player.currentRoom.addItem(this.player.y,this.player.x,new Coins(1,amount))
                this.coins -= amount
                return true
            }
        }
        return false
    }

    public addItem(item: ItemBase): boolean {
        if (item.type == ItemType.Money) {
            this.coins += item.coins
            return true
        } else {
            if (this.items.length < this.size) {
                this.items.push(item)
                return true
            }
        }
        return false
    }

    public removeItem(item: ItemBase) {
        const index = this.items.indexOf(item)
        if (index > -1) {
            this.items.splice(index, 1)
        }
    }

    public removeItemFromQuest(itemId: ItemsIds) {
        const item = this.items.find(i => i.itemId == itemId)
        if (item) {
            const index = this.items.indexOf(item)
            if (index > -1) {
                this.items.splice(index, 1)
            }
        }
    }

    public getItemInfo(itemId: ItemsIds): string {
        const item = this.items.find(i => i.itemId == itemId)
        if (item) {
            return `${itemId},${item.level},${item.bonusAttack},${item.bonusDefense},${item.type},${item.healthRefuel}`
        }
        return ''
    }

    public hasAllItems(itemsIdsToHave: ItemsIds[]): boolean {
        return itemsIdsToHave.every(x => this.items.some(y => y.itemId == x))
    }

    public getItemFromItemId(item: ItemsIds): ItemBase | null {
        if (item == ItemsIds.Coffee) {
            return new Coffee(0)
        }
        if (item == ItemsIds.Bread) {
            return new Bread(0)
        }
        if (item == ItemsIds.SmallHp) {
            return new SmallHp(0)
        }
        if (item == ItemsIds.LargeHp) {
            return new LargeHp(0)
        }
        if (item == ItemsIds.SacredStone) {
            return new SacredStone(0)
        }
        if (item == ItemsIds.SacredFireSword) {
            return new SacredFireSword(0)
        }
        if (item == ItemsIds.JamulsMachete) {
            return new JamulsMachete(0)
        }
        if (item == ItemsIds.JamulsGuitar) {
            return new JamulsGuitar(0)
        }
        if (item == ItemsIds.CactusJuice) {
            return new CactusJuice(0)
        }
        if (item == ItemsIds.WoodenHelm) {
            return new WoodenHelm(0)
        }
        if (item == ItemsIds.WoodenArmour) {
            return new WoodenArmour(0)
        }
        if (item == ItemsIds.WoodenLegs) {
            return new WoodenLegs(0)
        }
        if (item == ItemsIds.WoodenDagger) {
            return new WoodenDagger(0)
        }
        if (item == ItemsIds.WoodenSword) {
            return new WoodenSword(0)
        }
        if (item == ItemsIds.BronzeHelm) {
            return new BronzeHelm(0)
        }
        if (item == ItemsIds.BronzeArmour) {
            return new BronzeArmour(0)
        }
        if (item == ItemsIds.BronzeLegs) {
            return new BronzeLegs(0)
        }
        if (item == ItemsIds.BronzeDagger) {
            return new BronzeDagger(0)
        }
        if (item == ItemsIds.BronzeSword) {
            return new BronzeSword(0)
        }
        if (item == ItemsIds.IronHelm) {
            return new IronHelm(0)
        }
        if (item == ItemsIds.IronArmour) {
            return new IronArmour(0)
        }
        if (item == ItemsIds.IronLegs) {
            return new IronLegs(0)
        }
        if (item == ItemsIds.IronDagger) {
            return new IronDagger(0)
        }
        if (item == ItemsIds.IronSword) {
            return new IronSword(0)
        }
        if (item == ItemsIds.BluriteHelm) {
            return new BluriteHelm(0)
        }
        if (item == ItemsIds.BluriteArmour) {
            return new BluriteArmour(0)
        }
        if (item == ItemsIds.BluriteLegs) {
            return new BluriteLegs(0)
        }
        if (item == ItemsIds.BluriteDagger) {
            return new BluriteDagger(0)
        }
        if (item == ItemsIds.BluriteSword) {
            return new BluriteSword(0)
        }
        if (item == ItemsIds.AdamantHelm) {
            return new AdamantHelm(0)
        }
        if (item == ItemsIds.AdamantArmour) {
            return new AdamantArmour(0)
        }
        if (item == ItemsIds.AdamantLegs) {
            return new AdamantLegs(0)
        }
        if (item == ItemsIds.AdamantDagger) {
            return new AdamantDagger(0)
        }
        if (item == ItemsIds.AdamantSword) {
            return new AdamantSword(0)
        }
        if (item == ItemsIds.FireHelm) {
            return new FireHelm(0)
        }
        if (item == ItemsIds.FireArmour) {
            return new FireArmour(0)
        }
        if (item == ItemsIds.FireLegs) {
            return new FireLegs(0)
        }
        if (item == ItemsIds.FireDagger) {
            return new FireDagger(0)
        }
        if (item == ItemsIds.FireSword) {
            return new FireSword(0)
        }
        
        return null
    }
}