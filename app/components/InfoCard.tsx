import { Box, Paper, Avatar, Typography, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { colors } from '../styles/theme';
import Link from 'next/link';

interface InfoCardProps {
  image?: string;
  title: string;
  subtitle: string;
  tags?: string[];
  gradientColor?: string;
  href?: string; // Nueva prop opcional para el link personal
}

export const InfoCard = ({ 
  image, 
  title, 
  subtitle, 
  tags, 
  gradientColor = colors.olive,
  href 
}: InfoCardProps) => {

  // Definimos el contenido del Avatar para no repetir código
  const AvatarContent = (
    <motion.div
      whileHover={{ 
        scale: 1.25, 
        rotate: [0, -2, 2, -1, 0], 
        transition: { 
            duration: 0.5, 
            ease: [0.6, 0.01, -0.05, 0.9] 
        } 
      }}
      style={{ cursor: href ? 'pointer' : 'default', zIndex: 2 }}
    >
      <Avatar 
        src={image}
        sx={{ 
          width: 140, 
          height: 140, 
          border: `4px solid ${colors.cream}`, 
          boxShadow: `0 8px 24px rgba(0,0,0,0.1)`,
          '& img': { 
              objectPosition: 'center 20%', 
              transition: 'object-position 0.5s ease' 
          } 
        }}
      />
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.7 }}
    >
      <Box sx={{ position: 'relative', maxWidth: '400px', mx: 'auto' }}>
        <Box sx={{ 
          position: 'absolute', 
          inset: -15, 
          borderRadius: '40px', 
          background: `linear-gradient(45deg, ${gradientColor}, transparent)`, 
          zIndex: 0 
        }} />
        
        <Paper elevation={0} sx={{ 
          p: 5, 
          borderRadius: '32px', 
          bgcolor: 'white', 
          border: `1px solid ${colors.lavender}`, 
          position: 'relative', 
          zIndex: 1, 
          textAlign: 'center' 
        }}>
          {image && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              {/* Si hay href, envolvemos en Link; si no, renderizamos directo */}
              {href ? (
                <Link href={href} style={{ textDecoration: 'none' }}>
                  {AvatarContent}
                </Link>
              ) : (
                AvatarContent
              )}
            </Box>
          )}

          <Typography variant="h5" sx={{ fontWeight: 800, color: colors.purple, mb: 1 }}>
            {title}
          </Typography>

          <Typography sx={{ color: colors.olive, mb: 3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, fontSize: '0.75rem' }}>
            {subtitle}
          </Typography>

          {tags && (
            <Stack spacing={1.5} alignItems="center">
              {tags.map(tag => (
                <Chip 
                  key={tag} 
                  label={tag} 
                  size="small" 
                  sx={{ bgcolor: colors.lavender, color: colors.purple, fontWeight: 700 }} 
              />
            ))}
          </Stack>
        )}
        </Paper>
      </Box>
    </motion.div>
  );
};