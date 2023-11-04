import { Box, Button, Flex, HStack, Heading,Spacer,Text } from "@chakra-ui/react";

const Navbar=()=>{
    return(
        <>
        <Flex alignItems="center" p="10px" bg="bisque">
            <Heading>NavBar</Heading>
            <Spacer />

            <HStack>

            <Box bg="gray" p="10px">A</Box>
            <Text>ma22106688@gmail.com</Text>
            <Button colorScheme="green">Log In</Button>
            </HStack>
        </Flex>
            {/* <Flex bg="gray" justify="space-between">
                <Box w="100px" h="50px" bg="red" alignItems="center" >Home</Box>
                <Box w="100px" h="50px" bg="red">Contact</Box>
                <Box w="100px" h="50px" bg="red">About</Box>
                <Box w="100px" h="50px" bg="red">Gallery</Box>
            </Flex> */}
        </>
    )

}
export default Navbar;