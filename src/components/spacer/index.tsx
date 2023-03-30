import { View } from "react-native";
import React from "react";

const RowSpacer = (props: { numberOfSpaces: number }) => {
  const { numberOfSpaces } = props;
  return (
    <View
      style={{
        width: numberOfSpaces * 4,
      }}
    ></View>
  );
};
const ColumnSpacer = (props: { numberOfSpaces: number }) => {
  const { numberOfSpaces } = props;
  return (
    <View
      style={{
        height: numberOfSpaces * 4,
      }}
    ></View>
  );
};

export const Spacer = {
  Row: RowSpacer,
  Column: ColumnSpacer,
};
