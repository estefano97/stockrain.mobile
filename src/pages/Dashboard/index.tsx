import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GetDashboardItems } from "../../services/DashboardServices";
import { DashboardItems } from "../../domain/Dashboard";

const Dashboard = ({ navigation }: any) => {
  const [DashboardItems, setDashboardItems] = useState<DashboardItems[]>([]);

  useEffect(() => {
    (async () => {
      const ItemsRequest: DashboardItems[] = await GetDashboardItems();
      setDashboardItems(ItemsRequest);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Dashboasasdasdadsasdard</Text>
      <View
        style={{
          height: 300,
        }}
      >
        {DashboardItems.map((el, key) => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            key={key}
          >
            <Text>{el.id}</Text>
            <Text>{el.name}</Text>
            <Text>${el.price}</Text>
          </View>
        ))}
      </View>

      <Button
        title="Go to login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dashboard;
