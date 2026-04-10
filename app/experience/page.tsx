'use client';

import { useState } from 'react';
import {
  Container, Typography, Box, Stack, Chip,
  Accordion, AccordionSummary, AccordionDetails,
  IconButton, Button, Divider
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupsIcon from '@mui/icons-material/Groups';
import LayersIcon from '@mui/icons-material/Layers';
import BugReportIcon from '@mui/icons-material/BugReport';
import Link from 'next/link';

import { useThemeCustom } from '../context/ThemeContext';

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  testimonials: Array<Testimonial>;
}

interface PillarCardProps {
  icon: React.ReactNode;
  name: string;
  desc: string;
}

const TestimonialOverlay = ({ isOpen, onClose, testimonials }: TestimonialOverlayProps) => {
  const { colors } = useThemeCustom();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: alpha(colors.purple, 0.96), zIndex: 100,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '40px', cursor: 'pointer', borderRadius: '24px'
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            style={{ width: '100%', maxWidth: '500px', position: 'relative' }}
          >
            <IconButton sx={{ position: 'absolute', top: -20, right: -10, color: 'white' }}>
              <CloseIcon fontSize="small" />
            </IconButton>
            <Stack spacing={5}>
              {testimonials?.map((t: Testimonial, i: number) => (
                <Box key={i}>
                  <Typography variant="h6" sx={{ color: colors.cream, fontStyle: 'italic', mb: 1.5, fontWeight: 400, textAlign: 'center', lineHeight: 1.5 }}>
                    {t.text}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ textAlign: 'right', fontWeight: 800, color: colors.lavender }}>
                    — {t.author}
                  </Typography>
                  {i < testimonials.length - 1 && <Divider sx={{ mt: 4, borderColor: alpha(colors.lavender, 0.2) }} />}
                </Box>
              ))}
            </Stack>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PillarCard = ({ icon, name, desc }: PillarCardProps) => {
  const { colors } = useThemeCustom();

  return (
    <Box sx={{
      p: 2,
      borderRadius: 3,
      bgcolor: alpha(colors.cream, 0.5),
      border: `1px solid ${colors.lavender}`,
      transition: 'all 0.5s ease'
    }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5, color: colors.purple }}>
        {icon}
        <Typography variant="body2" sx={{ fontWeight: 800 }}>{name}</Typography>
      </Stack>
      <Typography variant="caption" display="block" sx={{ color: '#5f5f48', lineHeight: 1.4 }}>
        {desc}
      </Typography>
    </Box>
  );
};

const experiences = [
  {
    id: 'aizon',
    company: 'Aizon',
    url: 'https://www.aizon.ai',
    role: 'Frontend Solution Architect',
    period: '2024',
    context: 'Aizon builds AI-powered solutions for regulated manufacturing industries. The frontend stack powers complex data visualisation and workflow tooling used by engineers and scientists daily.',
    points: [
      'Developed key parts of a new modern web application using **React and TypeScript**, migrating critical features from Python/JSON-based legacy tools to a **scalable and maintainable frontend architecture**.',
      'Designed and implemented a **reusable component library** fully documented with **Storybook**, establishing the technical standard for consistency and ease of adoption across the engineering team.',
      'Created and maintained unit and integration tests using **Jest and React Testing Library** to guarantee reliability, reduce regressions, and support continuous delivery workflows.',
      'Collaborated closely with product managers, UX designers, backend engineers and architects throughout the **full development cycle** — from technical refinement to post-release support.',
      'Contributed to **code reviews and internal standards**, actively helping raise the bar for frontend code quality and alignment across the team.',
      'Provided **technical insights** to bridge the gap between backend capabilities and frontend needs, ensuring features were well-defined before implementation began.',
    ],
    skills: ['React', 'TypeScript', 'Storybook', 'TanStack Query', 'Context API', 'Vite', 'AI Integration', 'Jira', 'Confluence', 'Jest'],    
    pillars: [
      {
        name: 'System Migration',
        desc: 'Transformed complex Python/JSON-based tooling into a modern, scalable React/TypeScript web application.',
        icon: <ViewQuiltIcon fontSize="small" />,
      },
      {
        name: 'Component Architecture',
        desc: 'Defined and documented a reusable component system in Storybook, setting the frontend standard for the team.',
        icon: <LayersIcon fontSize="small" />,
      },
      {
        name: 'Quality & Testing',
        desc: 'Jest + RTL test suites ensuring reliability and supporting a continuous delivery pipeline.',
        icon: <BugReportIcon fontSize="small" />,
      },
      {
        name: 'Cross-Team Collaboration',
        desc: 'Constant alignment with PMs, UX and backend to translate requirements into robust technical solutions.',
        icon: <GroupsIcon fontSize="small" />,
      },
    ],
    testimonials: [
      {
        text: "Paula has a unique eye for UI consistency. Her work on our component library was a game-changer for the team's velocity.",
        author: 'Engineering Lead @ Aizon',
      },
    ],
  },
  {
    id: 'spotlio',
    company: 'Spotlio',
    url: 'https://www.spotlio.com',
    role: 'Frontend Developer & Delivery Application Specialist',
    period: '2021 – 2023',
    context: 'Spotlio provides digital platforms for ski resorts worldwide — guide apps, interactive maps, and ticketing systems. Connectivity in mountain environments makes performance a non-negotiable constraint.',
    points: [
      'Developed highly responsive web and mobile interfaces for ski resorts, implementing **Figma designs pixel-perfect** using HTML, CSS/Sass and JavaScript.',
      'Focused on **performance optimisation** as a core requirement — users operated under severe mountain connectivity constraints where every kilobyte mattered.',
      'Selected for a key **hybrid role** combining Frontend development with advanced **Tier 3 technical support**, resolving complex production incidents and configuring products directly for resort clients.',
      'Ensured service continuity during peak ski seasons as part of the **24/7 on-call rotation**, collaborating in real time with international teams under tight deadlines.',
      'Participated in the **full Software Development Lifecycle** — from development and QA through to deployment and post-release stability monitoring.',
      'Significantly improved live product reliability by resolving recurring incidents and establishing **better configuration standards** across resort deployments.',
    ],
    skills: ['JavaScript', 'CMS Strapi', 'Firebase', 'Postman', 'App Store', 'Sass', 'Webpack', 'DevTools', 'JSON Editor', 'Figma'],    
    pillars: [
      {
        name: 'Performance-First Dev',
        desc: 'Frontend optimised for real-world low-connectivity constraints in mountain resort environments.',
        icon: <PhoneIphoneIcon fontSize="small" />,
      },
      {
        name: 'Tier 3 Support',
        desc: 'Resolution of complex production incidents and direct product configuration to improve live reliability.',
        icon: <ConstructionIcon fontSize="small" />,
      },
      {
        name: 'Full Delivery Ownership',
        desc: 'End-to-end participation across the SDLC — development, QA, deployment and production support.',
        icon: <VerifiedUserIcon fontSize="small" />,
      },
      {
        name: 'Cross-Cultural Teamwork',
        desc: 'Real-time collaboration with international teams to maintain service continuity during peak seasons.',
        icon: <AssessmentIcon fontSize="small" />,
      },
    ],
    testimonials: [
      {
        text: "Spotlio has 3 requirements for its employees: to be reliable, proactive and diligent — and Paula meets all three, exceeding our expectations.",
        author: 'HR Team @ Spotlio',
      },
      {
        text: "Working with Paula gives you the peace of mind that if a problem arises, she will roll up her sleeves and get it done with great judgment.",
        author: 'Frontend Colleague @ Spotlio',
      },
      {
        text: "Before anything reached my hands for testing, she had already made sure it worked under the toughest conditions. A natural enabler who makes the whole team's work easier.",
        author: 'QA Specialist @ Spotlio',
      },
    ],
  },
];

const previousExp = [
  {
    company: 'Hertz',
    role: 'Rental Service Specialist',
    period: '2017 – 2020',
    description: 'Customer-facing role in a high-volume international environment. Developed strong communication, problem-solving under pressure, and cross-cultural collaboration skills — directly transferable to client-facing engineering and agile team contexts.',
  },
  {
    company: "Women's Secret",
    role: 'Assistant Store Manager',
    period: '2014 – 2017',
    description: 'Managed a team, drove sales strategy, coordinated visual merchandising and inventory control. Built leadership and organisational skills in a fast-paced retail environment.',
  },
  {
    company: 'Windsor',
    role: 'Sales Assistant',
    period: '2013',
    description: 'Personalised customer service and high-volume sales in a competitive fashion retail setting.',
  },
  {
    company: 'Stradivarius',
    role: 'Sales Assistant',
    period: '2012',
    description: 'Team collaboration and efficient inventory management in a structured retail environment.',
  },
];

export default function Experience() {
  const { colors } = useThemeCustom();
  const [activeTestimonial, setActiveTestimonial] = useState<string | null>(null);

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: colors.cream,
      py: { xs: 4, md: 8 },
      transition: 'background-color 0.5s ease'
    }}>
      <Container maxWidth="lg">

        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button
            startIcon={<ArrowBackIosNewIcon />}
            sx={{ mb: 4, color: colors.olive, fontWeight: 600, textTransform: 'none' }}
          >
            Back to Home
          </Button>
        </Link>

        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 900, 
              mb: 1, 
              color: colors.purple, 
              fontSize: { xs: '2.5rem', md: '3.75rem' }, 
              transition: 'color 0.5s ease' 
            }}
          >
            Experience
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: colors.olive, 
              fontWeight: 500, 
              maxWidth: 750, 
              transition: 'color 0.5s ease',
              lineHeight: 1.6 
            }}
          >
            Frontend engineering with <strong>4 years of experience</strong> and a focus on architecture, quality and real-world delivery — from component systems to production incident response.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '1000px', mx: 'auto', mb: 10 }}>
          {experiences.map((exp) => (
            <Accordion
              key={exp.id}
              elevation={0}
              sx={{
                mb: 3,
                borderRadius: '24px !important',
                border: `1px solid ${colors.lavender}`,
                bgcolor: 'white',
                overflow: 'hidden',
                transition: 'border 0.5s ease',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: colors.purple }} />}
                sx={{ p: { xs: 2, md: 4 } }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  sx={{ width: '100%', pr: 2 }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>{exp.role}</Typography>
                    <Typography variant="subtitle1" sx={{ color: colors.purple, fontWeight: 600, transition: 'color 0.5s ease' }}>
                      {exp.company}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: { xs: 1, sm: 0 } }}>
                    {exp.id === 'aizon' && (
                      <Chip
                        label="Current"
                        size="small"
                        sx={{ fontWeight: 800, bgcolor: alpha(colors.olive, 0.12), color: colors.olive, fontSize: '0.65rem', border: `1px solid ${alpha(colors.olive, 0.3)}` }}
                      />
                    )}
                    <Chip
                      label={exp.period}
                      sx={{ fontWeight: 700, bgcolor: colors.lavender, color: colors.purple, transition: 'all 0.5s ease' }}
                    />
                  </Stack>
                </Stack>
              </AccordionSummary>

              <AccordionDetails sx={{ px: { xs: 2, md: 5 }, pb: 4, position: 'relative' }}>
                <Divider sx={{ mb: 3 }} />

                <Box sx={{ mb: 3, p: 2, borderRadius: '12px', bgcolor: alpha(colors.lavender, 0.3), borderLeft: `3px solid ${colors.olive}` }}>
                  <Typography variant="body2" sx={{ color: '#4a4a3a', fontStyle: 'italic', fontWeight: 500 }}>
                    {exp.context}
                  </Typography>
                </Box>

                {/* Sustitución de Grid container por Box Flex */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' }, 
                  gap: 4 
                }}>
                  {/* Bloque Izquierdo (Equivalente a md: 7) */}
                  <Box sx={{ width: { xs: '100%', md: '58.33%' } }}>
                    <Typography variant="subtitle2" sx={{ color: colors.olive, fontWeight: 800, textTransform: 'uppercase', mb: 2 }}>
                      Key Contributions
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: '#4a4a3a' }}>
                      {exp.points.map((p, i) => (
                        <li key={i}>
                          <Typography 
                            variant="body1" 
                            sx={{ mb: 1.5 }}
                            dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                          />
                        </li>
                      ))}
                    </Box>
                  </Box>

                  {/* Bloque Derecho (Equivalente a md: 5) */}
                  <Box sx={{ width: { xs: '100%', md: '41.66%' } }}>
                    <Typography variant="subtitle2" sx={{ color: colors.olive, fontWeight: 800, textTransform: 'uppercase', mb: 2 }}>
                      Applied Expertise
                    </Typography>
                    <Stack spacing={2}>
                      {exp.pillars.map((pillar, pIdx) => (
                        <PillarCard key={pIdx} {...pillar} />
                      ))}
                    </Stack>
                  </Box>
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="subtitle2" sx={{ color: colors.olive, fontWeight: 800, textTransform: 'uppercase', mb: 2 }}>
                    Tech Stack & Skills
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                    {exp.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{ color: colors.olive, borderColor: colors.olive, transition: 'all 0.5s ease' }}
                      />
                    ))}
                  </Stack>
                </Box>

                <Stack direction="row" justifyContent="right" sx={{ mt: 5 }}>
                  <Link href={exp.url} target="_blank" style={{ textDecoration: 'none' }}>
                    <Button
                      endIcon={<span>↗</span>}
                      sx={{ color: colors.purple, fontWeight: 800, textTransform: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                      Visit {exp.company}
                    </Button>
                  </Link>
                </Stack>

                <TestimonialOverlay
                  isOpen={activeTestimonial === exp.id}
                  onClose={() => setActiveTestimonial(null)}
                  testimonials={exp.testimonials}
                />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ mt: 10, maxWidth: '1000px', mx: 'auto' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: colors.olive, display: 'flex', alignItems: 'center', gap: 1 }}>
            <BusinessCenterIcon /> Previous Career Background
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b6b55', mb: 3, fontStyle: 'italic' }}>
            Before transitioning into tech, a customer-facing career that built communication, leadership and resilience under pressure — soft skills that still show up every day in engineering work.
          </Typography>
          {previousExp.map((exp, idx) => (
            <Accordion
              key={idx}
              elevation={0}
              sx={{ bgcolor: 'transparent', borderBottom: `1px solid ${colors.lavender}`, transition: 'border 0.5s ease' }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: colors.purple }} />}>
                <Typography sx={{ fontWeight: 600 }}>{exp.role} @ {exp.company}</Typography>
                <Typography variant="caption" sx={{ ml: 'auto', mr: 2, color: colors.olive }}>{exp.period}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: '#6b6b55', fontStyle: 'italic' }}>{exp.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

      </Container>
    </Box>
  );
}