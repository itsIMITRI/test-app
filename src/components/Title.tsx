import { Typography } from '@mui/material';

const Title: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Typography variant="h4" mb={2} sx={{ color: 'black' }}>
      {label}
    </Typography>
  );
};

export default Title;
