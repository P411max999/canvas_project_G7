/**********************************************
 * Drawing Line Functionality
 * ================================== branch:feat-pencil-eraser
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/

class DrawingLine extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal) {
    super();
    this.context = contextReal;
    this.isEraser = false; // Flag to track if eraser mode is active
    this.eraser = null; // Reference to the Eraser instance
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    if (event.button === 0) {
      // Left-click
      if (this.isEraser) {
        // If eraser mode is active, switch back to pencil
        this.isEraser = false;
        this.context.strokeStyle = "green";
        this.context.lineWidth = 2;
      } else {
        // If eraser mode is not active, set pencil options
        this.context.strokeStyle = "green";
        this.context.lineWidth = 2;
      }
    } else if (event.button === 2) {
      // Right-click
      this.isEraser = true;
      // Create an instance of the Eraser class if not already created
      if (!this.eraser) {
        this.eraser = new Eraser(this.context);
      }
    }

    if (this.isEraser) {
      this.eraser.onMouseDown(coord, event);
    } else {
      this.context.lineJoin = "round";
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
    }
  }

  // Clicking and removing your mouse
  onDragging(coord, event) {
    if (this.isEraser) {
      this.eraser.onDragging(coord, event);
    } else {
      this.draw(coord[0], coord[1]);
    }
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    //
    this.context.lineTo(x, y);
    // Draw the line onto the page
    this.context.stroke();
  }
}
