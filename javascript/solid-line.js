// same as coding as triangle without setting the third point coord

class SolidLine extends PaintFunction {
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
    this.selectcolor = document.getElementById("favcolorBorder").value;
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.strokeStyle = `${selectcolor.value}`;
    const startPoint = this.coordinates[0];
    const endPoint = coord;

    this.contextDraft.beginPath();
    this.contextDraft.moveTo(startPoint[0], startPoint[1]);
    this.contextDraft.lineTo(endPoint[0], endPoint[1]);
    // this.contextDraft.closePath();
    this.contextDraft.stroke();
  }
  onMouseMove() {}

  onMouseUp(coord) {
    this.contextReal.lineWidth = lineWidth.value;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.strokeStyle = `${selectcolor.value}`;
    const startPoint = this.coordinates[0];
    const endPoint = coord;

    this.contextReal.beginPath();
    this.contextReal.moveTo(startPoint[0], startPoint[1]);
    this.contextReal.lineTo(endPoint[0], endPoint[1]);
    // this.contextReal.closePath();
    this.contextReal.stroke();
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
