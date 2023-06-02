## Act Blue take home assessment
### Author: Alex Sekowski (hi@aleks.rocks)
Feel free to reach out to the author if you have any questions about the project :)

The project has been set up with Vite, Tailwind, Chakra and Jest. Since there is no need to do fine tuning in build process, I decided to use swc instead of babel. Jest is used for unit and React tests. ESLint is used for linting.

I focused on laying out component, container and state architecture that would be easy to extend and maintain. I also focused on making the app accessible and responsive. I used Chakra UI components for the form, but I also added some custom components to show how I would approach the problem. I used React Context for state management, but I would probably use Redux or another solution in a real project.

Test coverage is not 100%, because I focused on setting up the testing pipeline and demonstrating its functionality, rather than providing full coverage. I would probably use Cypress for end to end testing in a real project.

### Set up

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` for development



### Testing

Run `npm run test` for jest dom and unit tests



### Design and implementation choices
- Typescript
- React with Vite: [https://vitejs.dev/](https://vitejs.dev/) 
- SWC for lightning speed builds: [https://github.com/vitejs/vite-plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
- TailwindCSS styling base: [https://tailwindcss.com/](https://tailwindcss.com/)
- Chakra UI components: [https://chakra-ui.com/](https://chakra-ui.com/)
- React Context for state management
- Jest for unit and React tests
- ESLint 