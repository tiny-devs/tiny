import { Npcs } from '../../Enums.ts'
import NpcBase from './npcBase.ts'
import Coffee from '../items/coffee.ts'
import IronSword from '../items/ironSword.ts'
import IronDagger from '../items/ironDagger.ts'
import IronHelm from '../items/ironHelm.ts'
import BronzeHelm from '../items/bronzeHelm.ts'

export default class SkeletonKnight extends NpcBase {
    constructor() {
        super(Npcs.SkeletonKnight, true, 0, 0, 0, 25, 10000, 0.15, 6, 36, null, [new IronDagger(0.2),new IronSword(0.1),new IronHelm(0.3),new BronzeHelm(0.7),new Coffee(0.4)])
    }
}