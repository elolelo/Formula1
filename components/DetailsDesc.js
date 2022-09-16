import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { DriverTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({ data }) => {
  const [textName, setTextName] = useState(data.name);
  const [team, setTeam] = useState(data.team);
  const [idNumber, setIdNumber] = useState(data.id);
  const [nationality, setNationality] = useState(data.id);
  const [birthDate, setBirthDate] = useState(data.birthDate);
  // const [birthPlace, setBirthPlace] = usesState(data.birthPlace);
  // const [number, setNumber] = usesState(data.number);
  // const [careerPoints, setCareerPoints] = usesState(data.careerPoints);
  
  
  
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
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Driver's details:
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
          
           {/* Id Number: {idNumber} {'\n'}Full Name: {textName} {'\n'}Team Name: {team} {'\n'}Nationality: {nationality}  {'\n'}BirthDate: {birthDate}  {'\n'} */}
           {/* Birth Place: {birthPlace} {'\n'}Number: {number} {'\n'}Career Points: {careerPoints} */}

          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
