

// import styles from './CurrencyDetail.module.css';
import { Currency } from '@/types/interfaces';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

// CSS styles
const styles = {
  paper: {
    padding: '16px',
    marginTop: '20px',
    boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
  },
  listItem: {
    marginBottom: '2px',
  },
  description: {
    margin: '5px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
  },
};

export default function CurrencyDetail({ currency }: { currency: Currency }) {
  return (
    <div style={styles.container}>
      <Paper elevation={3} style={styles.paper}>
        <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center', gap : '10px'}}>
          <Image
            src={currency.image.large}
            alt={currency.name}
            width={50}
            height={50}
          />
          <Typography variant="h4">{currency.name} ({currency.symbol})</Typography>
        </div>
        <List>
          <ListItem style={styles.listItem}>
            <ListItemText primary={`ID: ${currency.id}`} />
          </ListItem>
          <ListItem style={styles.listItem}>
            <ListItemText primary={`Block Time (Minutes): ${currency.block_time_in_minutes}`} />
          </ListItem>
        </List>

        <Typography variant="h6">Description</Typography>
        <Typography variant="body1" style={styles.description}>
          {currency.description.en}
        </Typography>

        <Typography variant="h6">Categories</Typography>
        <List>
          {currency.categories.map((category, index) => (
            <ListItem key={index} style={styles.listItem}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6">Additional Notices</Typography>
        <List>
          {currency.additional_notices.map((notice, index) => (
            <ListItem key={index} style={styles.listItem}>
              <ListItemText primary={notice} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
