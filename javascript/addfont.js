class AddFont extends PaintFunction {
    constructor(contextReal) {
      super();
      this.context = contextReal;
      this.selectcolor = document.getElementById("favcolorBorder").value;
      this.inputElement = null;
    }
  
    onMouseDown(coord, event) {
      if (!this.inputElement) {
        this.inputElement = document.createElement("input");
        this.inputElement.type = "text";
        this.inputElement.style.position = "absolute";
        this.inputElement.style.left = coord[0] + "px";
        this.inputElement.style.top = coord[1] + "px";
        document.body.appendChild(this.inputElement);
        this.inputElement.focus();
        console.log("run");
      } else {
        this.text = this.inputElement.value.trim();
        const inputLeft = parseInt(this.inputElement.style.left); //改左呢度
        const inputTop = parseInt(this.inputElement.style.top); //將左上既位置放入變數內
        const canvasLeft = this.context.canvas.offsetLeft;
        const canvasTop = this.context.canvas.offsetTop;
  
        const offsetX = inputLeft - canvasLeft; //計算位置
        const offsetY = inputTop - canvasTop; //計算位置
        this.context.fillText(this.text, offsetX, offsetY);
  
        document.body.removeChild(this.inputElement);
        this.inputElement = null;
      }
    }
  }
  
  // class AddFont extends PaintFunction {
  //   // This class extends the PaintFunction class
  
  //   constructor(contextReal) {
  //     super();
  //     this.context = contextReal;
  //     this.inputElement = null;
  //   }
  //     onMouseDown(coord, event) {
  //       //當滑鼠按下時，會觸發onMouseDown
  //       if (!this.inputElement) {
  //         //如果不存在
  //         this.inputElement = document.createElement("input"); //創建一個input element
  //         this.inputElement.type = "text"; //設定input element的type為text
  //         this.inputElement.style.position = "absolute"; //設定input element的position為absolute
  //         this.inputElement.style.left = coord[0] + "px"; //設定input element的left為coord[0]
  //         this.inputElement.style.top = coord[1] + "px"; //設定input element的top為coord[1]
  //         this.inputElement.style.width = this.width + "px";
  //         this.inputElement.style.height = this.height + "px";
  //         document.body.appendChild(this.inputElement); //將input element加入body
  //         this.inputElement.focus(); //將input element設為focus
  //         console.log(coord[0], coord[1]);
  //       } else {
  //         this.text = this.inputElement.value.trim(); // 取得輸入的文字
  //         console.log(this.text);
  //         this.context.fillText(this.text, coord[0], coord[1]); //將文字畫在canvas上
  //         document.body.removeChild(this.inputElement); //移除input element
  //         this.inputElement = null; //將input element設為null
  //         console.log(coord[0], coord[1]);
  //       }
  //     }
  //   }
  // //if mousedown location is outside of the input element,
  // //remove the input element
  // //當click多下mousedown的位置在input element之外時，
  // //移除input element及保留文字
  
  // // this.addButton.addEventListener("click", () => {
  // //     this.text = this.inputElement.value.trim(); // Get the entered text
  // //     if (this.text) {
  // //       const { offsetX, offsetY } = event; // Get the mouse coordinates relative to the canvas
  // //       this.context.fillText(this.text, offsetX, offsetY); // Draw the text on the canvas
  // //     }
  
  // //     // Remove the input element and add button
  // //     document.body.removeChild(this.inputElement);
  // //     document.body.removeChild(this.addButton);
  // //     this.inputElement = null;
  // //     this.addButton = null;
  
  // // class AddFont extends PaintFunction {
  // //   constructor(contextReal) {
  // //     super();
  // //     this.context = contextReal;
  // //     this.text = ""; // Variable to store the entered text
  // //     this.inputElement = null;
  // //     this.addButton = null;
  // //   }
  
  // //   onMouseDown(coord, event) {
  // //     // When the mouse is pressed down
  // //     if (!this.inputElement) {
  // //       // Create the input element
  // //       this.inputElement = document.createElement("input");
  // //       this.inputElement.type = "text";
  // //       this.inputElement.style.position = "absolute";
  // //       this.inputElement.style.left = coord[0] + "px";
  // //       this.inputElement.style.top = coord[1] + "px";
  // //       document.body.appendChild(this.inputElement);
  
  // //       // Create the add button
  // //       this.addButton = document.createElement("button");
  // //       this.addButton.textContent = "Add";
  // //       this.addButton.style.position = "absolute";
  // //       this.addButton.style.left = coord[0] + "px";
  // //       this.addButton.style.top = coord[1] + "px";
  // //       document.body.appendChild(this.addButton);
  
  // //       // Set up event listener for the add button
  // //       this.addButton.addEventListener("click", () => {
  // //         this.text = this.inputElement.value.trim(); // Get the entered text
  // //         if (this.text) {
  // //           const { offsetX, offsetY } = event; // Get the mouse coordinates relative to the canvas
  // //           this.context.fillText(this.text, offsetX, offsetY); // Draw the text on the canvas
  // //         }
  
  // //         // Remove the input element and add button
  // //         document.body.removeChild(this.inputElement);
  // //         document.body.removeChild(this.addButton);
  // //         this.inputElement = null;
  // //         this.addButton = null;
  // //       });
  // //     }
  // //   }
  // // }