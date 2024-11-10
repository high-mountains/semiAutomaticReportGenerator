import html2canvas from 'html2canvas';
import jsPDF from "jspdf";

export const downloadPDF = async () => {
    const elements = document.querySelectorAll(".printUnit"); // Select all elements with the class "sample"
    
    const pdf = new jsPDF({
        orientation: "p",
        unit: "px",
        format: "a4"
    });
    
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        
        // Use html2canvas to capture each element as a canvas
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");
        
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        
        const pdfPageWidth = pdf.internal.pageSize.getWidth();
        const pdfPageHeight = pdf.internal.pageSize.getHeight();
        
        let widthRatio = pdfPageWidth / imgWidth;
        let heightRatio = pdfPageHeight / imgHeight;
        
        // Calculate scale factor to maximize image size within page boundaries
        let scaleFactor = Math.min(widthRatio, heightRatio);
        
        // Scale image dimensions according to calculated scale factor
        let scaledWidth = imgWidth * scaleFactor;
        let scaledHeight = imgHeight * scaleFactor;

        // Center the image within the page
        let xOffset = (pdfPageWidth - scaledWidth) / 2;
        let yOffset = (pdfPageHeight - scaledHeight) / 2;
        
        // Add image to PDF
        pdf.addImage(imgData, "PNG", xOffset, yOffset, scaledWidth, scaledHeight);
        
        if (i < elements.length - 1) {
            pdf.addPage();
        }
    }
    
    pdf.save("download.pdf"); // Download the PDF with the specified filename
};