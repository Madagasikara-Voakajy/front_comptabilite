import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TwoList from "./tables/tableTwo/TwoList";
import OneList from "./tables/tableOne/OneList";
// import SectionFormOne from "./SectionFormOne";
// import SectionForm from "./SectionFormOne";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsForm = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="TOUTES LES OPERATIONS" {...a11yProps(0)} />
          <Tab label="AUXILIAIRES" {...a11yProps(1)} />
        </Tabs>
      </Box>
      {/* <SectionFormOne /> */}
      <TabPanel value={value} index={0}>
        <TwoList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OneList />
      </TabPanel>
    </Box>
  );
};

export default TabsForm;
