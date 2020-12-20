import App from '../src/component/App';
import NotFound from './page/NotFound/NotFound';
import Home from '../src/page/Home/Home';
import Archive from '../src/page/Archive/Archive';
import Setting from './page/Setting/Setting';
// import Client from '../src/page/Client'
// import Document from '../src/page/Document'
// import Employee from '../src/page/Employee'
// import Finance from '../src/page/Finance'
// import History from '../src/page/History'
// import House from '../src/page/House'
// import Panel from '../src/page/Panel'
// import Rent from '../src/page/Rent'
// import Setting from '../src/page/Setting'
// import Broadcast from '../src/page/Broadcast'

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true,
        name: 'Home'
      },
      {
        component: Setting,
        path: '/setting',
        exact: true,
        name: 'Setting'
      },
      {
        component: Archive,
        path: '/archive',
        exact: true,
        name: 'Archive'
      },

      // {
      //     component: Broadcast,
      //     path: '/broadcast',
      //     exact: true
      // },
      // {
      //   component: NotFound,
      // }
    ]
  }
];
