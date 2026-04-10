import { Paper, Typography, Box } from '@mui/material';
import { colors } from '../styles/theme';

interface CardContainerProps {
  /** Título principal del bloque */
  title: string;
  /** Icono opcional junto al título */
  icon?: React.ReactNode;
  /** Contenido interno de la tarjeta (ej: ChipGroupAccordion o AchievementTile) */
  children: React.ReactNode;
  /** Variante visual: 'filled' (con fondo) o 'outlined' (solo borde) */
  variant?: 'filled' | 'outlined';
  /** Color de marca (para fondo o borde según variante) */
  accentColor?: string;
  /** Color del texto cuando variant es 'filled' */
  filledTextColor?: string;
}

export const CardContainer = ({ 
  title, 
  icon, 
  children, 
  variant = 'filled', 
  accentColor = colors.olive, 
  filledTextColor = colors.cream 
}: CardContainerProps) => (
  <Paper 
    elevation={0} 
    sx={{ 
      p: { xs: 3, md: 4 }, // Padding adaptable
      borderRadius: '24px', 
      bgcolor: variant === 'filled' ? accentColor : 'transparent', 
      color: variant === 'filled' ? filledTextColor : colors.purple,
      border: variant === 'outlined' ? `2px solid ${accentColor}` : 'none',
      overflow: 'hidden', // Importante para las animaciones internas
      boxShadow: variant === 'filled' ? `0 10px 40px ${accentColor}20` : 'none',
      transition: 'all 0.3s ease'
    }}
  >
    <Typography 
      variant="h5" 
      sx={{ 
        fontWeight: 800, 
        mb: 3, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1.5,
        fontSize: '1.25rem',
        color: variant === 'outlined' ? colors.purple : filledTextColor
      }}
    >
      {icon} {title}
    </Typography>
    
    <Box>
      {children}
    </Box>
  </Paper>
);