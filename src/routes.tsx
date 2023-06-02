import BandForm from './containers/BandForm';

export const baseRoutes = [
  {
    path: '/',
    component: <BandForm />,
    key: 'root',
  },
  {
    path: `/:bandId`,
    component: <BandForm />,
    key: 'catalogItem'
  },
];
