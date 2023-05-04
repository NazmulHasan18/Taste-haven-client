// eslint-disable-next-line no-unused-vars
import React from "react";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";

const generatePDF = () => {
   const doc = new jsPDF();

   const componentText = document.getElementById("qna").innerText;
   // Add content to the PDFconst pageHeight = doc.internal.pageSize.getHeight();
   const pageHeight = doc.internal.pageSize.height;

   // Before adding new content

   doc.text(componentText, 10, 10, { maxWidth: 190 });
   let y = 500; // Height position of new content
   if (y >= pageHeight) {
      doc.addPage();
      y = 0; // Restart height position
   }
   doc.text(componentText.slice(2075, componentText.length), 10, 10, { maxWidth: 190 });
   // Convert the PDF to a blob
   const pdfBlob = doc.output("blob");

   // Save the PDF using FileSaver
   saveAs(pdfBlob, "Q&A.pdf");
};

const PDFfile = () => {
   return (
      <div>
         <a href="#" onClick={generatePDF}>
            Download PDF
         </a>
      </div>
   );
};

export default PDFfile;
