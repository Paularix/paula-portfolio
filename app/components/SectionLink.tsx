import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { type ReactNode } from 'react';
import { colors } from '../styles/theme';

interface SectionLinkProps {
  /** URL de la sección destino */
  href?: string;
  /** Categoría o texto superior (opcional) */
  overline?: string;
  /** Título principal de la acción */
  title: string;
  /** Icono decorativo opcional */
  icon?: ReactNode;
  /** Manejador de clic para navegación SPA */
  onClick?: () => void;
}

export const SectionLink = ({ 
  href = "#", 
  overline, 
  title, 
  icon, 
  onClick 
}: SectionLinkProps) => (
  <Box 
    sx={{ 
      pt: 2, 
      borderTop: `1px solid ${colors.lavender}`, 
      display: 'inline-block',
      cursor: 'pointer' 
    }}
    onClick={onClick}
  >
    {overline && (
      <Typography 
        variant="caption" 
        sx={{ 
          color: colors.olive, 
          fontWeight: 800, 
          textTransform: 'uppercase', 
          mb: 0.5, 
          display: 'block', 
          letterSpacing: 1.5 
        }}
      >
        {overline}
      </Typography>
    )}
    
    <a 
      href={href} 
      style={{ textDecoration: 'none' }} 
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <motion.div 
        whileHover={{ x: 6 }} 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: colors.purple, 
          fontWeight: 800, 
          fontSize: '1.1rem' 
        }}
      >
        {icon}
        {title}
        <ArrowForwardIcon sx={{ fontSize: 18, opacity: 0.6 }} />
      </motion.div>
    </a>
  </Box>
);
