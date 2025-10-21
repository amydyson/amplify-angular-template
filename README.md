# Amplify Angular Template with PrinceXML

This is an AWS Amplify Gen 2 starter application built with Angular that demonstrates PDF generation using PrinceXML approach. This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.6.

## Features

- Angular 20.x application
- AWS Amplify Gen 2 ready
- PDF generation capability using PrinceXML-compatible HTML/CSS
- Sample document with PDF export functionality

## Prerequisites

- Node.js 18+ and npm
- AWS Account (for Amplify deployment)
- Angular CLI (installed automatically)

## Development server

To start a local development server, run:

```bash
npm install
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## AWS Amplify Gen 2 Setup (Optional)

This template is ready for AWS Amplify Gen 2. To set up the backend:

1. Install the Amplify CLI:
```bash
npm install -g @aws-amplify/cli
```

2. Navigate to the amplify directory and install dependencies:
```bash
cd amplify
npm install
```

3. Start the Amplify sandbox:
```bash
npm run sandbox
```

4. Configure your backend resources in `amplify/backend.ts` as needed.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## PrinceXML Integration

This application includes a PDF generation service that creates print-ready HTML/CSS documents compatible with PrinceXML. 

### What is PrinceXML?

PrinceXML is a powerful tool that converts HTML and CSS into PDF documents. It supports advanced CSS features for print media, including page breaks, headers, footers, and more.

### Quick Start

1. Run the application: `npm start`
2. Click the "Export to PDF-Ready HTML" button
3. Open the downloaded HTML file in a browser
4. Use browser print (Ctrl+P / Cmd+P) to save as PDF

For complete documentation, see [PRINCEXML.md](./PRINCEXML.md)

### Key Features

- **@page Rules**: Custom page sizes, margins, headers, and footers
- **Automatic Pagination**: Page numbering with counter(page) and counter(pages)
- **Page Break Control**: CSS properties to control where pages break
- **Print-Optimized Styling**: Professional typography and layout

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
