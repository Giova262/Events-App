
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'evento/crear', component: () => import('src/pages/ABMEventoCrear.vue') },
      { path: 'evento/modificar', component: () => import('pages/ABMEventoModificar.vue') },
      { path: 'evento/eliminar', component: () => import('pages/ABMEventoEliminar.vue') },
      { path: 'evento/ver', component: () => import('pages/VerEventos.vue') },
      { path: 'etiqueta', component: () => import('pages/ABMEtiqueta.vue') },
      { path: 'persona', component: () => import('pages/ABMPersona.vue') },
      { path: 'multimedia', component: () => import('pages/ABMMultimedia.vue') },
      { path: 'tiempo', component: () => import('pages/ABMTiempo.vue') },
      { path: 'ubicacion', component: () => import('pages/ABMUbicacion.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
