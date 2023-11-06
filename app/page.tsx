import styles from './page.module.css'
import {fetchCryptocurrencyData} from '../utils/api';
import TableCrypto from './components/TableCrypto';
import { CryptoData } from '@/types/interfaces';

export default async function Home() {
  let data : CryptoData[] = [];
  
  async function loadData() {
    try {
      data = await fetchCryptocurrencyData();
    }catch (error) {
      console.log(error);
    }
  }
  await loadData();

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h2>Crypto</h2>
        <TableCrypto data={data}/>
      </div>
     </main>
  )
}
