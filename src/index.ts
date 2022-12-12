
class Char {
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

class Effect {

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

class App {
    FONT_SIZE = 25
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    effect: Effect

    lastTime = 0
    fps = 15

    nextFrame = 1000 / this.fps

    timerDelta = 0

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d')
        this.effect = new Effect(this.canvas.width, this.canvas.height, this.FONT_SIZE)

        this.canvas.width = innerWidth
        this.canvas.height = innerHeight

        this.main()
    }

    main() {
        this.animate(0)
    }

    animate(timeStamp: number) {

        const deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp
        if (this.timerDelta > this.nextFrame) {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
           
            this.ctx.textAlign = 'center'
           
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
           
            this.ctx.fillStyle = '#0aff0a'
           
            this.ctx.font = this.effect.fontSize + 'px monospace'

            this.effect.characters.forEach(ch => ch.draw(this.ctx))

            this.timerDelta = 0
        } else {
            this.timerDelta += deltaTime
        }
        requestAnimationFrame(this.animate.bind(this))
    }
}

const app = new App()
