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
import useFetchGrants from "../../configurations/grant/hooks/useFetchGrants";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useRouter } from "next/router";
import {
  Document,
  Font,
  Page,
  PDFDownloadLink,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import useBasePath from "../../../hooks/useBasePath";
import OneRowDetailCRParNature from "./print/OneRowDetailCRParNature";
import OneRowDetailCRParFonction from "./print/OneRowDetailCRParFonction";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  table: {
    width: "100%",
    marginTop: 15,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    fontSize: 9,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    fontSize: 9,
  },
  rowBody: {
    display: "flex",
    flexDirection: "row",
    fontSize: 9,
    border: "1px solid #000",
    borderTop: "none",
  },
  header: {
    border: "1px solid #000",
    backgroundColor: "#D5D8DC",
  },
  bold: {
    fontWeight: "normal",
  },
  b: {
    border: "1px solid #000",
  },
  b_left: {
    borderLeft: "1px solid #000",
  },
  b_top: {
    borderTop: "1px solid #000",
  },
  b_right: {
    borderRight: "1px solid #000",
  },
  row_60: {
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  row_50: {
    width: "50%",
  },
  row_40: {
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  row_30: {
    width: "33%",
  },
  row_25: {
    width: "25%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  row_75: {
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  row_70: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  font_10: {
    fontSize: 10,
  },
  font_7: {
    fontSize: 7,
  },
  t_center: {
    textAlign: "center",
  },
  p_y: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  p_left: {
    paddingLeft: 10,
  },
  p_5: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  p_top_5: {
    paddingTop: 5,
  },
  p_top_10: {
    paddingTop: 10,
  },
  p_left: {
    paddingLeft: 10,
  },
  logo: {
    width: 100,
    height: 90,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 10,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const CompteResultat = () => {
  const dataParNature = [
    {
      col1: "Chiffre d'affaires",
      col2: "3,000,000.00",
      col3: "1,000,000.00",
    },
    {
      col1: "Production stockée",
      col2: "-",
      col3: "-",
    },
    {
      col1: "Production immobilisée",
      col2: "5,000,000.00",
      col3: "5,000,000.00",
    },
    {
      col1: "I- Production de l'exercice",
      col2: "3,000,000.00",
      col3: "1,000,000.00",
    },
    {
      col1: "Achats consommés",
      col2: "3,000,000.00",
      col3: "1,000,000.00",
    },
    {
      col1: "Services extérieurs et autres consommations",
      col2: "-",
      col3: "-",
    },
  ];
  const dataParFonction = [
    {
      col1: "Produit des activités ordinaires",
      col2: "-",
      col3: "-",
    },
    {
      col1: "Coût des ventes",
      col2: "-",
      col3: "-",
    },
    {
      col1: "I- MARGE BRUTE",
      col2: "5,000,000.00",
      col3: "1,000,000.00",
    },
    {
      col1: "Autres produits opérationnels",
      col2: "3,000,000.00",
      col3: "1,000,000.00",
    },
    {
      col1: "Coûts commerciaux",
      col2: "3,000,000.00",
      col3: "1,000,000.00",
    },
    {
      col1: "Charges administratives",
      col2: "-",
      col3: "-",
    },
  ];
  const FicheCRPrint = (
    <Document>
      <Page size="A4" orientation="landscape" wrap style={styles.page}>
        <View style={styles.table}>
          <View style={[styles.row, styles.bold, styles.header]}>
            <Text style={[styles.t_center, styles.row_30]}>IMAGE</Text>
            <View style={[styles.row_30]}>
              <Text style={[styles.t_center]}>
                Compte de résultat
              </Text>
            </View>
            <View style={[styles.t_center, styles.row_30]}>
              <Text style={[styles.t_center]}>CTR001</Text>
            </View>
          </View>
          <View style={[styles.row, styles.bold, styles.p_y]}>
            <View style={[styles.row_30]}>
              <Text style={styles.t_center}>Période du : 1/1/2022</Text>
              <Text style={styles.t_center}> au : 31/12/2022</Text>
            </View>
            <View style={[styles.row_30]}>
              <Text style={[styles.t_center]}>Unité monétaire : Ariary</Text>
            </View>
            <View style={[styles.row_30]}>
              <Text style={[styles.t_center]}>GRANT</Text>
            </View>
          </View>
        </View>

        <View style={styles.table}>
          <View style={[styles.row, styles.bold, styles.header, styles.p_5]}>
            <View style={styles.row_50}>
              <View style={styles.row}>
                <View style={[styles.row_50]}>
                  <Text style={styles.t_center}>PAR NATURE</Text>
                </View>
                <View style={[styles.row_50]}>
                  <View style={[styles.row, styles.b_left]}>
                    <View style={[styles.row]}>
                      <Text style={[styles.row_50, styles.t_center]}>
                        Solde 2022 (N)
                      </Text>
                    </View>
                    <View style={[styles.row]}>
                      <Text
                        style={[styles.row_50, styles.b_left, styles.t_center]}
                      >
                        Solde 2021 (N-1)
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.row_50}>
              <View style={[styles.row]}>
                <View style={[styles.row_50]}>
                  <Text style={[styles.t_center, styles.b_left]}>
                    PAR FONCTION
                  </Text>
                </View>
                <View style={styles.row_50}>
                  <View style={styles.row}>
                    <View style={styles.row_50}>
                      <Text style={[styles.t_center, styles.b_left]}>
                        Solde 2022 (N)
                      </Text>
                    </View>
                    <View style={styles.row_50}>
                      <Text style={[styles.t_center, styles.b_left]}>
                        Solde 2021 (N - 1)
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.row, styles.b]}>
          <View style={[styles.row_50, styles.t_center]}>
            {dataParNature.map(({ col1, col2, col3 }, index: any) => {
              return (
                <Fragment key={index}>
                  <OneRowDetailCRParNature
                    col1={col1}
                    col2={col2}
                    col3={col3}
                  />
                </Fragment>
              );
            })}
          </View>
          <View style={[styles.row_50, styles.t_center]}>
            {dataParFonction.map(({ col1, col2, col3 }, index: any) => {
              return (
                <Fragment key={index}>
                  <OneRowDetailCRParFonction
                    col1={col1}
                    col2={col2}
                    col3={col3}
                  />
                </Fragment>
              );
            })}
          </View>
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState("");
  const router = useRouter();
  const { idfile }: any = router.query;
  const { grantList } = useAppSelector((state) => state.grant);
  const fetchGrants = useFetchGrants();
  React.useEffect(() => {
    fetchGrants();
  }, []);

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
        <SectionNavigation direction="row" justifyContent="space-between" mb={1}>
          <Stack direction={'row'} spacing={4}>
            <Link href={`/${idfile}/open-file`}>
              <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
                Retour
              </Button>
            </Link>
            <Button color="info" variant="text" startIcon={<FileDownloadIcon />}>
              Excel
            </Button>
<<<<<<< HEAD
            <PDFDownloadLink
              document={FicheCRPrint}
              fileName={"CR" + new Date().toLocaleString() + ".pdf"}
            >
              <Button
                color="info"
                variant="text"
                startIcon={<FileDownloadIcon />}
              >
                Pdf
              </Button>
            </PDFDownloadLink>
=======
            <Button color="info" variant="text" startIcon={<FileDownloadIcon />}>
              Pdf
            </Button>
>>>>>>> develop
          </Stack>
          <Typography variant="h4">Compte de resultat</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <BodySection>
        <BodySectionHeader>
          <Grid container spacing={2} alignItems={'center'}>
            <Grid item xs={12} md={4}>
              <KeyValue keyName="Période du" value={'1/1/2022'} />
              <KeyValue keyName="au" value={'31/12/2022'} />
            </Grid>
            <Grid item xs={12} md={4}>
              <KeyValue keyName="Unité monétaire" value={'Ariary'} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <Autocomplete
                  multiple
                  id="tags-filled"
<<<<<<< HEAD
                  options={grantList.map((option) => option.code)}
                  freeSolo
                  renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                      <Chip
                        key={index}
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                      />
=======
                  options={grantList.map((option) => option.code as string)}
                  freeSolo
                  renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                      <React.Fragment key={index}>
                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                      </React.Fragment>
>>>>>>> develop
                    ))
                  }
                  renderInput={(params) => <TextField {...params} variant="filled" label="GRANT" placeholder="GRANT" />}
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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export const SectionNavigation = styled(Stack)(({}) => ({}));
export const BodySection = styled(Box)(({}) => ({
  borderRadius: 20,
  backgroundColor: 'white',
  padding: '16px 32px',
  marginBlock: 16,
}));

export const BodySectionHeader = styled(Box)(({ theme }) => ({
  marginBlock: 15,
}));

export const BodySectionTabs = styled(Box)(({ theme }) => ({}));
