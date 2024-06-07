import './style.css';

function Pagination({ current, size, totalPages, onChangePage }) {
  const pages = [...Array(totalPages).keys()].map(i => i + 1);

  return (
    <div class='pagination'>
      <div className='paginationIndex'>
        {pages.map(page => (
          <button
            key={page}
            disabled={page === current}
            class={page === current ? 'active' : ''}
            onClick={() => onChangePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div class='paginationInfo'>
        <span>Items: {size}</span>
        <span class='infoSeparate'>|</span>
        <span>Page: {current}/{totalPages}</span>
      </div>
    </div>
  );
}

export default Pagination;