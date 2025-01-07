import "../styles.css";
import { useState } from "react";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import { DBHSeasonOneData } from "../../../data/DBH/DBHSeasonOne.data";
import SectionLinks from "../../SectionLinks";

const ITEMS_PER_PAGE = 10; // Ajuste conforme necessário

export default function SeasonOneHeroes() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(DBHSeasonOneData.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedItems = DBHSeasonOneData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <Box marginTop={8}>
      <Container>
        {selectedItems.map((item) => (
          <SectionLinks key={item.num} num={`${item.num}`} url={`${item.name}`} />
        ))}
      </Container>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? "contained" : "outlined"}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </Pagination>
    </Box>
  );
}

const Container = styled.div`
  min-width: 98vw;
  max-width: 100%; /* Certifique-se de que o container pode expandir */
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;

  > * {
    flex: 1 1 calc(20% - 10px); /* Ajuste para o número desejado de itens por linha */
    min-width: 150px; /* Largura mínima */
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }
`;


const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;

  button {
    margin: 0 5px;
    background-color: #f16819;
    border: none;
    color: #fff;

    &:hover {
      background-color: #532002;
    }

    &:focus {
      background-color: #ffffff;
      color: #f16819;
    }
  }
`;
