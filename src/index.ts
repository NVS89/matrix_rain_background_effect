import { Effect } from './scripts/effect'

class App {
    FONT_SIZE = 25
    ONE_SECOND = 1000
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    effect: Effect

    lastTime = 0
    fps = 15

    nextFrame = this.ONE_SECOND / this.fps

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
