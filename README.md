# Getting Started with the Project

### [Live Demo](https://decarb-earth-assessment.netlify.app/) 

### `npm start`

- Runs the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
- The page will automatically reload when you make changes to the code.
- Console output will display any linting errors, helping you maintain clean code.

### `npm run build`

- Builds the app for production, outputting to the `build` folder.
- Compiles React in production mode and optimizes the build for maximum performance.
- The build is minified, and filenames include content hashes for cache busting.
- The app is ready for deployment to a live environment.

For more details on deployment, see the [official deployment guide](https://facebook.github.io/create-react-app/docs/deployment).

# Important Considerations

### Security

1. **Client-Side Hashing**:
   - The project uses client-side password hashing with SHA-256 for simplicity, though it is not recommended due to vulnerability to tampering.
   - Server-side encryption is more secure or libraries like `bcryptjs` for production use, which provide more secure hashing mechanisms.
   - The current implementation aims to minimize package dependencies for a simple setup.

2. **Simulated Authentication**:
   - For simplicity, user authentication is simulated by storing the username in local storage, bypassing robust login mechanisms.
   - The verification code is logged to the console for ease of testing but should be removed for production to avoid security risks.

3. **Route Protection**:
   - Basic route checks are implemented by verifying stored username and code in local storage.
   - If these values are absent, users are redirected to the login page when accessing protected routes like the Dashboard.

### SEO (Search Engine Optimization)

- Although single-page applications are traditionally challenging for SEO, the app includes several optimizations:
  - **Proper Titles**: Each page includes appropriate and descriptive titles.
  - **Crawlability**: Links and navigation are structured to be accessible to search engines.
  - **Structured Headings**: Correct use of heading tags (`<h1>`, `<h2>`, etc.) for better content hierarchy.
  - **Readable Links**: Ensures all links are crawlable and formatted correctly for indexing.

### Accessibility

- Efforts have been made to ensure the app is accessible to all users, including those with disabilities:
  - **Semantic HTML**: Proper use of HTML elements for accessibility, such as `aria-labels` and roles.
  - **Accessible Buttons**: All buttons have discernible names for screen readers.
  - **Contrast Compliance**: Background and foreground colors provide sufficient contrast.
  - **Sequential Headings**: Headings appear in a sequentially descending order to maintain logical flow.
  - **Alt Texts**: Images include descriptive alt texts for screen readers.

### Responsiveness

- The app is fully responsive and adapts seamlessly to both mobile and desktop screens:
  - **Responsive Layout**: The design adapts to various screen sizes, ensuring usability across devices.
  - **Loading States for Charts**: Charts include loaders, enhancing user experience by setting clear expectations during loading times.
  - **Mobile Menu**: A fully functional mobile menu enhances navigation on smaller screens.

### State Management

- The state management approach is intentionally simple to keep the app lightweight:
  - **Location State**: Used to manage the verification code during navigation between routes.
  - **Local Storage**: Stores the username to simulate logged-in status.
  - **No Complex Libraries**: The app avoids the overhead of libraries like Redux or Context API, aligning with the project's simplicity.

### Design

- The design is tailored for dashboard-like interfaces with a focus on ease of navigation and accessibility:
  - **Fixed Sidebar**: A fixed sidebar on the left keeps essential navigation within reach, while main content scrolls independently.
  - **Prioritized Content**: Key information is placed prominently, with less critical elements positioned further down.
  - **Chart Libraries**: ApexCharts is chosen for its simplicity, visual appeal, and lightweight nature. Other viable options include React Charts and Google Charts, though ApexCharts provides a more modern approach.

### Tests

- **Testing Limitations**: Due to time constraints, formal testing (e.g., unit tests, integration tests) was not implemented.
- **Future Testing**: Plans include visual testing with tools like Storybook to ensure consistent design across components.

### Future Improvements

- **Enhanced Security**: Implement server-side validation and encryption for sensitive operations.
- **Comprehensive Testing**: Add robust testing practices to improve code quality and reliability.
- **SEO Enhancements**: Consider server-side rendering (SSR) or static site generation (SSG) for better SEO performance.
- **User Testing**: Iteratively improve UI/UX based on real-world usage.
