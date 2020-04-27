import {
  Clients
} from './pages'
import InternalTemplate from './templates/Internal'

const routes = {
  clients: {
    path: "/dashboard/clients",
    component: Clients,
    isPrivate: true,
    template: InternalTemplate
  }
}

export default {
  routes,
  routesList: Object.values(routes)
}