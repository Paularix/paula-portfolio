'use client';

import {
  Container, Typography, Box, Paper, Stack, Button,
  Divider, List, ListItem, ListItemIcon, ListItemText, Chip,
  Tooltip, IconButton
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TerminalIcon from '@mui/icons-material/Terminal';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { CloudCircleOutlined } from '@mui/icons-material';

import { useThemeCustom } from '../context/ThemeContext';

interface BoxAccordionProps {
  title: string;
  subtitle: string;
  badgeText: string;
  infoTag: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  accentColor: string;
}

const BoxAccordion = ({ title, subtitle, badgeText, infoTag, description, details, icon, accentColor }: BoxAccordionProps) => {
  const { colors } = useThemeCustom();
  return (
    <motion.div whileHover="hover" initial="initial">
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 2.5, md: 3 }, 
          borderRadius: '24px', 
          border: `1px solid ${colors.lavender}`, 
          bgcolor: 'white', 
          position: 'relative', 
          overflow: 'hidden', 
          transition: 'all 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: { md: '200px' }, 
          '&:hover': { 
            borderColor: accentColor, 
            boxShadow: `0 10px 30px rgba(0,0,0,0.05)`,
            justifyContent: 'flex-start' 
          } 
        }}
      >
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', bgcolor: accentColor }} />

        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box sx={{ p: 0.8, bgcolor: colors.lavender, borderRadius: '10px', display: 'flex', color: accentColor }}>
                {icon}
              </Box>
              <Typography variant="caption" sx={{ fontWeight: 800, color: accentColor, textTransform: 'uppercase', fontSize: '0.65rem' }}>{badgeText}</Typography>
            </Stack>
            <motion.div variants={{ initial: { rotate: 0 }, hover: { rotate: 45 } }}>
              <AddIcon sx={{ color: colors.lavender, fontSize: 20 }} />
            </motion.div>
          </Stack>

          <Typography variant="h6" sx={{ fontWeight: 800, mt: 1.5, mb: 0, fontSize: '1.15rem' }}>{title}</Typography>
          <Typography variant="body2" sx={{ color: colors.olive, mb: 0.5, fontWeight: 600, fontSize: '0.9rem' }}>{subtitle}</Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 700, mb: 0.5, fontSize: '0.75rem', mt: 0.5 }}>
            {infoTag}
          </Typography>
          <Typography variant="body2" sx={{ color: '#4a4a3a', mb: 1, fontStyle: 'italic', fontSize: '0.85rem', lineHeight: 1.4 }}>
            {description}
          </Typography>
        </Box>

        <motion.div 
          variants={{ 
            initial: { height: 0, opacity: 0, marginTop: 0 }, 
            hover: { height: 'auto', opacity: 1, marginTop: 16 } 
          }} 
          transition={{ duration: 0.4 }} 
          style={{ overflow: 'hidden' }}
        >
          <Divider sx={{ mb: 2, opacity: 0.5 }} />
          <List sx={{ p: 0 }}>
            {details.map((detail: string, i: number) => (
              <ListItem key={i} sx={{ px: 0, py: 0.3 }}>
                <ListItemIcon sx={{ minWidth: 28, color: accentColor }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 15 }} />
                </ListItemIcon>
                <ListItemText 
                  primary={detail} 
                  primaryTypographyProps={{ variant: 'body2', fontWeight: 600, color: accentColor, fontSize: '0.8rem' }} 
                />
              </ListItem>
            ))}
          </List>
        </motion.div>
      </Paper>
    </motion.div>
  );
};

interface ChipGroupAccordionProps {
  title: string;
  items: string[];
  accentColor: string;
}

const ChipGroupAccordion = ({ title, items, accentColor }: ChipGroupAccordionProps) => (
  <motion.div initial="initial" whileHover="hover">
    <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)', pb: 1.5, mb: 1.5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ cursor: 'pointer' }}>
        <Typography variant="subtitle2" sx={{ color: accentColor, fontWeight: 800, textTransform: 'uppercase', fontSize: '0.7rem' }}>{title}</Typography>
        <motion.div variants={{ initial: { x: 0 }, hover: { x: 5 } }}><ArrowForwardIosIcon sx={{ color: accentColor, fontSize: '0.8rem' }} /></motion.div>
      </Stack>
      <motion.div variants={{ initial: { height: 0, opacity: 0, marginTop: 0 }, hover: { height: 'auto', opacity: 1, marginTop: 12 } }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {items.map((item: string) => (
            <Chip key={item} label={item} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 600, fontSize: '0.7rem' }} />
          ))}
        </Box>
      </motion.div>
    </Box>
  </motion.div>
);

interface CardContainerProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant?: 'filled' | 'outlined';
  accentColor: string;
  filledTextColor?: string;
  showLanguages?: boolean;
}

const CardContainer = ({ title, icon, children, variant = 'filled', accentColor, filledTextColor, showLanguages = false }: CardContainerProps) => {
  const { colors } = useThemeCustom();
  return (
    <Paper elevation={0} sx={{
      p: 2,
      borderRadius: '24px',
      bgcolor: variant === 'filled' ? accentColor : 'transparent',
      color: variant === 'filled' ? filledTextColor : colors.purple,
      border: variant === 'outlined' ? `2px solid ${accentColor}` : 'none',
      overflow: 'hidden',
      height: '100%',
      position: 'relative'
    }}>
      {showLanguages && (
        <Tooltip
          title={
            <Box sx={{ p: 1 }}>
              <Typography variant="caption" display="block" sx={{ fontWeight: 800, color: colors.lavender, mb: 0.5 }}>LANGUAGES</Typography>
              <Typography variant="body2"><strong>English:</strong> Full Professional Proficiency — international teams, daily communication</Typography>
              <Typography variant="body2"><strong>Spanish:</strong> Native</Typography>
              <Typography variant="body2"><strong>Catalan:</strong> Native</Typography>
            </Box>
          }
          arrow
          placement="left"
        >
          <IconButton
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              color: variant === 'filled' ? filledTextColor : accentColor,
              bgcolor: alpha('#fff', 0.1),
              '&:hover': { bgcolor: alpha('#fff', 0.2) }
            }}
          >
            <LanguageIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, fontSize: '1.2rem' }}>
        {icon} {title}
      </Typography>
      <Box>{children}</Box>
    </Paper>
  );
};

const AchievementTile = ({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) => {
  const { colors } = useThemeCustom();
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
      <Box sx={{ mt: 0.5, p: 0.8, bgcolor: 'white', borderRadius: '10px', display: 'flex', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>{icon}</Box>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 800, lineHeight: 1.2, color: colors.purple }}>{title}</Typography>
        <Typography variant="caption" sx={{ color: colors.olive, fontWeight: 700, textTransform: 'uppercase' }}>{subtitle}</Typography>
      </Box>
    </Box>
  );
};

export default function Education() {
  const { colors } = useThemeCustom();

  const educationData = [
    {
      id: 'bootcamp',
      badgeText: 'Bootcamp',
      title: 'Full Stack JavaScript',
      subtitle: 'Fundació Esplai',
      infoTag: 'Barcelona · 2023',
      description:
        'Intensive immersion in modern JavaScript ecosystems, covering both frontend and backend. Project-based learning with agile workflows and team collaboration from day one.',
      details: [
        'Node.js + Express — REST API design & server-side logic',
        'React — component-driven UI development',
        'MongoDB — NoSQL database design and integration',
        'Agile methodologies & collaborative git workflows',
        'Full-stack projects from concept to deployment',
      ],
      icon: <TerminalIcon sx={{ fontSize: 18 }} />,
      color: colors.olive,
    },
    {
      id: 'uoc',
      badgeText: 'Higher Degree (FP)',
      title: 'Multiplatform Application Development (DAM)',
      subtitle: 'Universitat Oberta de Catalunya (UOC)',
      infoTag: 'Online · 2020 – 2022',
      description:
        'Comprehensive software engineering programme covering OOP, databases, mobile development, IoT and Big Data. Graduated with outstanding academic performance across technical subjects.',
      details: [
        'OOP with Java & .NET — object-oriented design and BBDD access',
        'Native Mobile App Development — Android',
        'IoT — Internet of Things application development',
        'Big Data Project — data pipelines and macrodata processing',
        'Database Design & SQL — relational modelling from scratch',
        'OS Administration & systems integration',
      ],
      icon: <WorkspacePremiumIcon sx={{ fontSize: 18 }} />,
      color: colors.purple,
    },
  ];

  const skillCategories = [
    { 
      id: 'langs', 
      name: 'Core & Architecture', 
      items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'Node.js', 'Design Systems'] 
    },
    { 
      id: 'frames', 
      name: 'State & Data Flow', 
      items: ['React', 'Next.js (App Router)', 'TanStack Query', 'Context API', 'Redux Toolkit'] 
    },
    { 
      id: 'testing', 
      name: 'Testing & Reliability', 
      items: ['Jest', 'React Testing Library', 'Playwright (E2E)', 'Component Testing', 'DevTools Debugging'] 
    },
    { 
      id: 'backend', 
      name: 'API & Middleware', 
      items: ['Supabase', 'Firebase Auth/DB', 'Headless CMS (Strapi)', 'Postman', 'RESTful APIs'] 
    },
    { 
      id: 'tools', 
      name: 'Tooling & DX', 
      items: ['Vercel', 'Vite/Webpack', 'CI/CD (GitHub Actions)', 'App Store Connect', 'AI-Assisted Workflow'] 
    },
    { 
      id: 'collab', 
      name: 'Management & Delivery', 
      items: ['Jira', 'Confluence (Technical Writing)', 'Figma to Code', 'SDLC'] 
    },
  ];

  const continuousLearning = [
    { title: 'Next.js Official Foundations: App Router & Server Components', provider: 'Vercel Official', icon: <TerminalIcon sx={{ fontSize: 18, color: colors.purple }} /> },
    { title: 'Advanced React: Redux, React-Router & Auth0 Security', provider: 'Udemy', icon: <CodeIcon sx={{ fontSize: 18, color: colors.purple }} /> },
    { title: 'Unit Testing Foundations with JavaScript', provider: 'Udemy', icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 18, color: colors.purple }} /> },
    { title: 'Version Control Systems: Git from Zero to Expert', provider: 'Udemy', icon: <StorageIcon sx={{ fontSize: 18, color: colors.purple }} /> },
    { title: 'Modern Frontend Libraries: React JS & Hooks Architecture', provider: 'Udemy', icon: <IntegrationInstructionsIcon sx={{ fontSize: 18, color: colors.purple }} /> },
    { title: 'Introduction to GraphQL & API Design', provider: 'Udemy', icon: <StorageIcon sx={{ fontSize: 18, color: colors.purple }} /> },
    { title: 'AWS Cloud Technical Essentials', provider: 'Coursera', icon: <CloudCircleOutlined sx={{ fontSize: 18, color: colors.purple }} /> },
    { title: 'Python for Beginners: Core Programming Foundations', provider: 'Udemy', icon: <CodeIcon sx={{ fontSize: 18, color: colors.purple }} /> },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: colors.cream, py: { xs: 4, md: 8 }, overflowX: 'hidden', transition: 'background-color 0.5s ease' }}>
      <Container maxWidth="lg">

        <Stack direction="row" sx={{ mb: 4 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button startIcon={<ArrowBackIosNewIcon />} sx={{ color: colors.olive, fontWeight: 600, textTransform: 'none' }}>Back to Home</Button>
          </Link>
        </Stack>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 1, color: colors.purple, fontSize: { xs: '2.5rem', md: '3.5rem' }, transition: 'color 0.5s ease' }}>
            Education & Skills
          </Typography>
          <Typography variant="body1" sx={{ color: colors.olive, fontWeight: 500, maxWidth: 600 }}>
            Bridging formal software engineering principles with modern web architectures to build reliable, user-centric digital products
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'flex-start',
          mb: 4,
          width: '100%',
        }}>

          <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 70%' }, width: '100%' }}>
            <Stack spacing={2.5}>
              {educationData.map((edu) => (
                <BoxAccordion key={edu.id} {...edu} accentColor={edu.color} />
              ))}
            </Stack>
          </Box>

          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, width: '100%' }}>
            <Stack spacing={3}>
              <CardContainer
                title="Skills"
                icon={<CodeIcon />}
                variant="filled"
                accentColor={colors.olive}
                filledTextColor={colors.cream}
                showLanguages={true}
              >
                <Stack spacing={1.5}>
                  {skillCategories.map((cat) => (
                    <ChipGroupAccordion key={cat.id} title={cat.name} items={cat.items} accentColor={colors.lavender} />
                  ))}
                </Stack>
              </CardContainer>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ width: '100%' }}>
          <CardContainer
            title="Other Technical Credentials"
            icon={<WorkspacePremiumIcon fontSize="small" />}
            variant="outlined"
            accentColor={colors.olive}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', rowGap: 2 }}>
              {continuousLearning.map((cert, idx) => (
                <Box key={idx} sx={{ flex: { xs: '0 0 100%', md: '0 0 50%' }, p: 1.5, display: 'flex' }}>
                  <Box sx={{ p: 2, borderRadius: '16px', width: '100%', transition: '0.2s', display: 'flex', alignItems: 'center', '&:hover': { bgcolor: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' } }}>
                    <AchievementTile title={cert.title} subtitle={cert.provider} icon={cert.icon} />
                  </Box>
                </Box>
              ))}
            </Box>
            <Divider sx={{ mt: 4, mb: 2, opacity: 0.3 }} />
            <Typography variant="caption" sx={{ color: colors.olive, fontStyle: 'italic', display: 'block', textAlign: 'center' }}>- Always learning —</Typography>
          </CardContainer>
        </Box>

      </Container>
    </Box>
  );
}