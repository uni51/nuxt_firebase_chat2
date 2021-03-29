export default ({ app, redirect }, inject) => {
  inject('user', async () => {
    // ログイン中かどうかを判定する機能を呼び出し、ログイン中でない場合は /login にリダイレクトさせる
    const auth = await app.$auth()
    if (!auth) {
      redirect('/login')
    }
    const usersSnapShot = await app.$firestore
      .collection('users')
      .doc(auth.uid)
      .get()

    const user = usersSnapShot.data()
    if (!user) return null

    return {
      uid: auth.uid,
      ...user
    }
  })
}