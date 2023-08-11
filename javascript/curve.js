class DrawCurve extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.startX = null;
      this.startY = null;
      this.controlX = null;
      this.controlY = null;
      this.endX = null;
      this.endY = null;
      this.selectColor = document.getElementById("favcolorBorder").value;
    }
  
    onMouseDown(coord, event) {
      if (this.startX === null) {
        this.startX = coord[0];
        this.startY = coord[1];
      } else if (this.controlX === null) {
        this.controlX = coord[0];
        this.controlY = coord[1];
      } else if (this.endX === null) {
        this.endX = coord[0];
        this.endY = coord[1];
        this.drawCurve();
        this.reset();
      }
    }
  
    onMouseMove() {}
  
    onMouseUp() {}
  
    drawCurve() {
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.startX, this.startY);
      this.contextReal.quadraticCurveTo(
        this.controlX,
        this.controlY,
        this.endX,
        this.endY
      );
      this.contextReal.strokeStyle = this.selectColor;
      this.contextReal.lineWidth = 2;
      this.contextReal.stroke();
    }
  
    reset() {
      this.startX = null;
      this.startY = null;
      this.controlX = null;
      this.controlY = null;
      this.endX = null;
      this.endY = null;
      this.selectColor = document.getElementById("favcolorBorder").value;
    }
  }