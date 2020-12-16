import App from '../src/component/App'
import NotFound from "./page/NotFound/NotFound";
import Home from '../src/page/Home/Home'
import Archive from '../src/page/Archive/Archive'
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

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        component: App,
        routes: [
            {
                component: Home,
                path: '/',
                exact: true
            },
            {
                component: Archive,
                path: '/archive',
                exact: true
            },
            // {
            //     component: Broadcast,
            //     path: '/broadcast',
            //     exact: true
            // },
            {
                component: NotFound,
            }
        ]
    }
]