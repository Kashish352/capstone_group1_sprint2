import React, { useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

const Container = styled.div`
  padding: 40px;
  min-height: 100vh;
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 40px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const CardWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const FavoriteIconContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 6px;
  border-radius: 50%;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(255, 100, 100, 0.9);
  }
`;
const initialProducts = [
  {
    id: 1,
    name: "Apple iPhone 16 Pro",
    price: "$999",
    image: "/images/iphone-16-pro.jpg",
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: "$1,299",
    image: "/images/dell-xps-15.jpg",
  },
  {
    id: 3,
    name: "Sony WH-1000XM4 Headphones",
    price: "$349",
    image: "/images/sony-wh-1000xm4.jpg",
  },
  {
    id: 4,
    name: "Apple Watch Series 10",
    price: "$399",
    image: "/images/apple-watch-series-10.jpg",
  },
  {
    id: 5,
    name: "Samsung QLED 4K TV",
    price: "$1,199",
    image: "/images/samsung-qled-tv.jpg",
  },
  {
    id: 6,
    name: "JBL Flip 5 Bluetooth Speaker",
    price: "$119",
    image: "/images/jbl-flip-5.jpg",
  },
  {
    id: 7,
    name: "PlayStation 5",
    price: "$499",
    image: "/images/playstation-5.jpg",
  },
  {
    id: 8,
    name: "iPad Pro 11-inch",
    price: "$799",
    image: "/images/ipad-pro-11.jpeg",
  },
  {
    id: 9,
    name: "Canon EOS R5 Camera",
    price: "$3,899",
    image: "/images/canon-eos-r5.jpeg",
  },
];

const ShopListing = () => {
  const [loading] = useState(false);
  const [products] = useState(initialProducts);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  return (
    <Container>
      <Title>Explore Our Products</Title>
      {loading ? (
        <CircularProgress />
      ) : (
        <ProductsGrid>
          {products.map((product) => (
            <CardWrapper key={product.id}>
              <FavoriteIconContainer onClick={() => toggleFavorite(product.id)}>
                {favorites.includes(product.id) ? (
                  <Favorite style={{ color: "red" }} />
                ) : (
                  <FavoriteBorder />
                )}
              </FavoriteIconContainer>
              <ProductCard product={product} />
            </CardWrapper>
          ))}
        </ProductsGrid>
      )}
    </Container>
  );
};

export default ShopListing;
