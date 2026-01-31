// Importing Material UI Components

import { Box } from "@mui/material";

// Importing Custom Components

import Navigation from "./components/Navigation"

function App() 
{
  return (
    <Box
      sx = 
      {{
        minHeight: "100vh"
      }}
    >
      <Navigation />
    </Box>
  )
}

export default App
