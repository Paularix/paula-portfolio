import { motion } from 'framer-motion';
import { colors } from '../styles/theme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ActionButtonProps {
  label: string;
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const ActionButton = ({ 
  label, 
  variant = 'primary', 
  icon = <ArrowForwardIcon />, 
  fullWidth = false,
  onClick 
}: ActionButtonProps) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        background: isPrimary ? colors.purple : 'transparent',
        border: isPrimary ? 'none' : `2px solid ${colors.purple}`,
        padding: '14px 32px',
        borderRadius: '40px',
        fontWeight: 700,
        color: isPrimary ? colors.cream : colors.purple,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        fontSize: '1rem',
        width: fullWidth ? '100%' : 'auto',
        transition: 'all 0.2s ease',
      }}
    >
      {label} {icon}
    </motion.button>
  );
};