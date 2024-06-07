import './style.css';

function Table({ dataTable, onRepoClick }) {
  const listItems = dataTable.map(repo => (
    <tr key={repo.id} onClick={ () => onRepoClick(repo) }>
      <td>{repo.name}</td>
      <td>{repo.description ? repo.description : '-'}</td>
      <td>{repo.language ? repo.language : '-'}</td>
      <td>{repo.forks_count}</td>
    </tr>
  ));

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Language</th>
          <th>Forks count</th>
        </tr>
        {listItems}
      </tbody>
    </table>
  );
}

export default Table;