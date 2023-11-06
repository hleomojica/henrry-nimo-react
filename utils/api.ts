import { CryptoData } from '../types/interfaces';
import fs from 'fs';
import path from 'path';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptocurrencyData = async (): Promise<CryptoData[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h,24h,7d`, {
        cache: 'no-store', // render on every request
    });

    let data: CryptoData[] = [];
    // if status 429 use local data
    if (response.status === 429) {
         data = await fetchLocalData();
    } else if (response.status === 200) {
        data = await response.json();
    } else {
        throw new Error('Error fetching data');
    }
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchLocalData = async (): Promise<CryptoData[]> => {
    try {
      const filePath = path.join(process.cwd(), 'public/data.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data: CryptoData[] = JSON.parse(fileContents);
      return data;
    } catch (error) {
        console.log("Error fetching local data");
      throw error;
    }
  };



export default fetchCryptocurrencyData;
