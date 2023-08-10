class SolidTriangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.coordinates = []; // use array to store the coordinates
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = "green";
    this.coordinates.unshift(coord); // sotre the first coordinate，用push每次只能取最原始一個click坐標數，unshift可以更新下一個點擊坐標數
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.fillStyle = "green";
    const startPoint = this.coordinates[0];
    const endPoint = coord;
    // //  計算中點的坐標[(x1+x2)/2,(y1+y2)/2]
    // const midPoint = [
    //   (startPoint[0] + endPoint[0]) / 2,
    //   (startPoint[1] + endPoint[1]) / 2,
    // ];
    const thirdPoint = [startPoint[0], endPoint[1]];

    this.contextDraft.beginPath();
    this.contextDraft.moveTo(startPoint[0], startPoint[1]);
    this.contextDraft.lineTo(endPoint[0], endPoint[1]);
    this.contextDraft.lineTo(startPoint[0], endPoint[1]);
    this.contextDraft.closePath();
    this.contextDraft.fill();
  }
  onMouseMove() {}

  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.fillStyle = "green";
    const startPoint = this.coordinates[0];
    const endPoint = coord;
    // const midPoint = [
    //   (startPoint[0] + endPoint[0]) / 2,
    //   (startPoint[1] + endPoint[1]) / 2,
    // ];
    const thirdPoint = [startPoint[0], endPoint[1]];
    this.contextReal.beginPath();
    this.contextReal.moveTo(startPoint[0], startPoint[1]);
    this.contextReal.lineTo(endPoint[0], endPoint[1]);
    this.contextReal.lineTo(startPoint[0], endPoint[1]);
    this.contextReal.closePath();
    this.contextReal.fill();
  }

  onMouseLeave() {}
  onMouseEnter() {}
}