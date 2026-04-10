import { Box, Paper, Avatar, Typography, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { colors } from '../styles/theme';

export const ProfileCard = () => (
  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
    <Box sx={{ position: 'relative', maxWidth: '400px', mx: 'auto' }}>
      <Box sx={{ position: 'absolute', inset: -15, borderRadius: '40px', background: `linear-gradient(45deg, ${colors.olive}, transparent)`, zIndex: 0 }} />
      <Paper elevation={0} sx={{ p: 5, borderRadius: '32px', bgcolor: 'white', border: `1px solid ${colors.lavender}`, position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Avatar 
          src="/profile-photo.jpeg"
          alt="Paula Marcos"
          sx={{ width: 140, height: 140, margin: '0 auto', bgcolor: colors.purple, mb: 2, border: `4px solid ${colors.cream}`, boxShadow: `0 8px 24px rgba(0,0,0,0.1)`, '& img': { objectPosition: 'center 20%' } }}
        />
        <Typography variant="h5" sx={{ fontWeight: 800, color: colors.purple, mb: 1 }}>Paula Marcos</Typography>
        <Typography sx={{ color: colors.olive, mb: 3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, fontSize: '0.75rem' }}>Collaborative Engineering & Product Ownership</Typography>
        <Stack spacing={1.5} alignItems="center">
          <Chip label="Self-Directed & Team-Oriented" size="small" sx={{ bgcolor: colors.lavender, color: colors.purple, fontWeight: 700 }} />
          <Chip label="Proactive Problem Solver" size="small" sx={{ bgcolor: colors.lavender, color: colors.purple, fontWeight: 700 }} />
          <Chip label="Mission-Driven & Enthusiastic" size="small" sx={{ bgcolor: colors.lavender, color: colors.purple, fontWeight: 700 }} />
        </Stack>
      </Paper>
    </Box>
  </motion.div>
);