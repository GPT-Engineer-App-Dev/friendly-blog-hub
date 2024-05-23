import { Box, Container, Flex, Heading, Link, VStack, Text, HStack, Divider, Stack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <HStack spacing={8}>
              <Link href="#" fontSize="lg">Home</Link>
              <Link href="#" fontSize="lg">About</Link>
              <Link href="#" fontSize="lg">Blog</Link>
              <Link href="#" fontSize="lg">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          {/* Blog Posts Section */}
          <Box flex="3">
            <VStack spacing={8} align="stretch">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Blog Post Title</Heading>
                <Text mt={4}>This is a summary of the blog post...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Another Blog Post</Heading>
                <Text mt={4}>This is another summary of a blog post...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
            <VStack spacing={4} align="stretch">
              <Heading fontSize="lg">Recent Posts</Heading>
              <Divider />
              <Text>Post 1</Text>
              <Text>Post 2</Text>
              <Text>Post 3</Text>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaInstagram /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;