import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Box, AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Henrry Mojica',
  description: 'Henrry Mojica Test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">Home</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
      </body>
    </html>
  )
}
