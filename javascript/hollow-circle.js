/**********************************************
 * Drawing Circle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class HollowCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    // this.selectcolor = document.getElementById("favcolorBorder").value;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = `${selectcolor.value}`;
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    // Circle drawing
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // Manipulating the context draft
    this.contextDraft.beginPath();
    // Calculate the radius based on the distance between the original coordinates and the current coordinates
    const radius = Math.sqrt(
      Math.pow(coord[0] - this.origX, 2) + Math.pow(coord[1] - this.origY, 2)
    );
    // Draw the circle from below
    this.contextDraft.arc(this.origX, this.origY, radius, 0, 2 * Math.PI);
    this.contextDraft.strokeStyle = `${selectcolor.value}`;
    this.contextDraft.stroke();
  }

  onMouseMove() {}

  // Committing the element to the canvas
  onMouseUp(coord) {
    this.contextReal.lineWidth = lineWidth.value;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    const radius = Math.sqrt(
      Math.pow(coord[0] - this.origX, 2) + Math.pow(coord[1] - this.origY, 2)
    );
    this.contextReal.arc(this.origX, this.origY, radius, 0, 2 * Math.PI);
    this.contextReal.strokeStyle = `${selectcolor.value}`;
    this.contextReal.stroke();
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
