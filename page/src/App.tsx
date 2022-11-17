import { Box, Container, Link, Paper, Stack, Tab, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

type TabName = "report" | "radar" | "SUS";

type ReportSection = { header: string; body: string };

const reportSections: ReportSection[] = [
	{
		header: "Strive for consistency",
		body: "Both sites are well designed in this regard. "
			+ "Youtube Music follows Material Design, the same design guideline that is used by all of Google's products. "
			+ "And Spotify also has its own consistent style across its entire web player."
	},
	{
		header: "Seek universality",
		body: "When it comes to universality, Spotify takes the lead. "
			+ "On spotify's web app, you can tab through all the elements "
			+ "in the same order as they are rendered. "
			+ "Meanwhile Youtube Music can't be reliably tabbed trough, "
			+ "sometimes even skipping some elements that you would expect to be focused on next."
	},
	{
		header: "Offer informative feedback",
		body: "Both sites are half decent in this regard. "
			+ "They both show extra information when the user hovers over an element. "
			+ "And they both also use snackbar messages about the actions that the user has taken, however, they aren't shown on all actions. "
			+ "For example, Spotify only shows a snackbar upon the adition of a song to a playlist, but not its removal. "
			+ "Meanwhile YouTube does the opposite, showing a snackbar when a song is removed from a playlist, but not when it is added."
	},
	{
		header: "Design dialogs to yield closure",
		body: "The only dialog that both sites have is used for payment. "
			+ "And both sites do a good job at it. "
			+ "They both start with a clear message about what the user is about to pay for, and they both give the user options on how to pay for it. "
			+ "Showing more elements as the user progresses trough the dialog. "
			+ "Finally, both sites also show a summary of the payment before the user confirms it."
			+ "Finishing with a clear message about what the user has just paid for."
	},
	{
		header: "Prevent errors",
		body: "Both sites are fairly good at preventing errors, as they both use confirmation modals for destructive actions. "
			+ "and in the case of Youtube Music, when it doesn't show a confirmation modal, it shows a snackbar with an undo button."

	},
	{
		header: "Permit easy reversal of actions",
		body: "When it comes to action reversal, Youtube Music is much better than Spotify, "
			+ "as it allows the user to undo the removal of a song from a playlist. "
			+ "While Spotify doesn't have that at all. "
			+ "But even then, neither let you undo the deletion of a playlist, so both sides also have some room for improvement."

	},
	{
		header: "Keep users in control",
		body: "While both sites don't have a propper settings page, "
			+ "they do have a player widget at the bottom of the screen that can be used to control the player. "
	},
	{
		header: "Reduce short-term memory load",
		body: "Both sites are fairly good in this regard. "
			+ "Upon opening either site, the last song you were listening to is displayed on the playback controlelr at the bottom. "
			+ "This is a good way to remind the user of what they were listening to, and also allows them to quickly resume playback. "
			+ "And in adition, the landing sites of both of these web aps show you the most recently played songs, artists, and albums."
	},
];

const Report = () => {
	return (
		<Paper sx={{ height: "100%", width: "100%", p: 4 }}>
			<Typography paragraph>
				In this analysis, we will study two big websites used for streaming music:
			</Typography>
			<ul>
				<li><Link variant="body1" component="a" href="https://music.youtube.com">Youtube Music</Link></li>
				<li><Link variant="body1" component="a" href="https://open.spotify.com">Spotify</Link></li>
			</ul>
			{reportSections.map(({ header, body }) => (
				<>
					<Typography variant="h4" sx={{ mt: 3 }}>{header}</Typography>
					<Typography>{body}</Typography>
				</>
			))}
		</Paper>
	);
};

type RadarData = { rule: string; yt: number; sp: number, fullMark: number };

const radarData: RadarData[] = [
	{ rule: "Consistency", yt: 10, sp: 9, fullMark: 10 },
	{ rule: "Universal", yt: 1, sp: 6, fullMark: 10 },
	{ rule: "Informative", yt: 6, sp: 5, fullMark: 10 },
	{ rule: "Closure", yt: 8, sp: 7, fullMark: 10 },
	{ rule: "Error Prevention", yt: 9, sp: 8, fullMark: 10 },
	{ rule: "Action reversal", yt: 8, sp: 3, fullMark: 10 },
	{ rule: "Control", yt: 8, sp: 8, fullMark: 10 },
	{ rule: "Memory", yt: 9, sp: 9, fullMark: 11 },
];

const RadarTab = () => {
	return (
		<Paper sx={{ height: "100%", width: "100%", p: 10 }}>
			<RadarChart
				width={600}
				height={380}
				data={radarData}
			>
				<PolarGrid />
				<PolarAngleAxis dataKey="rule" />
				<PolarRadiusAxis angle={45} domain={[0, 10]} />
				<Radar name="Youtube Music" dataKey="yt" stroke="#FF0000" fill="#FF0000" fillOpacity={0.3} />
				<Radar name="Spotify" dataKey="sp" stroke="#1DB954" fill="#1DB954" fillOpacity={0.3} />
				<Legend />
			</RadarChart>
		</Paper>
	);
};

type TableRow = { aspect: string; score: number; };

const row = (aspect: string, score: number): TableRow => ({ aspect, score });

const tableRows = [
	row("I think that I would like to use this system frequently", 5),
	row("I found the system unnecessarily complex", 2),
	row("I thought the system was easy to use", 5),
	row("I think that I would need the support of a technical person to be able to use this system", 1),
	row("I found the various functions in this system were well integrated", 4),
	row("I thought there was too much inconsistency in this system", 2),
	row("I would imagine that most people would learn to use this system very quickly", 3),
	row("I found the system very cumbersome to use", 2),
	row("I felt very confident using the system", 5),
	row("I needed to learn a lot of things before I could get going with this system", 1),
];
const SUSScore = tableRows.reduce((acc, { score }, i) => acc + (i % 2 == 0 ? score - 1 : 5 - score), 0) * 2.5;

const SUSTab = () => {
	return (
		<Paper sx={{ p: 2 }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell><Typography variant="h6">Youtube Music</Typography></TableCell>
						<TableCell>Score</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tableRows.map(({ aspect, score }) => (
						<TableRow key={aspect}>
							<TableCell>{aspect}</TableCell>
							<TableCell>{score}</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell><Typography variant="h6">SUS Score</Typography></TableCell>
						<TableCell><Typography variant="h6">{SUSScore}</Typography></TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</Paper>
	);
};

const App = () => {
	const [openTab, setOpenTab] = useState<TabName>("report");
	const setTab = (e: React.SyntheticEvent, newValue: string) => setOpenTab(newValue as TabName);

	return (
		<Container sx={{ mt: 20 }}>
			<Stack sx={{ mb: 10 }} direction="row" alignItems="center" justifyContent="center" gap={5}>
				<Typography
					variant="h2"
					component="a"
					sx={{ textDecoration: "none", color: "inherit" }}
					href="https://music.youtube.com"
				>
					Youtube Music
				</Typography>
				<Typography variant="h4">vs</Typography>
				<Typography
					variant="h2"
					component="a"
					sx={{ textDecoration: "none", color: "inherit" }}
					href="https://open.spotify.com"
				>
					Spotify
				</Typography>
			</Stack>
			<TabContext value={openTab}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList onChange={setTab}>
						<Tab label="Report" value="report" />
						<Tab label="Radar" value="radar" />
						<Tab label="SUS" value="SUS" />
					</TabList>
				</Box>
				<TabPanel value="report"><Report /></TabPanel>
				<TabPanel value="radar"><RadarTab /></TabPanel>
				<TabPanel value="SUS"><SUSTab /></TabPanel>
			</TabContext>
		</Container>
	);
};

export default App;
