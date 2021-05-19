import {CHAT_ROUTER, LOGIN_ROUTER} from "../ulits/constant";
import Login from "./Login";
import Chat from "./Chat";

export const publicRoutes = [
    {
        path: LOGIN_ROUTER,
        Component: Login
    }
]
export const privateRoutes = [
    {
        path: CHAT_ROUTER,
        Component: Chat
    }
]