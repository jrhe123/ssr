import loadable from 'loadable-components';

// Load the pieces of pages
export const AlbumPage = loadable(() => import('../albums/AlbumPage'));
export const HomePage = loadable(() => import('../home/HomePage'));
export const PlaylistPage = loadable(() => import('../playlists/PlaylistPage'));
export const PlayListsPage = loadable(() => import('../playlists/ListPage'));
export const SearchAlbumPage = loadable(() => import('../albums/SearchPage'));
export const DemoPage = loadable(() => import('../demo/DemoPage'));


export const LoginPage = loadable(() => import('../login/LoginPage'));
export const DashboardPage = loadable(() => import('../dashboard/DashboardPage'));