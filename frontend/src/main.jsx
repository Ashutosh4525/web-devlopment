import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';


ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ChakraProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </ChakraProvider>
</React.StrictMode>,
);