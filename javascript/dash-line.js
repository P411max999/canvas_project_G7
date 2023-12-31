// same as coding as triangle without setting the third point coord

class DashLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.coordinates = []; // use array to store the coordinates
    this.selectcolor = document.getElementById("favcolorBorder").value;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = `${this.selectcolor}`;
    this.coordinates.unshift(coord); // sotre the first coordinate，用push每次只能取最原始一個click坐標數，unshift可以更新下一個點擊坐標數
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.strokeStyle = `${this.selectcolor}`;
    const startPoint = this.coordinates[0];
    const endPoint = coord;

    this.contextDraft.beginPath();
    this.contextDraft.setLineDash([5, 5]); // set up dash line
    this.contextDraft.moveTo(startPoint[0], startPoint[1]);
    this.contextDraft.lineTo(endPoint[0], endPoint[1]);
    // this.contextDraft.closePath();
    this.contextDraft.stroke();
    this.contextDraft.setLineDash([]);
  }
  onMouseMove() {}

  onMouseUp(coord) {
    this.contextReal.lineWidth = lineWidth.value;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.strokeStyle = `${this.selectcolor}`;
    const startPoint = this.coordinates[0];
    const endPoint = coord;

    this.contextReal.beginPath();
    this.contextReal.setLineDash([5, 5]); // set up dash line
    this.contextReal.moveTo(startPoint[0], startPoint[1]);
    this.contextReal.lineTo(endPoint[0], endPoint[1]);
    // this.contextReal.closePath();
    this.contextReal.stroke();
    this.contextReal.setLineDash([]);
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
