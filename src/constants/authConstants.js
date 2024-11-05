export default {
	SOCKET_CONNECTED:				'connect',
	SOCKET_DISCONNECTED:			'disconnect',
	// ----- Server to Client -----
	AUTH_ERROR:						'AUTH_ERROR',
	AUTH_AUTHORIZED:				'AUTH_AUTHORIZED',
	AUTH_UNAUTHORIZED:				'AUTH_UNAUTHORIZED',

	// ----- Client to Server -----
	AUTH_AUTHORIZATION:				'AUTH_AUTHORIZATION',
	AUTH_DISCONNECT:				'AUTH_DISCONNECT',

	// ----- Server to Client -----
	USER_LOGGED_IN:					'USER_LOGGED_IN',
	USER_LOGGED_OUT:				'USER_LOGGED_OUT',

	// ----- Client to Server -----
	LOGGED_USERS:					'LOGGED_USERS',
}