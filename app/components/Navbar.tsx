'use client';
import { AppBar, Toolbar, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => (
  <AppBar position="sticky" sx={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', elevation: 0, color: '#000' }}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h6" fontWeight="bold">PM.</Typography>
      <Stack direction="row" spacing={2}>
        {['Home', 'Experience', 'Library'].map((item) => (
          <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} passHref>
            <Button component={motion.button} whileHover={{ scale: 1.1 }} sx={{ color: 'inherit' }}>
              {item}
            </Button>
          </Link>
        ))}
      </Stack>
    </Toolbar>
  </AppBar>
);