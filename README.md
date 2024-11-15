# Starlight Auth Documentation Site

## Overview

The Starlight Auth Documentation Site is a comprehensive documentation platform built using Astro and Starlight. It provides guides, references, and CI/CD information for developers looking to understand and implement authentication solutions. The site is designed to be user-friendly, with a structured sidebar for easy navigation through various topics.

## Features

- **Guides**: Step-by-step instructions on using the authentication features.
- **Reference**: Detailed API documentation and technical references.
- **CI/CD**: Information on continuous integration and deployment practices.
- **Search Functionality**: Quickly find relevant documentation using the integrated search component.

## Getting Started

To clone and start developing the Starlight Auth Documentation Site locally, follow these steps:

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node package manager)

### Clone the Repository

1. Open your terminal.
2. Clone the repository using the following command:

   ```bash
   git clone https://github.com/yourusername/starlight-auth.git
   ```

3. Navigate into the project directory:

   ```bash
   cd starlight-auth
   ```

### Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### Start the Development Server

To start the local development server, run:

```bash
npm run dev
```


This will start the server, and you can view the site in your browser at `http://localhost:3000`.

## Adding New Folders and Documents

To add new folders and documents to the site, follow these steps:

1. **Create a New Folder**: Navigate to the `src/content/docs/` directory and create a new folder for your topic (e.g., `CI-CD`).

2. **Add Markdown Files**: Inside the new folder, create markdown files for your documentation. Each file should include frontmatter at the top, like this:

   ```markdown
   ---
   title: Your Title Here
   description: A brief description of the content.
   ---
   ```

3. **Update the Sidebar**: Open the `astro.config.ts` file and update the sidebar configuration to include your new folder. For example:

   ```typescript
   sidebar: [{
     label: 'CI-CD',
     autogenerate: {
       directory: 'CI-CD' // Ensure this matches your folder name
     }
   }]
   ```

4. **Rebuild the Project**: After adding your new documents, run the build command again to ensure they are included in the site:

   ```bash
   npm run build
   ```

5. **Preview Your Changes**: Use the preview command to check your changes:

   ```bash
   npm run preview
   ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

