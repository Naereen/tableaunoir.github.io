import { User } from './User';


/**
 * This is an abstract tool (like erasing, drawing, drawing a line, rectangle, drawing a circle)
 */
export abstract class Tool {
    xInit = 0;
    yInit = 0;

    x = 0;
    y = 0;

    isDrawing = false;
    user: User;

    constructor(user: User) {
        this.user = user;
    }


    destructor(): void {
        //empty destructur
     }

    abstract mousedown(evt: MouseEvent): void;
    abstract mousemove(evt: MouseEvent): void;
    abstract mouseup(evt: MouseEvent): void;



    setToolCursorImage(srcImage: { data: string, x: number, y: number }): void {
        document.getElementById("canvas").style.cursor = `url(${srcImage.data}) ${srcImage.x} ${srcImage.y}, auto`;
        // this.toolCursor.src = srcImage;
    }

    updateCursor(): void {
        //by defaut: do nothing
    }
}