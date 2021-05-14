import { lazy } from 'react'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import parseLanguages from 'base-shell/lib/utils/locale'
import grants from './grants'
import Loading from 'material-ui-shell/lib/components/Loading/Loading'
import getDefaultRoutes from './getDefaultRoutes'
import { defaultUserData, isGranted } from 'rmw-shell/lib/utils/auth'


const config = {
  firebase: {
    prod: {
      initConfig: {
        apiKey: 'AIzaSyCHiaVZMUd0dM8rSTJgyom6-j2wgVnIh_U',
        authDomain: 'touchlearn-fd5be.firebaseapp.com',
        databaseURL: 'https://touchlearn-fd5be-default-rtdb.firebaseio.com/',
        projectId: 'touchlearn-fd5be',
        storageBucket: 'touchlearn-fd5be.appspot.com',
        messagingSenderId: '1056913709551',
        appId: "1:1056913709551:web:894e1b7fae20a243c8be1a",
        measurementId: "G-SGPBDQD83D"
      },
      messaging: {
        publicVapidKey:
          'BEthk1-Qmoh9opZbi1AUZpxANTu6djVRDph4MLpyO2Qk6Dglm1Sa8Yt_pYi4EhYi3Tj-xgLqUktlbNuP_RP6gto',
      },
    },
    dev: {
       initConfig: {
        apiKey: 'AIzaSyCHiaVZMUd0dM8rSTJgyom6-j2wgVnIh_U',
        authDomain: 'touchlearn-fd5be.firebaseapp.com',
        databaseURL: 'https://touchlearn-fd5be-default-rtdb.firebaseio.com/',
        projectId: 'touchlearn-fd5be',
        storageBucket: 'touchlearn-fd5be.appspot.com',
        messagingSenderId: '1056913709551',
        appId: "1:1056913709551:web:894e1b7fae20a243c8be1a",
        measurementId: "G-SGPBDQD83D"
      },
      messaging: {
        publicVapidKey:
          'BEthk1-Qmoh9opZbi1AUZpxANTu6djVRDph4MLpyO2Qk6Dglm1Sa8Yt_pYi4EhYi3Tj-xgLqUktlbNuP_RP6gto',
      },
    },
    devd: {
      initConfig: {
        apiKey: 'AIzaSyCHiaVZMUd0dM8rSTJgyom6-j2wgVnIh_U',
        authDomain: 'touchlearn-fd5be.firebaseapp.com',
        databaseURL: 'https://touchlearn-fd5be-default-rtdb.firebaseio.com/',
        projectId: 'touchlearn-fd5be',
        storageBucket: 'touchlearn-fd5be.appspot.com',
        messagingSenderId: '1056913709551',
        appId: "1:1056913709551:web:894e1b7fae20a243c8be1a",
        measurementId: "G-SGPBDQD83D"
      },
      messaging: {
        publicVapidKey:
          'BEthk1-Qmoh9opZbi1AUZpxANTu6djVRDph4MLpyO2Qk6Dglm1Sa8Yt_pYi4EhYi3Tj-xgLqUktlbNuP_RP6gto',
      },
    },
    firebaseuiProps: {
      signInOptions: [
        'google.com',
        'facebook.com',
        'twitter.com',
        'github.com',
        'password',
        'phone',
      ],
    },
  },
  googleMaps: {
    apiKey: 'AIzaSyByMSTTLt1Mf_4K1J9necAbw2NPDu2WD7g',
  },
  auth: {
    grants,
    redirectTo: '/dashboard',
    persistKey: 'base-shell:auth',
    signInURL: '/signin',
    onAuthStateChanged: async (user, auth, firebaseApp) => {
      try {
        if (user != null) {
          const grantsSnap = await firebaseApp
            .database()
            .ref(`user_grants/${user.uid}`)
            .once('value')
          const notifcationsDisabledSnap = await firebaseApp
            .database()
            .ref(`disable_notifications/${user.uid}`)
            .once('value')

          const isAdminSnap = await firebaseApp
            .database()
            .ref(`admins/${user.uid}`)
            .once('value')

          firebaseApp
            .database()
            .ref(`user_grants/${user.uid}`)
            .on('value', (snap) => {
              auth.updateAuth({ grants: snap.val() })
            })

          firebaseApp
            .database()
            .ref(`disable_notifications/${user.uid}`)
            .on('value', (snap) => {
              auth.updateAuth({ notificationsDisabled: !!snap.val() })
            })

          firebaseApp
            .database()
            .ref(`admins/${user.uid}`)
            .on('value', (snap) => {
              auth.updateAuth({ isAdmin: !!snap.val() })
            })

          auth.updateAuth({
            ...defaultUserData(user),
            grants: grantsSnap.val(),
            notificationsDisabled: notifcationsDisabledSnap.val(),
            isAdmin: !!isAdminSnap.val(),
            isGranted,
          })

          firebaseApp.database().ref(`users/${user.uid}`).update({
            displayName: user.displayName,
            uid: user.uid,
            photoURL: user.photoURL,
            providers: user.providerData,
            emailVerified: user.emailVerified,
            isAnonymous: user.isAnonymous,
            notificationsDisabled: notifcationsDisabledSnap.val(),
          })

          await firebaseApp
            .database()
            .ref(`user_chats/${user.uid}/public_chat`)
            .update({
              displayName: 'Public Chat',
              lastMessage: 'Group chat',
              path: `group_chat_messages/public_chat`,
            })
        } else {
          firebaseApp.database().ref().off()
          auth.setAuth(defaultUserData(user))
        }
      } catch (error) {
        console.warn(error)
      }
    },
  },
  getDefaultRoutes,
  routes,
  locale: {
    locales,
    persistKey: 'base-shell:locale',
    defaultLocale: parseLanguages(['en', 'de', 'ru','es'], 'es'),
    onError: (e) => {
      //console.warn(e)

      return
    },
  },
  menu: {
    MenuContent: lazy(() => import('../components/Menu/MenuContent')),
    MenuHeader: lazy(() =>
      import('material-ui-shell/lib/components/MenuHeader/MenuHeader')
    ),
  },
  theme: {
    themes,
    defaultThemeID: 'default',
    defaultType: 'light',
  },
  pages: {
    LandingPage: lazy(() => import('../pages/LandingPage')),
    PageNotFound: lazy(() => import('../pages/PageNotFound')),
  },
  components: {
    Menu: lazy(() =>
      import('rmw-shell/lib/containers/FirebaseMenu/FirebaseMenu')
    ),
    Loading,
  },

  containers: {
    AppContainer: lazy(() =>
      import('material-ui-shell/lib/containers/AppContainer/AppContainer')
    ),
    LayoutContainer: lazy(() =>
      import('rmw-shell/lib/containers/LayoutContainer/LayoutContainer')
    ),
  },
}

export default config
