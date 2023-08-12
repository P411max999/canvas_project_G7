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
    // this.selectcolor = document.getElementById("favcolorBorder").value;
    console.log(this.selectcolor);
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    // Fill in the color by left or right click
    if (event.button === 0) {
      console.log(selectcolor.value);
      this.context.strokeStyle = `${selectcolor.value}`;
      this.context.lineWidth = lineWidth.value;
    } else if (event.button === 2) {
      this.context.strokeStyle = "#FFFFFF"; // right-click color
      this.context.lineWidth = lineWidth.value;
    }
    // Kind of line
    this.context.lineJoin = "round";

    // Drawing the line here
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
  }
  // Clicking and removing your mouse
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
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
