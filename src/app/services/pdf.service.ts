import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  /**
   * Generates a PDF-ready HTML document with PrinceXML-compatible CSS
   * @param content The HTML content to convert to PDF
   * @param title The document title
   * @returns A blob containing the HTML document
   */
  generatePdfHtml(content: string, title: string = 'Document'): Blob {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    /* PrinceXML-compatible styles */
    @page {
      size: Letter;
      margin: 1in;
      
      @top-center {
        content: string(doctitle);
      }
      
      @bottom-right {
        content: "Page " counter(page) " of " counter(pages);
      }
    }
    
    body {
      font-family: 'Georgia', serif;
      font-size: 12pt;
      line-height: 1.6;
      color: #333;
    }
    
    h1 {
      string-set: doctitle content();
      font-size: 24pt;
      margin-top: 0;
      color: #2c3e50;
      page-break-after: avoid;
    }
    
    h2 {
      font-size: 18pt;
      margin-top: 20pt;
      color: #34495e;
      page-break-after: avoid;
    }
    
    h3 {
      font-size: 14pt;
      margin-top: 15pt;
      color: #34495e;
      page-break-after: avoid;
    }
    
    p {
      margin: 10pt 0;
      text-align: justify;
    }
    
    .page-break {
      page-break-before: always;
    }
    
    .avoid-break {
      page-break-inside: avoid;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15pt 0;
    }
    
    th, td {
      border: 1pt solid #ddd;
      padding: 8pt;
      text-align: left;
    }
    
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }
    
    @media print {
      body {
        margin: 0;
      }
    }
    
    /* Screen view styles */
    @media screen {
      body {
        max-width: 8.5in;
        margin: 20px auto;
        padding: 20px;
        background: white;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
    }
  </style>
</head>
<body>
  ${content}
</body>
</html>
    `.trim();
    
    return new Blob([htmlContent], { type: 'text/html' });
  }

  /**
   * Downloads the generated HTML file
   * @param blob The HTML blob to download
   * @param filename The name of the file to download
   */
  downloadHtml(blob: Blob, filename: string = 'document.html'): void {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  /**
   * Generates and downloads a PDF-ready HTML document
   * @param content The HTML content
   * @param title The document title
   * @param filename The output filename
   */
  exportToPdf(content: string, title: string = 'Document', filename: string = 'document.html'): void {
    const blob = this.generatePdfHtml(content, title);
    this.downloadHtml(blob, filename);
  }
}
