import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Container, Typography, Box, Stack, Chip } from '@mui/material';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { colors } from '../styles/theme';

interface FooterProps {
  title?: string;
  exitMessage?: string;
  exitIcon?: ReactNode;
  email?: string;
  linkedInUrl?: string;
  footerNote?: string;
}

export const Footer = ({ 
  title = "Let's Connect",
  exitMessage = "Wait! Let’s turn this visit into a chat ✨", 
  exitIcon = <WavingHandIcon sx={{ color: colors.olive, fontSize: 18 }} />,
  email = "pmarcosc5@gmail.com",
  linkedInUrl = "https://www.linkedin.com/in/paula-marcos-203416231/",
  footerNote = "Crafted with soul & code"
}: FooterProps) => {

  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showInactivityPulse, setShowInactivityPulse] = useState(false);
  
  const contactRef = useRef(null);
  const isContactVisible = useInView(contactRef, { amount: 0.8 });
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isContactVisible && currentScrollY < lastScrollY.current && !showExitIntent) {
        setShowExitIntent(true);
        setTimeout(() => setShowExitIntent(false), 4000);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isContactVisible, showExitIntent]);

  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout | null = null;
    if (isContactVisible) {
      inactivityTimer = setTimeout(() => {
        setShowInactivityPulse(true);
        setTimeout(() => setShowInactivityPulse(false), 2000);
      }, 5000);
    }
    return () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
    };
  }, [isContactVisible]);

  return (
    <Box 
      ref={contactRef} 
      component="footer"
      sx={{ 
        py: 12, 
        textAlign: 'center', 
        bgcolor: colors.olive, 
        color: colors.cream, 
        position: 'relative',
        overflow: 'visible',
        width: '100%'
      }}
    >
      <Container maxWidth="sm">
        <AnimatePresence>
          {showExitIntent && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              style={{
                position: 'absolute', top: '-60px', left: '50%', x: '-50%',
                backgroundColor: 'white', color: colors.purple,
                padding: '12px 24px', borderRadius: '24px', fontWeight: 800,
                fontSize: '0.95rem', boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                zIndex: 100, display: 'flex', alignItems: 'center', gap: '10px',
                whiteSpace: 'nowrap', border: `1px solid ${colors.lavender}`
              }}
            >
              {exitIcon} {exitMessage}
              <div style={{ 
                position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', 
                width: 0, height: 0, borderLeft: '10px solid transparent', 
                borderRight: '10px solid transparent', borderTop: '10px solid white' 
              }} />
            </motion.div>
          )}
        </AnimatePresence>

        <Typography variant="h3" sx={{ fontWeight: 900, mb: 4 }}>{title}</Typography>
        
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems="center">
             <motion.div animate={showInactivityPulse ? { scale: [1, 1.05, 1] } : {}}>
                <Chip 
                  component="a" href={`mailto:${email}`}
                  icon={<EmailIcon style={{ color: colors.cream }} />} 
                  label="Email Me" clickable 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', color: colors.cream, 
                    px: 2, py: 3.5, fontSize: '1.1rem', fontWeight: 700, borderRadius: '30px',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)', transform: 'translateY(-3px)' },
                    transition: '0.3s'
                  }} 
                />
             </motion.div>
             <Chip 
                component="a" href={linkedInUrl} target="_blank"
                icon={<LinkedInIcon style={{ color: colors.cream }} />} 
                label="LinkedIn" clickable 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', color: colors.cream, 
                  px: 2, py: 3.5, fontSize: '1.1rem', fontWeight: 700, borderRadius: '30px', 
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)', transform: 'translateY(-3px)' },
                  transition: '0.3s'
                }} 
              />
          </Stack>

          <Typography variant="body2" sx={{ mt: 6, opacity: 0.6, fontSize: '0.8rem', letterSpacing: 1.5 }}>
            © {new Date().getFullYear()} · {footerNote}
          </Typography>
      </Container>
    </Box>
  );
};