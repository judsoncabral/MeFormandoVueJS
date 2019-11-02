import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')
const Turma = () => import('@/views/Turma')
const Perfil = () => import('@/views/Perfil')
const Pagamentos = () => import('@/views/Pagamentos')
const Votacoes = () => import('@/views/Votacoes')
const Voto = () => import('@/views/Voto')
const Comissao = () => import('@/views/Comissao')
const Cerimonial = () => import('@/views/Cerimonial')
const Eventos = () => import('@/views/Eventos')
const EventoSelecionado = () => import('@/views/EventoSelecionado')
const AdicionarEvento = () => import('@/views/AdicionarEvento')
const EditarEvento = () => import('@/views/EditarEvento')
const EditarCerimonial = () => import('@/views/EditarCerimonial')
const EditarFormando = () => import('@/views/EditarFormando')
const AdicionarFormando = () => import('@/views/AdicionarFormando')
Vue.use(Router)

function beforeEach(to, from, next) {
  // redirect to login page if not logged in and trying to access a restricted page
  const loggedIn = localStorage.getItem('user_token');

  if (!loggedIn) {
    return next('pages/login');
  }

  next();
}

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/turma',
      beforeEnter: beforeEach,
      name: 'Home',
      component: DefaultContainer,
      children: [
       
        {
          path: 'turma',
          name: 'Turma',
          component: Turma
        },
        {
          path: 'EditarFormando',
          name: 'Editar Formando',
          component: EditarFormando
        },
        {
          path: 'AdicionarFormando',
          name: 'Adicionar Formando',
          component: AdicionarFormando
        },
        {
          path: 'cerimonial',
          name: 'Cerimonial',
          component: Cerimonial
        },
        {
          path: 'comissao',
          name: 'Comissão',
          component: Comissao
        },
        {
          path: 'voto',
          name: 'Voto',
          component: Voto
        },
        {
          path: 'eventoSelecionado',
          name: 'Evento Selecionado',
          component: EventoSelecionado
        },
        {
          path: 'AdicionarEvento',
          name: 'Adicionar Evento',
          component: AdicionarEvento
        },
        {
          path: 'EditarEvento',
          name: 'Editar Evento',
          component: EditarEvento
        },
        {
          path: 'EditarCerimonial',
          name: 'Editar Cerimonial',
          component: EditarCerimonial
        },
        {
          path: 'votacoes',
          name: 'Votações',
          component: Votacoes
        },
        {
          path: 'pagamentos',
          name: 'Pagamentos',
          component: Pagamentos
        },
        {
          path: 'perfil',
          name: 'Perfil',
          component: Perfil
        },
        {
          path: 'eventos',
          name: 'Eventos',
          component: Eventos
        },

      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})