/**********************************************
 * Drawing Solid Circle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class SolidCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.selectcolor = document.getElementById("myColor").value;
  }

  onMouseDown(coord, event) {
    console.log(this.selectcolor);
    this.contextReal.fillStyle = `${this.selectcolor}`;
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    // Circle drawing
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // Manipulating the context draft
    this.contextDraft.fillStyle = `${this.selectcolor}`;
    // Calculate the radius based on the distance between the original coordinates and the current coordinates
    const radius = Math.sqrt(
      (coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2
    );
    // Draw the circle from below
    this.contextDraft.beginPath();
    this.contextDraft.arc(this.origX, this.origY, radius, 0, 2 * Math.PI);
    // this.contextDraft.closePath();
    this.contextDraft.fill();
  }

  onMouseMove() {}

  // Committing the element to the canvas
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.fillStyle = `${this.selectcolor}`;
    const radius = Math.sqrt(
      (coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2
    );
    this.contextReal.beginPath();
    this.contextReal.arc(this.origX, this.origY, radius, 0, 2 * Math.PI);

    this.contextReal.closePath();
    this.contextReal.fill();
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
