import { PaginationButton, PaginationContainer } from "../../style/StyledComponents";
export default function PaginationSection({ currentPage, tradersList, setCurrentPage }) {
  const itemsPerPage = 8;
  const totalPages = Math.ceil(tradersList.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 7; // Total number of buttons to display

    // Determine the range of buttons to show
    let startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
    let endPage = startPage + maxButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxButtons + 1, 1);
    }

    // Show '...' before the start page if needed
    if (startPage > 1) {
      buttons.push(
        <PaginationButton key={1} onClick={() => handlePageClick(1)}>
          1
        </PaginationButton>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="dot1" style={{ color: "white", fontSize: "18px" }}>
            ...
          </span>
        );
      }
    }

    // Generate page number buttons
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PaginationButton key={i} onClick={() => handlePageClick(i)} className={currentPage === i && "active"}>
          {i}
        </PaginationButton>
      );
    }

    // Show '...' after the end page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="dot2" style={{ color: "white", fontSize: "18px" }}>
            ...
          </span>
        );
      }
      buttons.push(
        <PaginationButton key={totalPages} onClick={() => handlePageClick(totalPages)}>
          {totalPages}
        </PaginationButton>
      );
    }

    return buttons;
  };
  return (
    <PaginationContainer>
      <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-left"
          viewBox="0 0 16 16"
        >
          <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
        </svg>
      </PaginationButton>
      {renderPaginationButtons()}
      <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-right"
          viewBox="0 0 16 16"
        >
          <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
        </svg>
      </PaginationButton>
    </PaginationContainer>
  );
}
