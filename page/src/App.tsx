import { Box, Container, Stack, Tab, TabTypeMap, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";

type TabName = "report" | "radar" | "SUS";

const Report = () => {
	return (
		<Box sx={{ height: "100%", width: "100%" }}>
			<Typography variant="h1">Report</Typography>
		</Box>
	);
};

const Radar = () => {
	return (
		<Box sx={{ height: "100%", width: "100%" }}>
			<Typography variant="h1">Radar</Typography>
		</Box>
	);
};

const SUS = () => {
	return (
		<Box sx={{ height: "100%", width: "100%" }}>
			<Typography variant="h1">SUS</Typography>
		</Box>
	);
};

const App = () => {
	const [openTab, setOpenTab] = useState<TabName>("report");
	const setTab = (e: React.SyntheticEvent, newValue: string) => setOpenTab(newValue as TabName);

	return (
		<Container sx={{mt: 20}}>
			<Stack sx={{mb: 10}} direction="row" alignItems="center" justifyContent="center" gap={5}>
				<Typography
					variant="h2"
					component="a"
					sx={{textDecoration: "none", color: "inherit"}}
					href="https://music.youtube.com"
				>
					Youtube Music
				</Typography>
				<Typography variant="h4">vs</Typography>
				<Typography
					variant="h2"
					component="a"
					sx={{textDecoration: "none", color: "inherit"}}
					href="https://open.spotify.com"
				>
					Spotify
				</Typography>
			</Stack>
			<TabContext value={openTab}>
				<Box sx={{borderBottom: 1, borderColor: "divider"}}>
					<TabList onChange={setTab}>
						<Tab label="Report" value="report"/>
						<Tab label="Radar" value="radar"/>
						<Tab label="SUS" value="SUS"/>
					</TabList>
				</Box>
				<TabPanel value="report"><Report/></TabPanel>
				<TabPanel value="radar"><Radar/></TabPanel>
				<TabPanel value="SUS"><SUS/></TabPanel>
			</TabContext>
		</Container>
	);
};

export default App;
