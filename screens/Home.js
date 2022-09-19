import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { DriverCard, HomeHeader } from "../components";
import { COLORS } from "../constants";
import { fetchDrivers, searchDrivers } from '../services/drivers'

let numColumns = 2

const Home = () => {
  const [driversData, setDriversData] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let drivers = []

  const getDrivers =  () => {
    setIsLoading(true);
    fetchDrivers().then(async (response) => {
      console.log(response);

      const allData = response.response

      await allData.map((data) => {
        const { driver } = data
        drivers.push(driver)
      })

      await setDriversData(drivers);
      setIsLoading(false);
      
    }).catch((err) => {
      console.log('ERROR GETTING DRIVERS', err);
      setIsLoading(false);
    });
  };

  const onSearchDrivers = (searchTerm) => {
    setIsLoading(true);

    if (searchTerm.length === 0) {
      getDrivers();
    } else {
      searchDrivers(searchTerm).then((response) => {
        console.log("RESULT", response.response);

        const filteredData = response.response.filter((item) =>
        //  item.driver.name.toLowerCase().includes(searchTerm.toLowerCase())
         item.driver.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredData.length === 0) {

        } else {
          setDriversData(filteredData);
        }

        setIsLoading(false);
      }).catch((err) => {
        console.log('ERROR FNIDING DRIVERS', err);
        setIsLoading(false);
      });
    }
  };


  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <View>
      <View >
        <FlatList
          data={driversData}
          renderItem={({ item }) => <DriverCard data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader onSearch={onSearchDrivers} />}
          numColumns={numColumns}
        />

      </View>

      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1
        }}
      >
        <View style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View style={{ flex: 1, backgroundColor: COLORS.secondary }} />
     
      </View>

    </View>

  );
};

export default Home;
