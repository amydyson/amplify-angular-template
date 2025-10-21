# PrinceXML Integration Guide

This guide explains how to use the PrinceXML integration in this Angular application.

## Overview

PrinceXML is a powerful HTML-to-PDF converter that supports advanced CSS features for print media. This application includes a `PdfService` that generates PrinceXML-compatible HTML documents.

## Features

### Supported PrinceXML Features

- **Page Layout**: Custom page sizes, margins, and orientation
- **Headers & Footers**: Automatic headers and footers using `@page` rules
- **Page Numbering**: Automatic page numbers with `counter(page)` and `counter(pages)`
- **Page Breaks**: Control pagination with CSS page break properties
- **Typography**: Print-optimized fonts and spacing
- **Tables**: Properly formatted tables with styling

## Usage

### Basic Usage

1. Import the `PdfService` in your component:

```typescript
import { PdfService } from './services/pdf.service';

export class MyComponent {
  constructor(private pdfService: PdfService) {}
}
```

2. Generate and download PDF-ready HTML:

```typescript
exportToPdf() {
  const htmlContent = '<h1>My Document</h1><p>Content here</p>';
  this.pdfService.exportToPdf(htmlContent, 'My Document', 'output.html');
}
```

### Advanced Usage

#### Custom Content

```typescript
const content = `
  <h1>Annual Report</h1>
  <h2>Executive Summary</h2>
  <p>This is the executive summary...</p>
  
  <div class="page-break"></div>
  
  <h2>Financial Data</h2>
  <table>
    <thead>
      <tr><th>Quarter</th><th>Revenue</th></tr>
    </thead>
    <tbody>
      <tr><td>Q1</td><td>$1M</td></tr>
      <tr><td>Q2</td><td>$1.2M</td></tr>
    </tbody>
  </table>
`;

this.pdfService.exportToPdf(content, 'Annual Report', 'annual-report.html');
```

#### Page Breaks

Use the `page-break` class to force a page break:

```html
<div class="page-break"></div>
```

#### Avoid Breaking Content

Use the `avoid-break` class to keep content together:

```html
<div class="avoid-break">
  <h2>Important Section</h2>
  <p>This content will stay together on one page.</p>
</div>
```

## Converting to PDF

### Method 1: Browser Print

1. Open the downloaded HTML file in a web browser
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
3. In the print dialog:
   - Select "Save as PDF" as the destination
   - Ensure "Background graphics" is enabled
4. Click "Save"

### Method 2: PrinceXML CLI

For production use and advanced features, install PrinceXML:

1. Download PrinceXML from https://www.princexml.com/download/
2. Install according to your operating system
3. Convert HTML to PDF:

```bash
prince document.html -o document.pdf
```

#### Advanced Prince CLI Options

```bash
# Custom page size
prince document.html -o output.pdf --page-size=A4

# Landscape orientation
prince document.html -o output.pdf --page-size=A4 --page-orientation=landscape

# Custom margins
prince document.html -o output.pdf --page-margin=1in

# Embed fonts
prince document.html -o output.pdf --no-subset-fonts

# Compress PDF
prince document.html -o output.pdf --compress
```

## CSS Customization

The PDF service includes default styles, but you can customize them:

### Modify Default Styles

Edit `src/app/services/pdf.service.ts` to change the default CSS in the `generatePdfHtml` method.

### Example Customizations

#### Change Page Size to A4

```css
@page {
  size: A4;
  margin: 2cm;
}
```

#### Add Custom Header Content

```css
@page {
  @top-left {
    content: "Confidential";
    color: red;
    font-weight: bold;
  }
  
  @top-right {
    content: "Date: " string(date);
  }
}
```

#### Custom Footer

```css
@page {
  @bottom-center {
    content: "Company Name - " counter(page);
    font-size: 10pt;
    color: #666;
  }
}
```

## Best Practices

### 1. Use Semantic HTML

Structure your content with proper HTML elements:

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<p>Paragraph text</p>
<ul>
  <li>List item</li>
</ul>
```

### 2. Control Page Breaks

Prevent awkward page breaks:

```css
h1, h2, h3 {
  page-break-after: avoid;
}

table {
  page-break-inside: avoid;
}
```

### 3. Optimize Images

- Use appropriate image sizes
- Specify width and height attributes
- Use high-resolution images for print quality

### 4. Test Print Layout

Always preview the HTML in a browser and use print preview before final conversion.

### 5. Font Selection

Use web-safe fonts or embed custom fonts for consistent results:

```css
body {
  font-family: Georgia, 'Times New Roman', serif;
}
```

## Troubleshooting

### Issue: Headers/Footers Not Showing

**Solution**: Ensure PrinceXML CLI is being used. Browser print may not support all `@page` features.

### Issue: Page Numbers Not Displaying

**Solution**: Use PrinceXML CLI for proper `counter()` function support.

### Issue: Content Cut Off

**Solution**: Check page margins and content width. Adjust margins in `@page` rules.

### Issue: Images Not Appearing

**Solution**: Use absolute URLs or base64-encoded images for portability.

## Resources

- [PrinceXML Documentation](https://www.princexml.com/doc/)
- [CSS Paged Media Module](https://www.w3.org/TR/css-page-3/)
- [PrinceXML CSS Reference](https://www.princexml.com/doc/css-props/)

## License Notes

PrinceXML is commercial software. The free version adds a watermark to PDFs. For production use without watermarks, purchase a license from https://www.princexml.com/purchase/

For development and testing, you can use:
- Browser print functionality (free, limited features)
- PrinceXML free version (with watermark)
- Alternative tools like WeasyPrint (open-source, different feature set)
