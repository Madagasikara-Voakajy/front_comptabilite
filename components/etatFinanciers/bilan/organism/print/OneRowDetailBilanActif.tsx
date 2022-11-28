import { StyleSheet, View, Text } from "@react-pdf/renderer";
import React from "react";

const OneRowDetailBilanActif = ({
  col1,
  col2,
  col3,
  col4,
  col5,
  isTitle,
}: any) => {
  const styles = StyleSheet.create({
    bgColor: {
      backgroundColor: isTitle ? "#D5D8DC" : "#fff",
      textAlign: isTitle ? "center" : "left",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      fontSize: 11,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    row_50: {
      width: "50%",
    },
    row_25: {
      width: "25%",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    font_10: {
      fontSize: 10,
    },
    font_8: {
      fontSize: 8,
    },
    b: {
      border: "1px solid #000",
    },
    b_left: {
      borderLeft: "1px solid #000",
    },
    t_center: {
      textAlign: "center",
    },
    t_left: {
      textAlign: "left",
    },
    p_y: {
      paddingTop: 10,
      paddingBottom: 10,
    },
  });
  return (
    <View style={styles.row}>
      <View style={[styles.row_50, styles.bgColor, styles.p_y]}>
        <Text style={styles.font_8}>{col1}</Text>
      </View>
      <View style={styles.row_50}>
        <View style={styles.row}>
          <View style={[styles.row]}>
            <Text style={[styles.font_8, styles.row_25]}>{col2}</Text>
            <Text style={[styles.font_8, styles.row_25]}>{col3}</Text>
            <Text style={[styles.font_8, styles.row_25]}>{col4}</Text>
            <Text style={[styles.font_8, styles.row_25]}>{col5}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OneRowDetailBilanActif;
