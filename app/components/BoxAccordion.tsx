import { Box, Paper, Typography, Stack, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { colors as staticColors } from '../styles/theme';
import { useThemeCustom } from '../context/ThemeContext';

interface BoxAccordionProps {
  /** Título principal (ej: Full Stack JavaScript) */
  title: string;
  /** Subtítulo (ej: Fundació Esplai) */
  subtitle: string;
  /** Etiqueta superior (ej: BOOTCAMP) */
  badgeText: string;
  /** Fecha o ubicación (ej: 2023 • Barcelona) */
  infoTag: string;
  /** Texto breve descriptivo */
  description: string;
  /** Lista de puntos clave o detalles */
  details: string[];
  /** Icono principal de la tarjeta */
  icon: React.ReactNode;
  /** Icono para los items de la lista (por defecto un check) */
  listIcon?: React.ReactNode;
  /** Color de marca para el borde y textos resaltados */
  accentColor?: string;
}

export const BoxAccordion = ({
  title,
  subtitle,
  badgeText,
  infoTag,
  description,
  details,
  icon,
  listIcon = <CheckCircleOutlineIcon sx={{ fontSize: 16 }} />,
  accentColor = staticColors.purple
}: BoxAccordionProps) => {
  const { colors } = useThemeCustom();
  const finalAccent = accentColor || colors.purple;

  return (
    <motion.div 
      whileHover="hover" 
      initial="initial"
      style={{ width: '100%' }} 
    >
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 3, md: 4 }, 
          borderRadius: '24px', 
          border: `1px solid ${colors.lavender}`, 
          bgcolor: 'white', 
          position: 'relative', 
          overflow: 'hidden',
          transition: 'all 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          minHeight: { xs: 'auto', md: '200px' }, // Tu medida exacta
          
          // Cambiamos 'center' por 'flex-start' para evitar que el contenido "baile"
          justifyContent: 'flex-start',

          '&:hover': { 
            borderColor: finalAccent, 
            boxShadow: `0 12px 40px rgba(0,0,0,0.06)`,
          } 
        }}
      >
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', bgcolor: finalAccent }} />
        
        {/* --- BLOQUE 1: SIEMPRE VISIBLE --- */}
        {/* Añadimos un flexGrow para que este bloque ocupe el espacio inicial de 200px */}
        <Box sx={{ width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ p: 1, bgcolor: colors.lavender, borderRadius: '10px', display: 'flex', color: finalAccent }}>
                {icon}
              </Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: finalAccent, textTransform: 'uppercase', fontSize: '0.7rem' }}>
                {badgeText}
              </Typography>
            </Stack>
            <motion.div variants={{ initial: { rotate: 0 }, hover: { rotate: 45 } }}>
              <AddIcon sx={{ color: colors.lavender }} />
            </motion.div>
          </Stack>

          <Typography variant="h5" sx={{ fontWeight: 900, mt: 1.5, mb: 0.5, fontSize: '1.3rem', color: colors.purple }}>
            {title}
          </Typography>
          
          <Typography variant="body1" sx={{ color: colors.olive, mb: 0.5, fontWeight: 700, fontSize: '0.95rem' }}>
            {subtitle}
          </Typography>
          
          {/* INFO TAG SIEMPRE VISIBLE */}
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
            {infoTag}
          </Typography>

          {/* DESCRIPCIÓN SIEMPRE VISIBLE */}
          <Typography variant="body2" sx={{ color: '#4a4a3a', fontStyle: 'italic', lineHeight: 1.4, fontSize: '0.85rem' }}>
            {description}
          </Typography>
        </Box>

        {/* --- BLOQUE 2: SOLO LOS DETAILS (ANIMADO) --- */}
        <motion.div 
          variants={{
            initial: { height: 0, opacity: 0, marginTop: 0 },
            hover: { height: 'auto', opacity: 1, marginTop: 16 }
          }} 
          transition={{ duration: 0.3 }} 
          style={{ overflow: 'hidden' }}
        >
          <Divider sx={{ mb: 2, opacity: 0.4 }} />
          <List sx={{ p: 0 }}>
            {details.map((detail, index) => (
              <ListItem key={index} sx={{ px: 0, py: 0.3 }}>
                <ListItemIcon sx={{ minWidth: 26, color: finalAccent }}>
                  {listIcon}
                </ListItemIcon>
                <ListItemText 
                  primary={detail} 
                  primaryTypographyProps={{ 
                    variant: 'body2', 
                    fontWeight: 600, 
                    color: finalAccent, 
                    fontSize: '0.8rem' 
                  }} 
                />
              </ListItem>
            ))}
          </List>
        </motion.div>
      </Paper>
    </motion.div>
  );
};