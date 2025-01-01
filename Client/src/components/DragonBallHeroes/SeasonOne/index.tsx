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
  max-width: 98vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Pagination = styled.div`
  display: flex;
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
