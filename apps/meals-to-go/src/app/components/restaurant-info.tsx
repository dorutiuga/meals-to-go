import React from "react";
import { Card } from "react-native-paper";
import styled from '@emotion/native'

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props:any) => props.theme.space[3]};
  background-color: white;
`;
const Title = styled.Text`
  color: ${(props: any) => props.theme.colors.ui.primary};
  padding: ${(props: any) => props.theme.space[3]};
  font-family: ${(props: any) => props.theme.fonts.body};
`;

export const RestaurantInfo = ( restaurant: any) => {

  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 random",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } =restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
