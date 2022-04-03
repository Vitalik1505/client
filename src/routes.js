import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Main from "./pages/Main"
import Service from "./pages/Service"
import AboutAuthor from "./pages/AboutAuthor"
import ServicePage from "./pages/ServicePage"
import { ADMIN_ROUTE, REGISTRATION_ROUTE, SERVICE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, ABOUTAUTHOR_ROUTE, SERVICEPAGE_ROUTE  } from "./utils/consts"

export const authRoutes = [
    {
        path:  ADMIN_ROUTE,
        Component: Admin
    }
]
export const publicRoutes = [
    {
        path: SERVICE_ROUTE,
        Component: Service
    },

    {
        path:  REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path:   LOGIN_ROUTE,
        Component: Auth
    },
    {
        path:   ABOUTAUTHOR_ROUTE,
        Component: AboutAuthor
    },
    {
        path:   SERVICEPAGE_ROUTE + '/:id',
        Component: ServicePage
    },
    {
        path:   MAIN_ROUTE,
        Component: Main
    }
]