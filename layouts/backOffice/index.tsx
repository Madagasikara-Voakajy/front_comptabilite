import { Container, Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import FooterBackOffice from "./FooterBackOffice";
import NavbarBackOffice from "./navbar/NavbarBackOffice";
import NavbarMobile from "./navbar/NavbarMobile";
import MvBreadcrumbs from "./Breadcrumbs";
import RequireAuth from "../../redux/features/auth/RequireAuth";

const BackOfficeLayout = ({ children }: any) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<RequireAuth>
			<Box>
				{matches ? (
					<NavbarMobile matches={matches} />
				) : (
					<NavbarBackOffice matches={matches} />
				)}
				<MvBreadcrumbs />
				<Container maxWidth="xl">
					<Box minHeight={"82vh"}>{children}</Box>
				</Container>
				<FooterBackOffice />
			</Box>
		</RequireAuth>
	);
};

export default BackOfficeLayout;
