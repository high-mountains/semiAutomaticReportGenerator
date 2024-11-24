import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// export const downloadPDF = async () => {
  
//   const elements = document.querySelectorAll(".printUnit");

//   const pdf = new jsPDF({
//     orientation: "p",
//     unit: "px",
//     format: "a4"
//   });

//   const processBatch = async (batch) => {
//     for (let i = 0; i < batch.length; i++) {
//       const element = batch[i];

//       try {
//         const canvas = await html2canvas(element, { scale: 1.5 });
//         const imgData = canvas.toDataURL("image/jpeg", 0.8); // Use JPEG for compression

//         const imgWidth = canvas.width;
//         const imgHeight = canvas.height;

//         const pdfPageWidth = pdf.internal.pageSize.getWidth();
//         const pdfPageHeight = pdf.internal.pageSize.getHeight();

//         const widthRatio = pdfPageWidth / imgWidth;
//         const heightRatio = pdfPageHeight / imgHeight;

//         const scaleFactor = Math.min(widthRatio, heightRatio);
//         const scaledWidth = imgWidth * scaleFactor;
//         const scaledHeight = imgHeight * scaleFactor;

//         const xOffset = (pdfPageWidth - scaledWidth) / 2;
//         const yOffset = (pdfPageHeight - scaledHeight) / 2;

//         pdf.addImage(imgData, "JPEG", xOffset, yOffset, scaledWidth, scaledHeight);

//         if (i < batch.length - 1 || batch.index !== elements.length - 1) {
//           pdf.addPage();
//         }
//       } catch (error) {
//         console.error(`Error processing element ${i}`, error);
//       }
//     }
//   };

//   const batchSize = 8; // Set a smaller batch size for better stability
  
//   for (let i = 0; i < elements.length; i += batchSize) {
//     const batch = Array.from(elements).slice(i, i + batchSize);
//     await processBatch(batch);

//     // Optional: Adding a short delay to avoid freezing the browser
//     await new Promise((resolve) => setTimeout(resolve, 100));
//     console.log(`Processed batch ${i / batchSize + 1}`);
//   }

//   // Save the PDF
//   pdf.save("download.pdf");
// };

export const downloadPDF = (title = "") => {
  setTimeout(async () => {
      let elems = document.querySelectorAll<HTMLElement>(".graph-row")
      const doc = new jsPDF({
          orientation: "l",
          format: "a4",
      })
      for (let i = 0; i < elems.length; i++) {
          const elem = elems[i]
          if ($(elem).find("canvas").length == 0) continue
          const canvas = await html2canvas(elem, { scale: 2 })
          const dataURI = canvas.toDataURL("image/png")
          doc.setPage(+i + 1)
          if (canvas.height / doc.internal.pageSize.height > canvas.width / doc.internal.pageSize.width) {
              doc.addImage(dataURI, "JPEG", (doc.internal.pageSize.width - canvas.width / (canvas.height / doc.internal.pageSize.height)) / 2, 10, 0, doc.internal.pageSize.height - 20)
          } else {
              doc.addImage(dataURI, "JPEG", 10, (doc.internal.pageSize.height - canvas.height / (canvas.width / doc.internal.pageSize.width)) / 2, doc.internal.pageSize.width - 20, 0)
          }
          if (+i < elems.length - 1) doc.addPage()
      }
      doc.save(title + ".pdf")
  }, 1500)
}