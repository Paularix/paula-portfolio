'use client';

import { Container, Typography, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

import { useThemeCustom } from './context/ThemeContext';
import { ThemeMenu } from './components/ThemeMenu';

import { ActionButton } from './components/ActionButton';
import { SectionLink } from './components/SectionLink';
import { InfoCard } from './components/InfoCard';
import { Footer } from './components/Footer';

export default function Home() {
  const { colors } = useThemeCustom(); 

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: colors.cream, 
      color: '#2C2A2A', 
      overflowX: 'hidden',
      transition: 'background-color 0.5s ease' 
    }}>

      <Box sx={{ position: 'relative', pt: { xs: 6, md: 12 }, pb: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 8, 
            alignItems: 'center' 
          }}>

            <Box sx={{ width: { xs: '100%', md: '58.33%' } }}>
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              >
                <motion.div variants={fadeUp}>
                  <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 900, mb: 2, color: colors.purple, lineHeight: 1.1 }}>
                    Frontend<br />Engineer
                  </Typography>
                </motion.div>

                <motion.div variants={fadeUp}>
                    <Typography variant="h5" sx={{ fontWeight: 400, color: '#4a4a3a', maxWidth: '650px', mb: 4, lineHeight: 1.6 }}>
                      Building scalable <strong>Design Systems</strong> and high-performance <strong>Data Dashboards</strong>. 
                      Committed to code quality, robust component libraries, and resolving complex production challenges.
                    </Typography>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                    <Link href="/experience" style={{ textDecoration: 'none' }}>
                      <ActionButton
                        label="Explore Experience" 
                        fullWidth 
                      />
                    </Link>

                    <Link href="/education" style={{ textDecoration: 'none' }}>
                      <ActionButton 
                        label="View Education" 
                        variant="outline" 
                        icon={null} 
                        fullWidth 
                      />
                    </Link>
                  </Stack>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <SectionLink
                    href="https://portf-design-system.vercel.app/"
                    overline="Technical Deep Dive"
                    title="Browse Component Library"
                    icon={<IntegrationInstructionsIcon sx={{ fontSize: 20 }} />}
                  />
                </motion.div>
              </motion.div>
            </Box>

            <Box sx={{ width: { xs: '100%', md: '41.66%' } }}>
              <InfoCard
                image="/profile-photo.jpeg"
                title="Paula Marcos"
                subtitle="Collaborative Engineering & Product Ownership"
                href="/about"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ 
        py: 6, 
        bgcolor: `${colors.lavender}33`, 
        borderY: `1px solid ${colors.lavender}`,
        transition: 'all 0.5s ease'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            align="center"
            sx={{ 
              fontWeight: 900, 
              letterSpacing: { xs: '4px', md: '12px' }, 
              color: colors.purple,
              fontSize: { xs: '1rem', md: '1.5rem' },
              opacity: 0.8,
              textTransform: 'uppercase'
            }}
          >
            Reliability <span style={{ color: colors.olive }}>·</span> Collaboration <span style={{ color: colors.olive }}>·</span> Scalability
          </Typography>
        </Container>
      </Box>

      <Footer 
        exitMessage="Wait! Let’s turn this visit into a chat ✨"
        exitIcon={<span style={{ fontSize: '1.2rem' }}></span>}
      />

      <ThemeMenu />
      
    </Box>
  );
}