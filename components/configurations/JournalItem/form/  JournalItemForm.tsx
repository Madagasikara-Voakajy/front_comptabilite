// import {
//   Button,
//   Container,
//   styled,
//   Typography,
//   Stack,
//   Divider,
// } from "@mui/material";
// import Link from "next/link";
// import React from "react";
// import ArrowBack from "@mui/icons-material/ArrowBack";
// import { Check, Close } from "@mui/icons-material";
// import { Form, Formik } from "formik";
// import * as Yup from "yup";
// import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
// import {
//   createJournalItem,
//   updateJournalItem,
//   editJournalItem,
// } from "../../../../redux/features/journalItem";
// import { cancelEdit } from "../../../../redux/features/grant/grantSlice";
// import { useRouter } from "next/router";
// import OSTextField from "../../../shared/input/OSTextField";
// import OSSelectField from "../../../shared/select/OSSelectField";
// import useFetchPostAnalytique from "../../post-analytique/hooks/useFetchPostAnalytique";
// import useFetchAuxiliaire from "../../../compte/auxiliaire/hooks/useFetchAuxiliaire";
// import useFetchCurrencyListe from "../../currency/hooks/useFetchCurrency";
// import PcgList from "../../../compte/planComptable/organism/table/PlanComptableList";
// import useFetchPlanComptable from "../../../compte/planComptable/hooks/useFetchPlanComptable";
// import useFetchJournalListe from "../../../journal/hooks/useFetchJournalListe";
// import useFetchJournalEntryListe from "../../../journalEntry/hooks/useFetchJournalListe";

// const JournalItemForm = () => {
//   const router = useRouter();
//   const { id }: any = router.query;
//   const { idfile }: any = router.query;
//   const dispatch = useAppDispatch();

//   // A MODIFIER
//   const { isEditing, journalItem } = useAppSelector(
//     (state) => state.journalItem
//   );
//   const { postAnalyticList } = useAppSelector((state) => state.postAnalytic);
//   const fetchPostAnalytique = useFetchPostAnalytique();

//   // A CORRIGER
//   const { pcgList } = useAppSelector((state) => state.pcg);
//   const fetchPcg = useFetchPlanComptable();

//   const { auxiliaryAccountList } = useAppSelector(
//     (state) => state.auxiliaryAccount
//   );
//   const fetchAuxiliaryAccount = useFetchAuxiliaire();

//   const { currencyListe } = useAppSelector((state) => state.currency);
//   const fetchCurrency = useFetchCurrencyListe();

//   const { journalEntryListe } = useAppSelector((state) => state.journalEntry);
//   const fetchJournalEntry = useFetchJournalEntryListe();

//   React.useEffect(() => {
//     if (id) {
//       dispatch(editJournalItem({ id }));
//     }
//   }, [id]);

//   React.useEffect(() => {
//     fetchAuxiliaryAccount();
//     fetchCurrency();
//     fetchJournalEntry();
//     fetchPcg();
//   }, []);

//   const handleSubmit = async (values: any) => {
//     try {
//       if (isEditing) {
//         await dispatch(
//           updateJournalItem({
//             id: journalItem.id!,
//             journalItem: values,
//           })
//         );
//       } else {
//         await dispatch(createJournalItem(values));
//       }
//       router.push(`/${idfile}/open-file/configurations/journal-item`);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return (
//     <Container maxWidth="xl" sx={{ pb: 5 }}>
//       <Formik
//         enableReinitialize
//         initialValues={{
//           chartOfAccountId: isEditing ? journalItem.chartOfAccountId : "",
//           auxiliaryAccountId: isEditing ? journalItem.auxiliaryAccountId : "",
//           currencyId: isEditing ? journalItem.currencyId : "",
//           journalEntryId: isEditing ? journalItem.journalEntryId : "",
//           label: isEditing ? journalItem.label : "",
//           debit: isEditing ? journalItem.debit : "",
//           credit: isEditing ? journalItem.credit : "",
//           checkNumber: isEditing ? journalItem.checkNumber : "",
//           refBU: isEditing ? journalItem.refBU : "",
//           refMV: isEditing ? journalItem.refMV : "",
//           refAR: isEditing ? journalItem.refAR : "",
//         }}
//         validationSchema={Yup.object({
//           chartOfAccountId: Yup.string().required("Champs obligatoire"),
//           currencyId: Yup.string().required("Champs obligatoire"),
//           journalEntryId: Yup.string().required("Champs obligatoire"),
//         })}
//         onSubmit={(value: any, action: any) => {
//           handleSubmit(value);
//           action.resetForm();
//         }}
//       >
//         {(formikProps) => {
//           return (
//             <Form>
//               <NavigationContainer>
//                 <SectionNavigation>
//                   <Stack flexDirection={"row"}>
//                     <Link
//                       href={`/${idfile}/open-file/configurations/journal-item`}
//                     >
//                       <Button
//                         color="info"
//                         variant="text"
//                         startIcon={<ArrowBack />}
//                       >
//                         Retour
//                       </Button>
//                     </Link>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       size="small"
//                       startIcon={<Check />}
//                       sx={{ marginInline: 3 }}
//                       type="submit"
//                     >
//                       Enregistrer
//                     </Button>
//                     <Button
//                       variant="text"
//                       color="warning"
//                       size="small"
//                       startIcon={<Close />}
//                       onClick={() => {
//                         formikProps.resetForm();
//                         dispatch(cancelEdit());
//                       }}
//                     >
//                       Annuler
//                     </Button>
//                   </Stack>
//                   <Typography variant="h4">
//                     {" "}
//                     Formulaire JOURNAL ITEM{" "}
//                   </Typography>
//                 </SectionNavigation>
//                 <Divider />
//               </NavigationContainer>

//               <FormContainer spacing={2}>
//                 <OSSelectField
//                   id="type"
//                   label="Chart of Account"
//                   name="chartOfAccountId"
//                   options={pcgList}
//                   dataKey={"name"} //ATTRIBUT ARY AM API
//                   valueKey="id"
//                 />
//                 <OSSelectField
//                   id="type"
//                   label="Auxiliary Account"
//                   name="auxiliaryAccountId"
//                   options={auxiliaryAccountList}
//                   dataKey={"name"}
//                   valueKey="id"
//                 />
//                 <OSTextField id="label" label="Label" name="label" />
//                 <OSTextField
//                   type="number"
//                   id="debit"
//                   label="Débit"
//                   name="debit"
//                 />
//                 <OSTextField
//                   type="number"
//                   id="credit"
//                   label="Crédit"
//                   name="credit"
//                 />
//                 <OSSelectField
//                   id="type"
//                   label="Devise"
//                   name="currencyId"
//                   options={currencyListe}
//                   dataKey={"name"}
//                   valueKey="id"
//                 />
//                 <OSTextField
//                   id="checkNumber"
//                   label="CHECK NUMBER"
//                   name="checkNumber"
//                 />
//                 <OSTextField id="refBU" label="REFBU" name="refBU" />
//                 <OSTextField id="refMV" label="REFMV" name="refMV" />
//                 <OSTextField id="refAR" label="REFAR" name="refAR" />
//                 <OSSelectField
//                   id="type"
//                   label="Journal"
//                   name="journalEntryId" //INITIAL VALUE
//                   options={journalEntryListe}
//                   dataKey={"reference"}
//                   valueKey="id"
//                 />
//               </FormContainer>
//             </Form>
//           );
//         }}
//       </Formik>
//     </Container>
//   );
// };

// export default JournalItemForm;

// export const CustomStack = styled(Stack)(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     flexWrap: "wrap",
//   },
// }));

// const FormContainer = styled(Stack)(({ theme }) => ({
//   padding: 30,
//   // border: "1px solid #E0E0E0",
//   borderRadius: 20,
//   background: "#fff",
// }));

// const NavigationContainer = styled(Stack)(({ theme }) => ({
//   flexDirection: "column",
//   marginBottom: theme.spacing(2),
//   flex: 1,
//   width: "100%",
// }));

// const SectionNavigation = styled(Stack)(({ theme }) => ({
//   flexDirection: "row",
//   justifyContent: "space-between",
//   paddingBottom: "5px",
// }));
