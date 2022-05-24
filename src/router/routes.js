
const routes = [
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/register',
    component: () => import('pages/Register.vue')
  },
  {
    path: '/reset-password',
    component: () => import('pages/ResetPassword.vue')
  },
  {
    path: '/',
    component: () => import('pages/Splash.vue')
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/home/employee', component: () => import('pages/employee/Index.vue') },
      { path: '/profile/client', component: () => import('pages/client/Profile.vue') },
      { path: '/profile/employee', component: () => import('pages/employee/Profile.vue') },
      { path: '/profile/other', component: () => import('pages/Profile.vue') },
      { path: '/profile/info', component: () => import('pages/profile/Info.vue') },
      { path: '/profile/info/:id', component: () => import('pages/profile/Form.vue') },
      { path: '/cards/form', component: () => import('pages/client/card/Form.vue') },
      { path: '/address/form', component: () => import('pages/client/address/Form.vue') },
      { path: '/services/form', component: () => import('pages/employee/services/Form.vue') },
      { path: '/services/list/selection', component: () => import('pages/employee/services/Selection.vue') },
      { path: '/services/pending', component: () => import('pages/employee/services/Pending.vue') },
      { path: '/services/susuccessful', component: () => import('pages/employee/services/Success.vue') },
      { path: '/services/detail', component: () => import('pages/employee/services/Detail.vue') },
      { path: '/settings', component: () => import('pages/Setting.vue') },
      { path: '/notifications/client', component: () => import('src/pages/client/Notifications.vue') },
      { path: '/notifications/employee', component: () => import('src/pages/employee/Notifications.vue') },
      { path: '/notifications/other', component: () => import('src/pages/Notifications.vue') },
      { path: '/accounts', component: () => import('pages/account/List.vue') },
      { path: '/accounts/form', component: () => import('pages/account/Form.vue') },
      { path: '/search', component: () => import('pages/employee/Search.vue') }
    ]
  },
  {
    path: '/success', component: () => import('pages/Success.vue')
  },
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '*',
    redirect: '/login'
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
