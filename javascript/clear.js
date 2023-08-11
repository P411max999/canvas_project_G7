class Clear extends PaintFunction {
    constructor(canvasReal, canvasDraft, contextReal, contextDraft) {
      super();
      this.canvasReal = canvasReal;
      this.canvasDraft = canvasDraft;
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    clear() {
      console.log("click");
      this.canvasReal.clearRect(0, 0, 10000, 10000);
    }
  }