
export class Char {
    text = ''
    symbols = '0123456789'

    constructor(private x: number, private y: number, private fontSize: number, private canvasHeight: number) { }

    draw(context: CanvasRenderingContext2D) {
        const charOffsetX = this.x * this.fontSize
        const charOffsetY = this.y * this.fontSize
        const charPosition = Math.round(Math.random() * this.symbols.length)

        this.text = this.symbols.charAt(charPosition)

        context.fillText(this.text, charOffsetX, charOffsetY)

        if (charOffsetY > this.canvasHeight && Math.random() > 0.98) {
            this.y = 0
        } else {
            this.y += 1
        }
    }
}