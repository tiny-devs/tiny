import { Npcs } from "../../Enums.ts"
import ItemBase from "../items/itemBase.ts"

export default class NpcBase {
    public id: Npcs
    public agressive: boolean
    public hp: number
    public attack: number
    public defense: number
    public level: number
    public xpGiven: number
    public respawnTime: number
    public frequency: number
    public moveChance: number
    public anger: number
    public fieldOfView: number
    public drops: ItemBase[]

    constructor(id: number,
    agressive: boolean,
    hp: number,
    attack: number,
    defense: number,
    level: number,
    respawnTime: number,
    frequency: number,
    moveChance: number,
    anger: number,
    fieldOfView: number,
    drops: ItemBase[]) {
        this.id = id
        this.agressive = agressive
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.level = level
        this.xpGiven = +((level**1.1)+5).toFixed(2)
        this.respawnTime = respawnTime
        this.frequency = frequency
        this.moveChance = moveChance
        this.anger = anger
        this.fieldOfView = fieldOfView
        this.drops = drops
    }
}