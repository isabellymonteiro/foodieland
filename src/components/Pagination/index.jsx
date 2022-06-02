import { usePagination, DOTS } from '../../hooks/usePagination';
import ArrowIcon from '/icons/arrow.svg'

import './index.scss';

const Pagination = ({
  totalCount,
  pageSize,
  siblingCount = 0,
  currentPage,
  onPageChange
}) => {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <>
      <ul className='pagination'>
        {!(currentPage === 1) && <li
          className='pagination__item'
        >
          <button className='pagination__itemButton pagination__arrow' onClick={onPrevious} aria-label='Previous'>
            <img className='pagination__arrow--left' src={ArrowIcon}/>
          </button>
        </li>}
        {paginationRange.map((page, index) => {
          if (page === DOTS) {
            return (
              <li
                className='pagination__item '
                disabled={true}
                key={DOTS + index}
              ><button className='pagination__itemButton pagination__dots' disabled={true}>{DOTS}</button></li>
            )
          }
          return (
            <li
              key={index}
              className={`pagination__item`}
            >
              <button
                className={`pagination__itemButton ${currentPage === page ? '--active' : ''}`} 
                onClick={() => onPageChange(page)} 
                aria-label={`Page ${page}`}>
                {page}
              </button>
            </li>
          )
        })}
        {!(currentPage === lastPage) && <li
          className='pagination__item'
        >
          <button className='pagination__itemButton pagination__arrow' onClick={onNext} aria-label='Next'>
            <img className='pagination__arrow--right' src={ArrowIcon}/>
          </button>
        </li>}
      </ul>
    </>
  );
};

export default Pagination;