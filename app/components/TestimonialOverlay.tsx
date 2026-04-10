import { Box, Typography, Stack, Divider, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../styles/theme';

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  testimonials: Testimonial[];
}

export const TestimonialOverlay = ({ isOpen, onClose, testimonials }: TestimonialOverlayProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ 
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundColor: 'rgba(114, 52, 128, 0.98)', 
          zIndex: 100, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '40px', 
          cursor: 'pointer',
          borderRadius: '24px'
        }}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          style={{ width: '100%', maxWidth: '500px' }}
        >
          <IconButton sx={{ position: 'absolute', top: 20, right: 20, color: 'white' }}>
            <CloseIcon />
          </IconButton>

          <Stack spacing={4}>
            {testimonials.map((t, i) => (
              <Box key={i}>
                <Typography variant="h6" sx={{ color: colors.cream, fontStyle: 'italic', mb: 1.5, textAlign: 'center', fontWeight: 400 }}>
                  {t.text}
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'right', fontWeight: 800, color: colors.lavender }}>
                  — {t.author}
                </Typography>
                {i < testimonials.length - 1 && <Divider sx={{ mt: 4, borderColor: 'rgba(255,255,255,0.1)' }} />}
              </Box>
            ))}
          </Stack>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);