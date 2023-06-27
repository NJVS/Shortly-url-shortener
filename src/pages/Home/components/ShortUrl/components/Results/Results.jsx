import { useContext, useEffect } from 'react';
import { ShortenUrlContext } from '../../context/ShortenUrlContext';
import styles from './Results.module.scss';
import Result from '../Result/Result';

const Results = () => {
  const { results } = useContext(ShortenUrlContext);

  return (
    <div className={styles.container}>
      {results.map(result => (
        <Result key={result.code} fullLink={result.original_link} shortLink={result.full_short_link} className='fadeIn'/>
      ))}
    </div>
  )
}

export default Results