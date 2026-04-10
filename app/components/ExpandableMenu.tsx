import { useState } from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { colors } from '../styles/theme';

interface MenuItem {
  id: string;
  label: string;
  sublabel?: string;
  visual?: React.ReactNode; // Puede ser un emoji o un icono
}

interface ExpandableMenuProps {
  title: string;
  mainIcon: React.ReactNode;
  items: MenuItem[];
  accentColor?: string;
}

export const ExpandableMenu = ({ 
  title, 
  mainIcon, 
  items, 
  accentColor = colors.olive 
}: ExpandableMenuProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ position: 'relative', width: 56, height: 56 }}
    >
      <motion.div
        animate={{ 
          width: isHovered ? 280 : 56,
          height: isHovered ? 'auto' : 56,
          borderRadius: isHovered ? '20px' : '28px'
        }}
        style={{
          backgroundColor: '#F4F4E8',
          color: accentColor,
          overflow: 'hidden',
          border: `1px solid ${accentColor}`,
          boxShadow: isHovered ? `0 12px 30px rgba(0,0,0,0.1)` : 'none',
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 100
        }}
      >
        <Stack 
          direction="row" 
          alignItems="center" 
          justifyContent={isHovered ? 'space-between' : 'center'}
          sx={{ width: '100%', height: 56, px: isHovered ? 2.5 : 0 }}
        >
          {isHovered ? (
            <>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
                {title}
              </Typography>
              {mainIcon}
            </>
          ) : (
            mainIcon
          )}
        </Stack>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ padding: '0 24px 20px 24px' }}
            >
              <Divider sx={{ mb: 2, borderColor: 'rgba(0,0,0,0.1)' }} />
              <Stack spacing={2.5}>
                {items.map((item) => (
                  <Stack key={item.id} direction="row" spacing={2} alignItems="center">
                    <Typography sx={{ fontSize: '1.5rem' }}>{item.visual}</Typography>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                        {item.label}
                      </Typography>
                      {item.sublabel && (
                        <Typography variant="caption" sx={{ opacity: 0.7 }}>
                          {item.sublabel}
                        </Typography>
                      )}
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Box>
  );
};