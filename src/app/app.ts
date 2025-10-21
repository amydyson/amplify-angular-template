import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfService } from './services/pdf.service';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Amplify Angular Template');
  protected readonly angularVersion = VERSION.major;

  constructor(private pdfService: PdfService) {}

  exportToPdf(): void {
    const contentElement = document.getElementById('pdf-content');
    if (contentElement) {
      const content = contentElement.innerHTML;
      this.pdfService.exportToPdf(
        content,
        'Sample Report',
        'sample-report.html'
      );
    }
  }
}
