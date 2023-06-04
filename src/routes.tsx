import BandForm from './containers/BandForm';

export const baseRoutes = [
  {
    path: '/',
    component: <BandForm />,
    key: 'root',
  },
  // if this was a real app, we would have a base route for the catalog
  // here we can just use the bandId in the root path
  {
    path: `/:bandId`,
    component: <BandForm />,
    key: 'catalogItem'
  },
];
