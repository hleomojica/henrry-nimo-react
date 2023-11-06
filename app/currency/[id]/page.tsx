'use client';
import { useState, useEffect } from 'react';
import { Currency } from '@/types/interfaces';
import CurrencyDetail from '../../components/CurrencyDetail';

export default function Page({ params }: { params: { id: number } }) {
  const [currency, setCurrency] = useState<Currency | null>(null);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${params.id}?localization=en&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
      );
      const data = await response.json();
      setCurrency(data);
    }
    if (params.id) {
      loadData();
    }
  }, [params.id]);

  if (!currency) {
    return <div style={{ textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>;
  }
  return <CurrencyDetail currency={currency} />;
};
