## Act Blue take home assessment

### Author: Alex Sekowski (hi@aleks.rocks)

Feel free to reach out to the author if you have any questions about the project :)

The project has been set up with React, Vite, Tailwind, Chakra and Jest. Since there is no need to do fine tuning in build process, I decided to use swc instead of babel. Jest is used for unit and React tests. ESLint is used for linting.

I commited everything to master branch for simplicity, but I would normally use a feature branch workflow.
<br />
<br />
<br />

### Set up

1. Clone the repository [https://github.com/aleksUIX/ab-assessment](https://github.com/aleksUIX/ab-assessment)
2. Run `npm install`
3. Run `npm run dev` for development
4. The app will run on [http://localhost:5173](http://localhost:5173)
5. It will open on BTESS by default, but you can change that by using /flaming-potatoes and /cindy routes
<br />
<br />
<br />

### Deployment
Hosted on firebase staging server [https://ab-assessment.web.app](https://ab-assessment.web.app)

- [https://ab-assessment.web.app/cindy](https://ab-assessment.web.app/cindy)
- [https://ab-assessment.web.app/btess](https://ab-assessment.web.app/btess)
- [https://ab-assessment.web.app/flaming-potatoes](https://ab-assessment.web.app/flaming-potatoes)

<br />
<br />
<br />

### Testing

Run `npm run test` for jest dom and unit tests

<br />
<br />
<br />

### Features
- Component and container architecture
- Dumb components
- Routing
- State management with React Context
- Business logic handled in context
- Simple form validation
- Mock form submission
- Extendable internationalization (formatting)
- Support for data formats
- Responsiveness
- Unit and React tests
- Accessibility

<br />
<br />
<br />

### Approach
I focused on laying out component, container and state architecture that would be easy to extend and maintain. I also focused on making the app accessible and responsive. I used Chakra UI components for the form, but I also added some custom components to show how I would approach the problem. I used React Context for state management, but I would probably use Redux or another solution in a real project.

Test coverage is not 100%, because I focused on setting up the testing pipeline and demonstrating its functionality, rather than providing full coverage. I would probably use Cypress for end to end testing in a real project.

<br />
<br />
<br />

### Some things I would add / do differently in a real project
- Use Redux or another state management solution
- Add navigation (state management is already there for it)
- Improve UI, style and visual attractiveness
- Add persistence layer
- Use Cypress for end to end testing
- Ensure 100% test coverage
- Use a more robust and configurable form validation solution / service
- Use a more robust and configurable internationalization solution / service
- Use a more robust and configurable data formatting solution / service
  
<br />
<br />
<br />

### Design and implementation choices

- Typescript
- React with Vite: [https://vitejs.dev/](https://vitejs.dev/)
- SWC for lightning speed builds: [https://github.com/vitejs/vite-plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
- TailwindCSS styling base: [https://tailwindcss.com/](https://tailwindcss.com/)
- Chakra UI components: [https://chakra-ui.com/](https://chakra-ui.com/)
- React Context for state management
- Jest for unit and React tests
- ESLint
