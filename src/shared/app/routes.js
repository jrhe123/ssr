import loadable from 'loadable-components';

// Load the pieces of pages
export const LoginPage = loadable(() => import('../login/LoginPage'));
export const DashboardPage = loadable(() => import('../dashboard/DashboardPage'));
export const NewExperiencePage = loadable(() => import('../newexperience/NewExperiencePage'));
export const NewChannelPage = loadable(() => import('../newchannel/NewChannelPage'));