import './App.css';
import reposApi from './apis/repos.api';
import Filter from './components/filter';
import Table from './components/table';
import Pagination from './components/pagination';
import { useEffect, useState } from 'react';

function App() {
  const [repos, setRepos] = useState([]);
  const [page, setCurrentPage] = useState(1);
  const [size, setSizeItems] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const [lang, setLang] = useState('');

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const metaData = await reposApi.getAll(page, size, lang);
        const repos = metaData.data;
        setRepos(repos);
        const paging = metaData.paging;
        setCurrentPage(paging.page);
        setSizeItems(paging.size);
        setTotalPages(paging.totalPages);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    fetchRepos();
  }, [page, size, lang]);

  const handleLangClick = (lang) => {
    lang = lang ? lang : '-'
    setLang(lang);
  }

  const handleRepoClick = (repo) => {
    console.log('repo click');
    console.log('repo', repo);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if(error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Filter onLangClick={handleLangClick}></Filter>
      <Table dataTable={repos} onRepoClick={handleRepoClick}></Table>
      <Pagination current={page} size={repos.length} totalPages={totalPages} onChangePage={handlePageChange} />
    </div>
  );
}

export default App;
