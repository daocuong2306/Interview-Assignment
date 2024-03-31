import React from 'react';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setPage }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handlePageClick = (page: number) => {
        setPage(page);
    };

    return (
        <div>
            <nav className="flex justify-end" aria-label="Page navigation example">
                <ul className="pagination flex justify-between w-60">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {pages.map(page => (
                        <li key={page} className={`page-item ${page == currentPage ? 'font-bold text-red-700' : ''}`}>
                            < a className="page-link" href="#" onClick={() => handlePageClick(page)}>
                                {page}
                            </a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default Pagination;
