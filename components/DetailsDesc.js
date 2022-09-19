import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { DriverTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({ data }) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DriverTitle
         title={data.name}
          subTitle={data.team}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 0.9 }}>
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: FONTS.semiBold,
            color: COLORS.red,
          }}
        >
          🏎️ 🏎️  Driver's details:
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.large,
              fontFamily: FONTS.semiBold,
              lineHeight: SIZES.large,
             
            }}
          >
          
          {'\n'}{'\n'}ID Number: {data.id} {'\n'}{'\n'}Full Name: {data.name} {'\n'}{'\n'}Recent Team Name: {data.teams[0].team.name} {'\n'}{'\n'}Nationality: {data.nationality} {'\n'}{'\n'}BirthDate: {data.birthdate}  {'\n'}{'\n'}
           Birth Place: {data.birthplace} {'\n'}{'\n'}Number: {data.number} {'\n'}{'\n'}Career Points: {data.career_points}

          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
