import { TestBed } from '@angular/core/testing';
import { PdfService } from './pdf.service';

describe('PdfService', () => {
  let service: PdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate PDF HTML blob with content', () => {
    const content = '<h1>Test Document</h1><p>Test content</p>';
    const title = 'Test Title';
    const blob = service.generatePdfHtml(content, title);
    
    expect(blob).toBeTruthy();
    expect(blob.type).toBe('text/html');
  });

  it('should generate PDF HTML with default title', () => {
    const content = '<p>Test</p>';
    const blob = service.generatePdfHtml(content);
    
    expect(blob).toBeTruthy();
  });
});
