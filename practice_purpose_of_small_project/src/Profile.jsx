import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'

const Profile = () => {
  return (
    <div>
      <Card maxW="-moz-fit-content">
        <CardBody mr={'40'}>
          <Image
            src="https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="md"
          />
          <Stack mr={'-moz-initial'} mt="6" spacing="0">
            <Text>Fresho</Text>
            <Text>Onion (Loose)</Text>

            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Profile
