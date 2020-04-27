import {
  Clients,
  Routers
} from './pages'
import InternalTemplate from './templates/Internal'

const routes = {
  clients: {
    path: "/dashboard/clients",
    component: Clients,
    isPrivate: true,
    template: InternalTemplate
  },
  routers: {
    path: "/dashboard/routers",
    component: Routers,
    isPrivate: true,
    template: InternalTemplate
  },
}

export default {
  routes,
  routesList: Object.values(routes)
}