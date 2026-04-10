'use client';

import { useState } from 'react';
import { Container, Typography, Box, Stack, Grid, Paper, Button } from '@mui/material';
import { alpha } from '@mui/material/styles'; 
import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BrushIcon from '@mui/icons-material/Brush';
import WaterIcon from '@mui/icons-material/Water';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

import { useThemeCustom } from '../context/ThemeContext';
import { Footer } from '../components/Footer';

const lifeActs = [
  { 
    id: 'stage',
    title: 'Music & Movement', 
    tag: 'Lifestyle',
    desc: 'I enjoy playing and experimenting with new instruments, from guitar to smaller ones like the ukulele. When I need to disconnect, I love taking long walks and enjoying the outdoors.', 
    Icon: MusicNoteIcon,
    images: ['/me.jpeg', '/me2.jpeg'] 
  },
  { 
    id: 'atelier',
    title: 'The Atelier', 
    tag: 'Maker',
    desc: 'I have a home studio for ceramics and painting. Working with my hands to create physical objects is my favorite way to disconnect from the digital world.',
    Icon: BrushIcon,
    images: ['/atelier.jpeg', '/paint.jpeg']
  },
  { 
    id: 'adventure',
    title: 'Wildlife & Adventure', 
    tag: 'Explorer',
    desc: 'Open Water certified diver 🤿. When I’m not underwater, I’m hiking with my two dogs, cycling, or practicing yoga. I thrive in nature.',
    Icon: WaterIcon,
    images: ['/dive.jpeg', '/wild1.jpeg']
  },
  { 
    id: 'costumes',
    title: 'The Joy of Costumes', 
    tag: 'Creative',
    desc: 'I live for themed parties and dressing up. For me, creativity isn’t just about code; it’s about playfulness and sharing fun moments with friends.',
    Icon: TheaterComedyIcon,
    images: ['/costumes.jpeg','/costumes2.jpeg']
  },
  { 
    id: 'cinema',
    title: 'Reading & Cinema', 
    tag: 'Interests',
    desc: 'I lose myself in psychological thrillers and Marvel marathons. I also love reading and spending time imagining the worlds and stories within the books I dive into. By the way, do you have a favorite superhero and why is it obviously Spider-Man? 🕸️',
    Icon: AutoStoriesIcon,
    images: ['/book.jpeg', ] 
  }
];

export default function About() {
  const { colors } = useThemeCustom(); 
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: colors.cream, 
      py: { xs: 4, md: 8 }, 
      overflowX: 'hidden',
      transition: 'background-color 0.5s ease' 
    }}>
      <Container maxWidth="lg">
        
        {/* Navigation */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button 
            startIcon={<ArrowBackIosNewIcon />} 
            sx={{ mb: 6, color: colors.olive, fontWeight: 800, textTransform: 'none' }}
          >
            Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <Grid container spacing={6} alignItems="flex-start" sx={{ mb: 12 }}>
          <Grid item xs={12} md={8}>
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <Typography variant="h2" sx={{ fontWeight: 900, color: colors.purple, mb: 3, fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1 }}>
                  Beyond the <br /> <span style={{ color: colors.olive }}>Editor</span>
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography variant="h6" sx={{ color: '#4a4a3a', lineHeight: 1.6, fontWeight: 500, mb: 3, maxWidth: '750px' }}>
                  Thanks for stopping by. Beyond writing code, I believe that my diverse background helps me approach technical problems from different perspectives.
                </Typography>
                
                <Typography variant="body2" sx={{ color: '#4a4a3a', opacity: 0.8, lineHeight: 1.8, maxWidth: '700px', mb: 2 }}>
                  Originally from <strong>Menorca</strong> and based in <strong>Barcelona</strong> for the last 6 years, I started my professional path in the arts. After an artistic baccalaureate, I focused on <strong>music and musical theater</strong>, performing with various bands while working in different sectors to support my studies.
                </Typography>

                <Typography variant="body2" sx={{ color: '#4a4a3a', opacity: 0.8, lineHeight: 1.8, maxWidth: '700px' }}>
                  My interest in technology started through gaming on <strong>PS4</strong>, which sparked a curiosity about software development. This led me to enroll in a <strong>Higher Technician (DAM)</strong> degree. Although I initially explored game development with <strong>C# and Unity</strong>, I soon discovered a stronger interest in the <strong>logic and architecture of web applications</strong>. Since then, I have focused my career on frontend engineering, applying my attention to detail to every project.
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>

  <Grid item xs={12} md={4}>
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
      <Box sx={{ 
        position: 'relative',
        maxWidth: '280px', 
        margin: '0 auto',
        borderRadius: '30px', 
        overflow: 'hidden',
        border: `2px solid ${colors.purple}`,
        boxShadow: `8px 8px 0px ${colors.lavender}`,
      }}>
        <img src="/profile-photo.jpeg" alt="Paula Marcos" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </Box>
    </motion.div>
  </Grid>
</Grid>

        {/* Pasiones Collage Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: colors.purple, mb: 4 }}>
              Other curiosities
            </Typography>
          </Grid>
          
          {lifeActs.map((act) => {
            const IconComponent = act.Icon;
            const isHovered = hoveredId === act.id;
            const validImages = act.images.filter(img => img !== '');

            return (
              <Grid item xs={12} key={act.id}>
                <motion.div 
                  onMouseEnter={() => setHoveredId(act.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  layout 
                >
                  <Paper elevation={0} sx={{ 
                    borderRadius: '40px', 
                    bgcolor: 'white',
                    border: `1px solid ${isHovered ? colors.purple : colors.lavender}`,
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '240px',
                    height: 'auto', 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isHovered ? `0 20px 40px ${alpha(colors.lavender, 0.3)}` : 'none',
                  }}>
                    
                    <Box sx={{ 
                      p: { xs: 4, md: 6 }, 
                      zIndex: 3, 
                      width: { xs: '100%', md: isHovered ? '55%' : '100%' },
                      transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 2 }}>
                        <Box sx={{ 
                            p: 1.5, 
                            bgcolor: isHovered ? colors.purple : alpha(colors.lavender, 0.2), 
                            borderRadius: '12px', 
                            display: 'flex', 
                            transition: '0.4s'
                        }}>
                          <IconComponent sx={{ color: isHovered ? colors.cream : colors.purple, fontSize: 28 }} />
                        </Box>
                        <Typography variant="caption" sx={{ color: colors.olive, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                          {act.tag}
                        </Typography>
                      </Stack>
                      
                      <Typography variant="h4" sx={{ fontWeight: 900, color: colors.purple, mb: 1, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                        {act.title}
                      </Typography>
                      
                      <Typography variant="body1" sx={{ 
                        color: '#4a4a3a', 
                        lineHeight: 1.7,
                        transition: 'all 0.5s ease'
                      }}>
                        {act.desc}
                      </Typography>
                    </Box>

                    <Box sx={{ 
                      width: isHovered ? '45%' : '0%',
                      opacity: isHovered ? 1 : 0,
                      height: '100%',
                      display: { xs: 'none', md: 'flex' },
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      pr: isHovered ? 4 : 0,
                      overflow: 'hidden'
                    }}>
                      <Stack direction="row" spacing={2} sx={{ minWidth: '400px', justifyContent: 'center' }}>
                        {validImages.map((imgUrl, index) => (
                          <Box 
                            key={imgUrl}
                            sx={{
                              width: '180px',
                              height: '180px',
                              borderRadius: '24px',
                              overflow: 'hidden',
                              boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                              flexShrink: 0
                            }}
                          >
                            <img 
                              src={imgUrl} 
                              alt={act.title} 
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                          </Box>
                        ))}
                      </Stack>
                    </Box>

                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

      </Container>

      <Footer 
        exitMessage="Your Spidey-sense says: 'Say hi!' 🕸️" 
        exitIcon={<span>🕷️</span>}
      />      
    </Box>
  );
}