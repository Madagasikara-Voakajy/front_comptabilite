import {
  Button,
  Grid,
  Stack,
  Divider,
  Typography,
  styled,
  Box,
} from "@mui/material";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Link from "next/link";
import React from "react";
import KeyValue from "../../shared/keyValue";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Actif from "./organism/actif/Actif";
import Passif from "./organism/passif/Passif";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const EtatFinancier = () => {
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState("");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Container maxWidth="xl">
      <Stack>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={1}
        >
          <Stack direction={"row"} spacing={4}>
            <Link href="/">
              <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
                Retour
              </Button>
            </Link>
            <Button
              color="info"
              variant="text"
              startIcon={<FileDownloadIcon />}
            >
              Excel
            </Button>
            <Button
              color="info"
              variant="text"
              startIcon={<FileDownloadIcon />}
            >
              Pdf
            </Button>
          </Stack>
          <Typography variant="h4">Bilan</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <BodySection>
        <BodySectionHeader>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={12} md={4}>
              <KeyValue keyName="Exercice close le" value={"31/12/2022"} />
            </Grid>
            <Grid item xs={12} md={4}>
              <KeyValue keyName="Unité monétaire" value={"Ariary"} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">GRANT</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="GRANT"
                  onChange={handleChangeSelect}
                >
                  <MenuItem value={10}>GRANT</MenuItem>
                  <MenuItem value={20}>GRANT</MenuItem>
                  <MenuItem value={30}>GRANT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </BodySectionHeader>
        <BodySectionTabs>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            centered
            sx={{ mb: 2 }}
          >
            <Tab label="ACTIF" {...a11yProps(0)} />
            <Tab label="PASSIF" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Actif />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Passif />
          </TabPanel>
        </BodySectionTabs>
      </BodySection>
    </Container>
  );
};

export default EtatFinancier;

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const SectionNavigation = styled(Stack)(({}) => ({}));
export const BodySection = styled(Box)(({}) => ({
  borderRadius: 20,
  backgroundColor: "white",
  padding: "16px 32px",
  marginBlock: 16,
}));

export const BodySectionHeader = styled(Box)(({ theme }) => ({
  marginBlock: 15,
}));

export const BodySectionTabs = styled(Box)(({ theme }) => ({}));
