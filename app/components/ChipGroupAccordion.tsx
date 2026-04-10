import { Box, Typography, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colors } from '../styles/theme';

interface ChipGroupAccordionProps {
  /** Título del grupo (ej: Languages) */
  title: string;
  /** Lista de elementos a mostrar como chips */
  items: string[];
  /** Color de acento para la flecha y el título */
  accentColor?: string;
}

export const ChipGroupAccordion = ({ 
  title, 
  items, 
  accentColor = colors.lavender 
}: ChipGroupAccordionProps) => (
  <motion.div initial="initial" whileHover="hover">
    <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)', pb: 1.5, mb: 1.5 }}>
      
      {/* Cabecera clicable/hoverable */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ cursor: 'pointer' }}>
        <Typography variant="subtitle2" sx={{ 
          color: accentColor, 
          fontWeight: 800, 
          textTransform: 'uppercase', 
          fontSize: '0.7rem', 
          letterSpacing: 1.2 
        }}>
          {title}
        </Typography>
        
        {/* Flecha animada que se desplaza a la derecha */}
        <motion.div variants={{ initial: { x: 0 }, hover: { x: 5 } }}>
          <ArrowForwardIosIcon sx={{ color: accentColor, fontSize: '0.8rem' }} />
        </motion.div>
      </Stack>

      {/* Contenido expandible que revela los Chips */}
      <motion.div 
        variants={{ 
          initial: { height: 0, opacity: 0, marginTop: 0 }, 
          hover: { height: 'auto', opacity: 1, marginTop: 12 } 
        }} 
        transition={{ duration: 0.3, ease: "easeOut" }} 
        style={{ overflow: 'hidden' }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {items.map(item => (
            <Chip 
              key={item} 
              label={item} 
              size="small" 
              sx={{ 
                bgcolor: 'rgba(255,255,255,0.1)', 
                color: 'white', 
                border: '1px solid rgba(255,255,255,0.2)', 
                fontWeight: 600,
                fontSize: '0.7rem'
              }} 
            />
          ))}
        </Box>
      </motion.div>
    </Box>
  </motion.div>
);