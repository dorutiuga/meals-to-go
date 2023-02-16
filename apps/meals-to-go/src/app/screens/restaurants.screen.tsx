import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import styled from '@emotion/native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top : ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props : any) => props.theme.space[3]};
`;
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props: any) => props.theme.space[3]};
  background-color: blue;
`;
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" value={""} />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfo />
    </RestaurantListContainer>
  </SafeArea>
);
