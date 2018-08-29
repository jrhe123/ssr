import loadable from 'loadable-components';

// Load the pieces of pages
export const LoginPage = loadable(() => import('../login/LoginPage'));