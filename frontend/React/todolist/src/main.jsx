import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import App from "./App.jsx"
import "./index.css"

import theme1 from "./themes/theme1.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme1}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
