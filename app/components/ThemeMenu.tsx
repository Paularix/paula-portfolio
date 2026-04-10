'use client';

import { useState } from 'react';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PaletteIcon from '@mui/icons-material/Palette';
import { useThemeCustom } from '../context/ThemeContext';
import { themes, ThemeKey } from '../styles/theme';
export const ThemeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, currentTheme, colors } = useThemeCustom();

  // Nombres "humanos" para las paletas
  const themeNames: Record<ThemeKey, string> = {
    classic: "Classic Studio",
    nature_monarch: "Monarch Butterfly",
    nature_orchid: "Leopard Orchid",
    nature_fungus: "Fire Fungus",
    nature_leaf_purple: "Purple Veins",
    nature_sunset: "Ocean Sunset",
    nature_leaf_red: "Exotic Crimson",
    nature_flytrap: "Venus Flytrap",
    nature_peach: "Velvet Peach",
    nature_butterfly: "Fire Butterfly",
  };

  return (
    <Box 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{ 
        position: 'fixed', 
        bottom: 30, 
        right: 30, 
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        gap: 2
      }}
    >
      {/* BOTÓN PRINCIPAL */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <IconButton
          sx={{
            width: 60,
            height: 60,
            bgcolor: colors.purple,
            color: colors.cream,
            boxShadow: `0 8px 32px ${colors.purple}40`,
            border: `2px solid ${colors.lavender}`,
            '&:hover': { bgcolor: colors.olive },
          }}
        >
          <PaletteIcon fontSize="large" />
        </IconButton>
      </motion.div>

      {/* MENÚ DESPLEGABLE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{ marginBottom: '10px' }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: '24px',
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${colors.lavender}`,
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 800, color: colors.olive, mb: 1, px: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
                Nature Palettes
              </Typography>
              
              {Object.keys(themes).map((key) => {
                const themeKey = key as ThemeKey;
                const isActive = currentTheme === themeKey;

                return (
                  <Box
                    key={themeKey}
                    onClick={() => setTheme(themeKey)}
                    component={motion.div}
                    whileHover={{ x: 5 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      cursor: 'pointer',
                      p: '6px 12px',
                      borderRadius: '12px',
                      bgcolor: isActive ? `${colors.lavender}40` : 'transparent',
                      transition: '0.2s',
                      '&:hover': { bgcolor: colors.lavender }
                    }}
                  >
                    {/* Previsualización del color */}
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: themes[themeKey].purple, border: '1px solid rgba(0,0,0,0.1)' }} />
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: isActive ? 800 : 600, 
                        color: isActive ? colors.purple : '#444',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {themeNames[themeKey]}
                    </Typography>
                  </Box>
                );
              })}
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};