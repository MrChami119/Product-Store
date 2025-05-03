import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard'; // Assuming you have a ProductCard component

const HomePage = () => {

  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"} 
          bgGradient={"linear(to-l, #7928CA, #FF0080)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} /> // Assuming ProductCard is a component that displays product details
          ))}

        </SimpleGrid>
        {products.length === 0 && (
          <Text
            fontSize='xl'
            textAlign={"center"}
            fontWeight='bold'
            color='gray.600'
          >
            No Products Found{" "}
            <Link to={"/create"}>
              <Text as='span' color='blue.500' textDecoration='underline'>
                Create a Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage