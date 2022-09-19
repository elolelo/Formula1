import  React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { SubInfo, DetailsDesc, FocusedStatusBar,CircleButton } from "../components";



const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={{uri: data.image}}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
    {/* wanted to use async storage to persisist favorite data but it's deprecated https://reactnative.dev/docs/asyncstorage.html */}
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#808080",
          zIndex: 1,
        }}
      >
        <Text minWidth={170} fontSize={SIZES.small} {...SHADOWS.dark}>Formula 1 App</Text>
      </View>

      <FlatList
        data={data.teams}
        keyExtractor={(item) => item.team.id + item.team.season}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
            </View>
          </React.Fragment>
        )}
      />
     
    </SafeAreaView>
  );
};

export default Details;
