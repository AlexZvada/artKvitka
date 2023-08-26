
const Pagination = ({ productsPerPage, totalProducts, navigate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => navigate(number)}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;