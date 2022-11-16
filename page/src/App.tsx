import { Box, Container, Paper, Stack, Tab, TabTypeMap, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

type TabName = "report" | "radar" | "SUS";

const Report = () => {
	return (
		<Box sx={{ height: "100%", width: "100%" }}>
			<Typography variant="h1">Report</Typography>
		</Box>
	);
};

const radarData: any[] = [
	{ rule: "Consistency", yt: 10, sp: 10, fullMark: 10},
	{ rule: "Universal", yt: 1, sp: 7, fullMark: 10},
	{ rule: "Informative", yt: 10, sp: 10, fullMark: 10},
	{ rule: "Closure", yt: 5, sp: 10, fullMark: 10},
	{ rule: "Error Prevention", yt: 10, sp: 10, fullMark: 10},
	{ rule: "Action reversal", yt: 8, sp: 3, fullMark: 10},
	{ rule: "Control", yt: 8, sp: 8, fullMark: 10},
	{ rule: "Memory", yt: 10, sp: 10, fullMark: 10},
];

const RadarTab = () => {
	return (
		<Paper sx={{ height: "100%", width: "100%", p: 10 }}>
			<RadarChart
				width={500}
				height={500}
				data={radarData}
			>
				<PolarGrid/>
				<PolarAngleAxis dataKey="rule"/>
				<PolarRadiusAxis angle={45} domain={[0, 10]}/>
				<Radar name="Youtube Music" dataKey="yt" stroke="#FF0000" fill="#FF0000" fillOpacity={0.3}/>
				<Radar name="Spotify" dataKey="sp" stroke="#1DB954" fill="#1DB954" fillOpacity={0.3}/>
				<Legend/>
			</RadarChart>
		</Paper>
	);
};

const tableRows = [
];

const SUSTab = () => {
	return (
		<Paper sx={{p: 2}}>
			A
		</Paper>
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
				<TabPanel value="radar"><RadarTab/></TabPanel>
				<TabPanel value="SUS"><SUSTab/></TabPanel>
			</TabContext>
		</Container>
	);
};

export default App;
