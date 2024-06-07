import './style.css';
import reposApi from '../../apis/repos.api';

import { useEffect, useState } from 'react';

function Filter({ onLangClick }) {
  const [langTypes, setLang] = useState([]);
  const [langParam, setLangParam] = useState('all');

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLangTypes = async () => {
      try {
        const metaData = await reposApi.getLangTypes();
        const langs = metaData;
        setLang(langs);
      } catch (error) {
        setError(error);
      }
    };

    fetchLangTypes();
  }, []);

  if (error) {
    return <div>Error Params</div>;
  }

  return (
    <div class='params'>
      <button
        onClick={() => { onLangClick('all'); setLangParam('all') }}
        className={'all' === langParam ? 'focused' : ''}
      >
        All
      </button>
      {
        langTypes.map(lang => (
          <button
            key={lang}
            onClick={() => { onLangClick(lang); setLangParam(lang) }}
            className={lang === langParam ? 'focused' : ''}
          >
            {lang ? lang : '-'}
          </button>
        ))
      }
    </div>
  );
}

export default Filter;