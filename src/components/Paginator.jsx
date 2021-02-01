import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PageButton = styled.div`
  padding: 5px;
  width: 18px;
  text-align: center;
  margin: 0 10px;
  font-weight: bold;
  background-color: #5da4f5;
  color: white;
  cursor: pointer;
  border-radius: 2px;
  &.selectedPage {
    color: #dbd75e;
  }
`;
const PaginatorContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Paginator = ({ totalCount, pageSize, currentPage, onPageSelect }) => {
  const pagesCount = Math.ceil(totalCount / pageSize);
  const sectionSize = 3;
  const sectionsCount = Math.ceil(pagesCount / sectionSize);
  const currentSection = Math.ceil(currentPage / sectionSize);
  const startPage = sectionSize * (currentSection - 1) + 1;
  const lastPage = sectionSize * currentSection;
  const pages = [];
  for (let i = startPage; i <= lastPage; i++) {
    pages.push(
      <PageButton
        className={i === Number(currentPage) && "selectedPage"}
        key={i}
        onClick={() => {
          onPageSelect(i);
        }}
      >
        {i}
      </PageButton>
    );
  }

  return (
    <PaginatorContainer>
      {currentSection > 1 && (
        <PageButton
          onClick={() => {
            onPageSelect((currentSection - 1) * sectionSize);
          }}
        >
          ←
        </PageButton>
      )}
      {pages}
      {currentSection < sectionsCount && (
        <PageButton
          onClick={() => {
            onPageSelect(currentSection * sectionSize + 1);
          }}
        >
          →
        </PageButton>
      )}
    </PaginatorContainer>
  );
};

Paginator.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageSelect: PropTypes.func.isRequired,
};

export default Paginator;
