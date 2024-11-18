export interface FirebaseAuthError extends Error {
  code:
    | 'auth/app-deleted'
    | 'auth/app-not-authorized'
    | 'auth/argument-error'
    | 'auth/invalid-api-key'
    | 'auth/invalid-user-token'
    | 'auth/invalid-tenant-id'
    | 'auth/network-request-failed'
    | 'auth/operation-not-allowed'
    | 'auth/requires-recent-login'
    | 'auth/too-many-requests'
    | 'auth/unauthorized-domain'
    | 'auth/user-disabled'
    | 'auth/user-token-expired'
    | 'auth/web-storage-unsupported'
    | string // for other error codes
  message: string
  name: string
  stack?: string
}
