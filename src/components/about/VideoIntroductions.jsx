import { Container, Typography, Grid, Box } from '@mui/material';
import bulbIcon from '../../assets/BulbIcon.png';
import broadCastIcon from '../../assets/BroadcastIcon.png';
import youtubeVideo from '../../assets/youtubeVideo.png';
import youtube from '../../assets/play-button.png';

const VideoIntroductions = () => {
  const sections = [
    {
      title: 'Explore ideas together',
      image: bulbIcon,
      content: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
    },
    {
      title: 'Bring those ideas to life',
      image: broadCastIcon,
      content: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#0F3557', py: 8, color: 'white' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
              Our Video Introductions
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#B0C4DE', mb: 4 }}>
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
            </Typography>

            {sections.map((section, index) => (
              <Box key={index} display="flex" alignItems="center" gap={2} mb={3}>
                <Box 
                  sx={{ 
                    width: 50, height: 50, 
                    backgroundColor: '#FF9800', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                  <img src={section.image} alt={section.title} width={50} />
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    {section.title}
                  </Typography>
                  <Typography variant="body1" color="#B0C4DE">
                    {section.content}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box 
              sx={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: 500, 
                borderRadius: 2, 
                overflow: 'hidden' 
              }}
            >
              <img src={youtubeVideo} alt="youtube" width="100%" style={{ filter: 'brightness(0.7)' }} />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                }}
              >
                <img src={youtube} alt="Play" width={150} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VideoIntroductions;
