import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";
import { SubInfo, DriverTitle } from "./SubInfo";
import { RectButton } from "./Button";


const DriverCard = ({ data }) => {
  const navigation = useNavigation();

  const [teamName, setTeamName] = useState('');

  // useEffect(() => {
  //   console.log("TEAM NAME", data.teams.filter((team) => team.season === 2022));
    
  //   let filteredTeam  = data.teams.filter((team) => team.season === 2022);
  //   if(filteredTeam.length > 0){
  //     setTeamName(filteredTeam[0].team.name);
  //   }
  // }, []);

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={{uri: data.image}}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <DriverTitle
          title={data.name}
          subTitle={data.birthday}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <DriverTitle
          title={teamName}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default DriverCard;
