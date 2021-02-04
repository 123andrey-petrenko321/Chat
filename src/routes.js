import ChatPage from "./Components/ChatPage";
import Login from "./Components/Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/constants";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: ChatPage,
  },
];
