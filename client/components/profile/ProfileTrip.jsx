import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

import {
  Icon,
  Box,
  Button,
  Text,
  Image,
  Grid,
  GridItem,
  Link,
  Badge,
  Center,
  Flex,
  Tabs,
  TabList,
} from '@chakra-ui/react';

const ProfileTrip = ({
  title,
  destination,
  start_date,
  end_date,
  locationphotos,
  member_name,
}) => {
  return (
    <>
      <Box>
        <Grid>
          <GridItem>{title}</GridItem>
          <GridItem>{destination}</GridItem>
          <GridItem>
            {new Date(start_date).toLocaleDateString()} -{' '}
            {new Date(end_date).toLocaleDateString()}
          </GridItem>
          <Flex align='center'>
            <Image
              //   boxSize='200px'
              src={locationphotos[0]}
              fallbackSrc='https://www.ishn.com/ext/resources/900x550/airplane-plane-flight-900.jpg?height=635&t=1583412590&width=1200'
            />
          </Flex>
        </Grid>
        <Grid>
          <Button /*onClick={handleAddFavorite}*/>
            <Icon as={AiOutlineHeart}/>
          </Button>
        </Grid>
      </Box>
    </>
  );
};
export default ProfileTrip;
