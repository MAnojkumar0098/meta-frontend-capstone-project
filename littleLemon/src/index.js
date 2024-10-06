import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './messaging/Message';
import { io } from "socket.io-client";
import Messenger from './messaging/MessageComponents/messenger';
import Sidebar from './messaging/MessageComponents/sidebar';
import Group from "./messaging/MessageComponents/group";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const socket = io("http://localhost:3008");
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chat",
    element: <Message />,
  },
  {
    path: "/chat/public",
    element: <Messenger socket={socket} />,
  },
  {
    path: "/chat/personal",
    element: <Sidebar socket={socket} />,
  },
  {
    path: "/chat/group",
    element: <Group socket={socket} />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router}/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
