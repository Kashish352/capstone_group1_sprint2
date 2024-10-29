import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.card_bg || "#fff"};
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  margin-bottom: 20%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Name = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary || "#333"};
  margin: 10px 0;
  font-weight: 600;
`;

const Price = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary || "#777"};
  margin-bottom: 15px;
  font-weight: 500;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: ${({ theme }) => theme.primary || "#007bff"};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.primary_dark || "#0056b3"};
    transform: translateY(-2px);
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Name>{product.name}</Name>
      <Price>{product.price}</Price>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </Card>
  );
};

export default ProductCard;
