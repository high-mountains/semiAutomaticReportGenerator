import { FirebaseAuthError } from './type'

export const authError = (error: FirebaseAuthError) => {
  switch (error.code) {
    case 'auth/app-deleted':
      return '申し訳ありません、アプリケーションが削除されたため、操作が完了できませんでした'
    case 'auth/app-not-authorized':
      return '申し訳ありません、このアプリは認証サービスを使用する許可がありません'
    case 'auth/argument-error':
      return '入力内容に誤りがあります、もう一度確認してください'
    case 'auth/invalid-api-key':
      return '内部エラーが発生しました、しばらく待ってから再度試してください'
    case 'auth/invalid-user-token':
    case 'auth/user-token-expired':
      return 'セッションが切れています、再度ログインしてください'
    case 'auth/invalid-tenant-id':
      return '申し訳ありません、システムエラーが発生しました'
    case 'auth/network-request-failed':
      return 'ネットワークエラーが発生しました、接続を確認してください'
    case 'auth/operation-not-allowed':
      return '申し訳ありません、この操作は現在許可されていません'
    case 'auth/requires-recent-login':
      return 'セキュリティのため、再度ログインして操作を行ってください'
    case 'auth/too-many-requests':
      return '申し訳ありません、多くのリクエストがあったため、一時的に操作が制限されています'
    case 'auth/unauthorized-domain':
      return 'このドメインは認証操作が許可されていません、管理者にお問い合わせください'
    case 'auth/user-disabled':
      return 'アカウントが無効化されています、管理者にお問い合わせください'
    case 'auth/web-storage-unsupported':
      return 'ブラウザのストレージがサポートされていません、設定を確認してください'
    default:
      return '申し訳ありません、予期せぬエラーが発生しました'
  }
}
