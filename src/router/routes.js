
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
      { path: '/profile/client', component: () => import('pages/client/Profile.vue') },
      { path: '/profile/employee', component: () => import('pages/employee/Profile.vue') },
      { path: '/cards/form', component: () => import('pages/client/card/Form.vue') },
      { path: '/address/form', component: () => import('pages/client/address/Form.vue') },
      { path: '/services/form', component: () => import('pages/employee/services/Form.vue') },
      { path: '/settings', component: () => import('pages/Setting.vue') },
      { path: '/notifications/employee', component: () => import('pages/employee/Notifications.vue') }
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
