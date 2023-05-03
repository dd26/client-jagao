
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
      { path: '/profile/change-role', component: () => import('pages/client/changeRole/ChangeRolePage.vue') },
      { path: '/profile/change-role/form', component: () => import('pages/client/changeRole/FormChangeRole.vue') },
      { path: '/cards/form', component: () => import('pages/client/card/Form.vue') },
      { path: '/address/form', component: () => import('pages/client/address/Form.vue') },
      { path: '/services/form', component: () => import('pages/employee/services/Form.vue') },
      { path: '/services/list/selection', component: () => import('pages/employee/services/Selection.vue') },
      { path: '/services/pending/employee', component: () => import('pages/employee/services/Pending.vue') },
      { path: '/services/pending/customer', component: () => import('pages/client/services/Pending.vue') },
      { path: '/services/working/customer', component: () => import('pages/client/services/Working.vue') },
      { path: '/services/working/employee', component: () => import('pages/employee/services/Working.vue') },
      { path: '/services/susuccessful/employee', component: () => import('pages/employee/services/Success.vue') },
      { path: '/services/susuccessful/customer', component: () => import('pages/client/services/Success.vue') },
      { path: '/services/detail/:id/customer', component: () => import('pages/client/services/Detail.vue') },
      { path: '/services/detail/:id/customer/calification', component: () => import('pages/client/services/Calification.vue') },
      { path: '/services/detail/:id/customer/deleted', component: () => import('pages/client/services/Deleted.vue') },
      { path: '/services/detail/:id/employee/calification', component: () => import('pages/employee/services/Calification.vue') },
      { path: '/services/detail/:id/employee', component: () => import('pages/employee/services/Detail.vue') },
      { path: '/services/customer/process/:category_id', component: () => import('pages/client/services/Form.vue') },
      { path: '/settings', component: () => import('pages/Setting.vue') },
      { path: '/notifications/client', component: () => import('src/pages/client/Notifications.vue') },
      { path: '/notifications/employee', component: () => import('src/pages/employee/Notifications.vue') },
      { path: '/notifications/other', component: () => import('src/pages/Notifications.vue') },
      { path: '/accounts', component: () => import('pages/account/List.vue') },
      { path: '/accounts/form', component: () => import('pages/account/Form.vue') },
      { path: '/accounts/form/:id', component: () => import('pages/account/Form.vue') },
      { path: '/search', component: () => import('pages/employee/Search.vue') },
      { path: '/help', component: () => import('pages/Help.vue') }
    ]
  },
  {
    path: '/success', component: () => import('pages/Success.vue')
  },
  {
    path: '/dynamic_success', component: () => import('pages/DynamicSuccessPage.vue')
  },
  {
    path: '/home/no-login', component: () => import('pages/no-login/Home.vue')
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
