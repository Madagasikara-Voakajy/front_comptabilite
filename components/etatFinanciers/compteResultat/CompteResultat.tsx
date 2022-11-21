import React, { Fragment } from "react";
import {
  Button,
  Grid,
  Stack,
  Divider,
  Typography,
  styled,
  Autocomplete,
  TextField,
  Box,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Link from "next/link";
import KeyValue from "../../shared/keyValue";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Nature from "./organism/nature/Nature";
import Fonction from "./organism/fonction/Fonction";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/router";

const CompteResultat = () => {
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState("");
  const router = useRouter();
  const { idfile }: any = router.query;
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];

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
            <Link href={`/${idfile}/open-file`}>
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
          <Typography variant="h4">Compte de resultat</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <BodySection>
        <BodySectionHeader>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={12} md={4}>
              <KeyValue keyName="Période du" value={"1/1/2022"} />
              <KeyValue keyName="au" value={"31/12/2022"} />
            </Grid>
            <Grid item xs={12} md={4}>
              <KeyValue keyName="Unité monétaire" value={"Ariary"} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <Autocomplete
                  multiple
                  id="tags-filled"
                  options={top100Films.map((option) => option.title)}
                  freeSolo
                  renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                      <Fragment key={index}>
                        <Chip
                          variant="outlined"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      </Fragment>
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="filled"
                      label="GRANT"
                      placeholder="GRANT"
                    />
                  )}
                />
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
            <Tab label="(PAR NATURE)" {...a11yProps(0)} />
            <Tab label="(PAR FONCTION)" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Nature />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Fonction />
          </TabPanel>
        </BodySectionTabs>
      </BodySection>
    </Container>
  );
};

export default CompteResultat;

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
