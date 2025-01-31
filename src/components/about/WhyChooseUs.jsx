import { Container, Typography, Grid, Box, Card, CardContent } from '@mui/material';
import ShieldIcon from '../../assets/shield.png';
import CheckIcon from '../../assets/check.png';
import SatisfactionIcon from '../../assets/satisfaction.png';
import ExpertIcon from '../../assets/expert.png';

const features = [
  {
    title: 'Guaranteed Satisfaction',
    description: 'We ensure that you stay 100%\nsatisfied with our offered services',
    icon: SatisfactionIcon,
    bg: '#E0E7FF'
  },
  {
    title: 'Confidential & Safe',
    description: 'All your private information is safe\nwith us',
    icon: ShieldIcon,
    bg: '#FEE2E2'
  },
  {
    title: 'Expert CA/CS Assistance',
    description: 'Prompt support from our in-house\nexpert professionals',
    icon: ExpertIcon,
    bg: '#F3E8FF'
  },
  {
    title: 'No Hidden Fee',
    description: 'Everything is put before you with\nno hidden charges or conditions',
    icon: CheckIcon,
    bg: '#ECFDF5'
  },
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#FAFAFA' }}>
      <Container>
        <Box sx={{ textAlign: 'left', mb: 6 }}>
          <Typography variant="body2" sx={{ 
            color: '#FF7E00', 
            fontWeight: 700, 
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            mb: 1.5
          }}>
            WHY REGISTERKARO.IN
          </Typography>
          <Typography variant="h3" sx={{ 
            fontWeight: 800, 
            mb: 2.5,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}>
            Why Choose Register Karo
          </Typography>
          <Typography variant="body1" sx={{ 
            color: '#6B7280', 
            maxWidth: '720px',
            lineHeight: '1.7',
            whiteSpace: 'pre-line',
            fontSize: '1.1rem'
          }}>
            {`It is with consistent services and results that build trust with the people and that in\nturn help us to serve the business better.`}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{
                backgroundColor: feature.bg,
                borderRadius: '16px',
                boxShadow: 'none',
                p: 3,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '24px'
              }}>
                <Box sx={{
                  width: 72,
                  height: 72,
                  bgcolor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  flexShrink: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)'
                }}>
                  <img src={feature.icon} alt={feature.title} style={{ width: '34px' }} />
                </Box>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 700,
                    mb: 1.2,
                    fontSize: '1.35rem'
                  }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#6B7280',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-line',
                    fontSize: '0.95rem'
                  }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;