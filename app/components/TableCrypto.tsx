'use client';
import { DataGrid, GridColDef, GridColTypeDef,GridRenderCellParams,GridCellParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { CryptoData } from '@/types/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import clsx from 'clsx';

const usdPrice: GridColTypeDef = {
  type: 'number',
  width: 130,
  valueFormatter: ({ value }) => `$${value.toFixed(2)}`,
  cellClassName: 'font-tabular-nums',
};

const columns: GridColDef[] = [
    { 
      field: 'num', 
      headerName: '#', 
      width: 90,
      renderCell: (params: GridRenderCellParams<any, string>) =>
      params.api.getRowIndexRelativeToVisibleRows(params.row.id) + 1,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'name',
      headerName: 'Coin',
      width: 250,
      headerClassName: 'super-app-theme--header',
      renderCell: (params: GridRenderCellParams<any, string>) => (
        <div style={{ display: 'flex', alignItems: 'center', gap:'4px' }}>
          <Image
            src={params.row.image}
            width={20}
            height={20}
            alt="Picture of the author"
          />
          <strong>
            <Link href={`/currency/${params.row.id}`}>{params.value}</Link>
          </strong>
          <span style={{ textTransform: 'uppercase' , color: '#ccc'}}>
            {params.row.symbol}
          </span>
        </div>
      ),
    },
    {
      field: 'current_price',
      headerName: 'Price',
      width: 200,
      ...usdPrice,
    },
    {
      field: 'price_change_percentage_1h_in_currency',
      headerName: '1h',
      width: 100,
      cellClassName: (params: GridCellParams<any, number>) =>
      clsx('super-app', {
        negative: params.value && params.value < 0,
        positive: params.value && params.value > 0,
      }),
      valueFormatter: ({ value }) => `${value.toFixed(2)}%`,
    },
    {
      field: 'price_change_percentage_24h_in_currency',
      headerName: '24h',
      width: 100,
      cellClassName: (params: GridCellParams<any, number>) =>
      clsx('super-app', {
        negative: params.value && params.value < 0,
        positive: params.value && params.value > 0,
      }),
      valueFormatter: ({ value }) => `${value.toFixed(2)}%`,
    },
    {
      field: 'price_change_percentage_7d_in_currency',
      headerName: '7d',
      width: 100,
      cellClassName: (params: GridCellParams<any, number>) =>
      clsx('super-app', {
        negative: params.value && params.value < 0,
        positive: params.value && params.value > 0,
      }),
      valueFormatter: ({ value }) => `${value.toFixed(2)}%`,
    },
    {
      field: 'last_updated',
      headerName: 'last 7d',
      width: 250,
      renderCell: (params: GridRenderCellParams<any, string>) => (
        <div style={{ display: 'flex', alignItems: 'center', gap:'4px' }}>
          <Image
            src={`https://www.coingecko.com/coins/${Math.floor(Math.random() * 20) + 1}/sparkline.svg`}
            width={200}
            height={50}
            alt="Picture of the author"
          />
          
        </div>
      ),
    }
    
  ];
  

export default function TableCrypto(props: {data: CryptoData[]}) {
    return (
        <Box sx={{ 
          width: '100%' , 
          backgroundColor: '#fff',
          '& .super-app-theme--header': {
            fontWeight: 'bold',
          },
          '& .super-app.negative': {
            color: 'rgb(255 58 51/1)',
            fontWeight: '300',
          },
          '& .super-app.positive': {
            color: 'rgb(0 168 62/1)',
            fontWeight: '400',
          },
        }}>
          
          <DataGrid
            rows={props.data}
            columns={columns}
          />
        </Box>
    )
}