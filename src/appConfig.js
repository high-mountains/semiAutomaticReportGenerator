export const appConfig = {
	// Frontend HTTPS URL
	frontendHTTPS: 'https://localhost:4000',

	// Public Folder path (e.g, thumbnail, public attachment, palacedata, ...)
	publicFolder: 'http://localhost:3000/public',

	// API URLs
	apiMain: 'http://localhost:3001/main',
	apiSocket: 'http://localhost:3002/socket',
	apiFile: 'http://localhost:3003/file',
	apiExternal: 'http://localhost:3004/external',
	apiVideoConf: 'https://localhost:3005/',
	serviceUrl: 'http://111.111.1.3:5005/api',

	// Site settings
	startPageUrl: '/dashboard',
	userAdmin: 'admin',
	fileMaxSizeMB: 100, // 100MB
	paginationData: [
		{ value: 5, title: '5' },
		{ value: 10, title: '10' },
		{ value: 20, title: '20' },
		{ value: 100, title: '100' },
		{ value: 10000, title: 'Total' },
	],
};