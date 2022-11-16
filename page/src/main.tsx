import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import { theme } from "themes";
import App from "App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
			<CssBaseline/>
		</ThemeProvider>
	</React.StrictMode>
);
