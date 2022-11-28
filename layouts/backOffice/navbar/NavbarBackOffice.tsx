import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { Badge, Stack, styled, useTheme } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { useAppSelector } from "../../../hooks/reduxHooks";
import Link from "@mui/material/Link";
import {
	OneButtonLink,
	OneButtonLinkWithItems,
	ButtonProfile,
} from "./ButtonNav";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { logout } from "../../../redux/features/auth/authSlice";
import { useRouter } from "next/router";
import { JournalTypeItem } from "../../../redux/features/journalType/journalType.interface";
import useFetchTypeJournal from "../../../components/configurations/typeJournal/hooks/useFetchTypeJournal";

const NavbarBackOffice = ({ matches }: any) => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { idfile }: any = router.query;
	const [navMenu, setNavMenu] = React.useState([]);
	const handleClickLogout = () => {
		dispatch(logout({}));
	};
	const theme = useTheme();
	/**
	 * Take all menu lists in the redux store
	 */
	const { value }: any = useAppSelector((state) => state.menu);
	const { journalTypeList } = useAppSelector((state) => state.journalType);
	const fetchJournalType = useFetchTypeJournal();

	// React.useEffect(() => {
	//   setNavMenu(value);
	// }, [value]);

	React.useEffect(() => {
		fetchJournalType();
	}, []);

	React.useEffect(() => {
		manageDisplayMenu();
	}, [router.query]);

	const manageDisplayMenu = () => {
		const pathname = router.pathname;

		if (pathname.includes("open-file")) {
			let newValue: any = [];
			value.map((val: any) => {
				let newobject = {
					id: val.id,
					name: val.name,
					link: val.link,
					icon: val.icon,
					items: [...val?.items] as any,
				};
				if (newobject.link.includes("[idfile]")) {
					newobject.link = newobject.link.replace("[idfile]", idfile);
				}

				if (newobject.items.length > 0) {
					let newItemList: any = [];
					newobject.items.map((item: any) => {
						let newitem = {
							id: item.id,
							name: item.name,
							link: item.link,
							icon: item.icon,
						};
						if (newitem.link.includes("[idfile]")) {
							newitem.link = newitem.link.replace("[idfile]", idfile);
						}
						newItemList.push(newitem);
					});
					newobject.items = newItemList;
				}

				newValue.push(newobject);
			});
			setNavMenu(newValue);
			console.log(navMenu);
			// let newValue: any = [];
			// value?.map((val: any, index: number) => {
			//   var newobject = {
			//     id: val.id,
			//     name: val.name,
			//     link: val.link,
			//     icon: val.icon,
			//     items: [...val?.items] as any,
			//   };
			//   if (val.id == 1) {
			//     if (journalTypeList.length > 0) {
			//       journalTypeList.map((jt: JournalTypeItem, index: number) => {
			//         const oneItem: any = {
			//           id: jt.id,
			//           name: jt.type,
			//           link: `${router.pathname}/journal-de-saisie?id=${jt.id}&type=${jt.type}`,
			//           icon: "",
			//         };
			//         newobject.items.unshift(oneItem);
			//       });
			//     }
			//   }
			//   newValue.push(newobject);
			// });
			// console.log("**********", newValue);
			// // console.log(journalTypeList);
			// setNavMenu(newValue);
		}
	};

	return (
		<AppbarBackOffice position="sticky" elevation={0}>
			<Container maxWidth="xl">
				<ToolbarBackOffice variant="dense">
					<ListMenuContainer>
						<Link underline="hover" color="inherit" href="/">
							<IconBntNavBO aria-label="home">
								<HomeWorkIcon fontSize="inherit" />
							</IconBntNavBO>
						</Link>
						<Typography variant="h5" paddingX={2} color="GrayText">
							Comptabilité
						</Typography>
						<ListPageContainer>
							{navMenu.map((page: any, index) =>
								page?.items?.length === 0 ? (
									<OneButtonLink page={page} key={index} />
								) : (
									<OneButtonLinkWithItems page={page} key={index} />
								)
							)}
						</ListPageContainer>
					</ListMenuContainer>
					<MenuNavbarBo>
						<Tooltip title="Pas de notification" sx={{ mx: 4 }}>
							<IconButton
								size="large"
								aria-label="show 17 new notifications"
								color="inherit"
							>
								<Badge
									badgeContent={0}
									color="error"
									sx={{
										".MuiBadge-badge": {
											top: 6,
										},
									}}
								>
									<CircleNotificationsIcon fontSize="large" />
								</Badge>
							</IconButton>
						</Tooltip>
						<ButtonProfile handleClickLogout={handleClickLogout} />
					</MenuNavbarBo>
				</ToolbarBackOffice>
			</Container>
		</AppbarBackOffice>
	);
};

export default NavbarBackOffice;

const ListPageContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
}));

const ListMenuContainer = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
}));

export const MenuNavbarBo = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
}));

export const IconBntNavBO = styled(IconButton)(({ theme }) => ({
	// backgroundColor: theme.palette.common.white,
}));

export const AppbarBackOffice = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.grey[300],
}));

export const ToolbarBackOffice = styled(Toolbar)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
}));
