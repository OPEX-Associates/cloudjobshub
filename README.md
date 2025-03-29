# CloudJobsHub

A modern, SEO-friendly job board focused on Remote Cloud & DevOps roles. Built with GatsbyJS and TailwindCSS.

## Features

- Clean, fast, and mobile-responsive design
- SEO optimized with structured data
- Dark/light mode support
- Filtering jobs by location and skills
- Search functionality
- Static generation for blazing fast page loads

## Tech Stack

- **Frontend**: GatsbyJS (React-based static site generator)
- **Styling**: TailwindCSS
- **Data Source**: Currently JSON file, ready for API integration
- **Hosting**: Ready for deployment on Netlify or Vercel

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/cloudjobshub.git
cd cloudjobshub
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run develop
# or
yarn develop
```

4. Open your browser and visit: `http://localhost:8000`

## Project Structure

```
cloudjobshub/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── data/            # Job data (JSON)
│   └── styles/          # Global styles
├── gatsby-config.js     # Gatsby configuration
├── tailwind.config.js   # TailwindCSS configuration
└── package.json
```

## Deployment

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/cloudjobshub)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/cloudjobshub)

## Future Enhancements

- Data Crawling: Integrate with job APIs or web scraping
- Authentication: Allow employers to post jobs directly
- CMS Integration: Add Contentful or Sanity for content management
- Analytics: Add detailed job view tracking
- Job Alerts: Email subscriptions for new job matches

## License

This project is licensed under the MIT License - see the LICENSE file for details. 