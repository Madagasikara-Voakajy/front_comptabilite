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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { createData } from "./table/tableauVariationCapitauxPropres.function";
import { columns } from "./table/tableauVariationCapitauxPropres.constant";
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
import OneRowDetailTVCP from "./print/OneRowDetailTVCP";

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
  row_50: {
    width: "50%",
  },
  row_40: {
    width: "40%",
  },
  row_60: {
    width: "60%",
  },
  row_30: {
    width: "33%",
  },
  row_25: {
    width: "25%",
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

const TableauVariationCapitauxPropres = () => {
  const dataTFT = [
    {
      col1: "Chiffre d'affaires",
      col2: "3,000,000.00",
      col3: "1,000,000.00",
      col4: "-",
      col5: "-",
      col6: "-",
    },
    {
      col1: "Production stockée",
      col2: "-",
      col3: "-",
      col4: "-",
      col5: "-",
      col6: "-",
    },
    {
      col1: "Production immobilisée",
      col2: "5,000,000.00",
      col3: "5,000,000.00",
      col4: "-",
      col5: "-",
      col6: "-",
    },
    {
      col1: "I- Production de l'exercice",
      col2: "3,000,000.00",
      col3: "1,000,000.00",
      col4: "-",
      col5: "-",
      col6: "-",
    },
    {
      col1: "Achats consommés",
      col2: "3,000,000.00",
      col3: "1,000,000.00",
      col4: "-",
      col5: "-",
      col6: "-",
    },
    {
      col1: "Services extérieurs et autres consommations",
      col2: "-",
      col3: "-",
      col4: "-",
      col5: "-",
      col6: "-",
    },
  ];
  const FicheTVCPPrint = (
    <Document>
      <Page size="A4" orientation="landscape" wrap style={styles.page}>
        <View style={styles.table}>
          <View style={[styles.row, styles.bold, styles.header]}>
            <Text style={[styles.t_center, styles.row_30]}>IMAGE</Text>
            <View style={[styles.row_30]}>
              <Text style={[styles.t_center]}>
                Tableau de variation des capitaux propres
              </Text>
            </View>
            <View style={[styles.t_center, styles.row_30]}>
              <Text style={[styles.t_center]}>TVCP001</Text>
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
            <View style={styles.row}>
              <View style={[styles.row_40]}>
                <Text style={styles.t_center}>TITRE</Text>
              </View>
              <View style={[styles.row_60]}>
                <View style={[styles.row, styles.b_left]}>
                  <Text style={[styles.row_25, styles.t_center]}>
                    Capital social
                  </Text>
                  <Text style={[styles.row_25, styles.b_left, styles.t_center]}>
                    Primes & réserves
                  </Text>
                  <Text style={[styles.row_25, styles.b_left, styles.t_center]}>
                    Ecart d’évaluation
                  </Text>
                  <Text style={[styles.row_25, styles.b_left, styles.t_center]}>
                    Résultat & R N
                  </Text>
                  <Text style={[styles.row_25, styles.b_left, styles.t_center]}>
                    Total
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.b]}>
          {dataTFT.map(({ col1, col2, col3, col4, col5, col6 }, index: any) => {
            return (
              <Fragment key={index}>
                <OneRowDetailTVCP
                  col1={col1}
                  col2={col2}
                  col3={col3}
                  col4={col4}
                  col5={col5}
                  col6={col6}
                />
              </Fragment>
            );
          })}
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
  const router = useRouter();
  const { idfile }: any = router.query;
  const rows = [
    createData("Solde au 31 décembre N-2", "-", "-", "-", "-", "-"),
  ];
  const { grantList } = useAppSelector((state) => state.grant);
  const fetchGrants = useFetchGrants();
  React.useEffect(() => {
    fetchGrants();
  }, []);
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];
  const rowsTwo = [
    createData("Changement de méthode comptable", "-", "-", "-", "-", "-"),
    createData("Correction d'erreurs", "-", "-", "-", "-", "-"),
    createData("Autres produits & charges", "-", "-", "-", "-", "-"),
    createData("Affectation du résultat N-2", "-", "-", "-", "-", "-"),
    createData(
      "Opérations en capital",
      "60,000,000.00",
      "-",
      "-",
      "-",
      "60,000,000.00"
    ),
    createData(
      "Résultat net exercice N-1",
      "-",
      "-",
      "-",
      "1,000,000.00",
      "1,000,000.00"
    ),
    createData(
      "Solde au 31 décembre N-2",
      "60,000,000.00",
      "-",
      "-",
      "-",
      "1,000,000.00"
    ),
  ];

  const rowsThree = [
    createData("Changement de méthode comptable", "-", "-", "-", "-", "-"),
    createData("Correction d'erreurs", "-", "-", "-", "-", "-"),
    createData("Autres produits & charges", "-", "-", "-", "-", "-"),
    createData(
      "Affectation du résultat N-1",
      "-",
      "1,000,000.00",
      "-",
      "(1,000,000.00)",
      "-"
    ),
    createData("Opérations en capital", "-", "-", "-", "-", "-"),
    createData(
      "Résultat net exercice N",
      "-",
      "-",
      "-",
      "(2,000,000.00)",
      "(2,000,000.00)"
    ),
    createData(
      "Solde au 31 décembre N",
      "60,000,000.00",
      "1,000,000.00",
      "-",
      "(2,000,000.00)",
      "59,000,000.00"
    ),
  ];

  const [age, setAge] = React.useState("");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
            <PDFDownloadLink
              document={FicheTVCPPrint}
              fileName={"TVCP" + new Date().toLocaleString() + ".pdf"}
            >
              <Button
                color="info"
                variant="text"
                startIcon={<FileDownloadIcon />}
              >
                Pdf
              </Button>
            </PDFDownloadLink>
          </Stack>
          <Typography variant="h4">Tableau de flux de trésorerie</Typography>
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
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 57, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={6}> </TableCell>
                </TableRow>
                {rows.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.identifiant}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={6}> </TableCell>
                </TableRow>
                {rowsTwo.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.identifiant}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={6}> </TableCell>
                </TableRow>
                {rowsThree.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.identifiant}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </BodySectionTabs>
      </BodySection>
    </Container>
  );
};
export default TableauVariationCapitauxPropres;

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
