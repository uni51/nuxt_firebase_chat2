export default async function ({ redirect, app }) {
  // 未ログインの場合 -> ログインページへリダイレクト
  const user = await app.$user()
  // アカウント未登録の場合 -> アカウント登録ページへリダイレクト
  if (!user) {
    redirect('/register')
  }
}
