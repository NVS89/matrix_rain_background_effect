import { Char } from './characters'

export class Effect {

    columns: number
    characters: Char[] = []

    constructor(private canvasWidth: number, private canvasHeight: number, public fontSize: number) {
        this.columns = this.canvasWidth / this.fontSize
        this.init()
    }

    private init() {
        for (let i = 0; i < this.columns; i++) {
            this.characters[i] = new Char(i, 0, this.fontSize, this.canvasHeight)
        }
    }
}