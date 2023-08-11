//file download

const canvas = document.getElementById("canvas-real");
const ctx = canvas.getContext("2d");
const download = document.getElementById("download");

download.addEventListener("click", function (e) {
  console.log(canvas.toDataURL());
  const link = document.createElement("a");
  link.download = "download.jpg";
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});

document.getElementById("download-pdf").addEventListener("click", function () {
  console.log("OK");
  var doc = new jsPDF();
  html2canvas(document.body, {
    onrendered: function (canvas) {
      var image = canvas.toDataURL("image/png");
      doc.addImage(image, "PNG", 1, 1, 220, 110, "", "FAST");
      //addImage(imageData, format, x, y, width, height, alias, compression, rotation).
      doc.save("test.pdf");
    },
  });
});
