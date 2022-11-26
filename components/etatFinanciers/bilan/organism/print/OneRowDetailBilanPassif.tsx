import { StyleSheet, View, Text } from "@react-pdf/renderer";
import React from "react";

const OneRowDetailBilanPassif = ({ col1, col2, col3, isTitle }: any) => {
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
      justifyContent: "center",
    },
    row_50: {
      width: "50%",
    },
    b: {
      border: "1px solid #000",
    },
    b_left: {
      borderLeft: "1px solid #000",
    },
    b_right: {
      borderRight: "1px solid #000",
    },
    font_10: {
      fontSize: 10,
    },
    font_8: {
      fontSize: 8,
    },
    t_center: {
      textAlign: "center",
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
          <View style={[styles.font_10, styles.row_50]}>
            <Text style={[styles.t_center, styles.font_8]}>{col2}</Text>
          </View>
          <View style={[styles.font_10, styles.row_50]}>
            <Text style={[styles.t_center, styles.font_8]}>{col3}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OneRowDetailBilanPassif;
