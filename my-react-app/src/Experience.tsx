import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <Box 
      sx={{ 
         
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        background: '#F4F1EB', 
        minHeight: '100vh' 
      }} 
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div whileHover={{ scale: 1.02 }}>
        <Card 
          sx={{ 
            width: {xs:'350px', md:'600px'}, 
            borderRadius: '16px', 
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)', 
            overflow: 'hidden',
            background: '#FFFFFF' 
          }}
        >
          {/* Gradient Header */}
          <Box 
            sx={{ 
              background: 'linear-gradient(135deg, #1E1E2E, #4A4E69)', 
              height: '80px' 
            }} 
          />

          {/* Image Below Gradient */}
          <CardMedia
            component="img"
            height="200"
            image="/src/images/exp1.png"  // Update path if needed
            alt="Experience Image"
            sx={{ objectFit: 'cover' }}
          />

          {/* Experience Details */}
          <CardHeader
            title="Deloitte USI"
            subheader="September 05, 2022 - Present"
            sx={{ textAlign: 'center', padding: '10px', background: '#F8FAFC' }}
          />

          <CardContent sx={{ padding: '30px' }}>
            {/* <Typography 
              variant="h6" 
              sx={{ fontWeight: 'bold', color: '#1E1E2E', textAlign: 'center', marginBottom: '10px' }}
            >
              Analyst
            </Typography> */}

            <Typography 
              variant="body2" 
              sx={{ color: '#333333', lineHeight: 1.7, textAlign: 'justify' }}
            >
              • Developed user interfaces (UI) based on Figma designs ensuring seamless user experiences.<br/>
              • Optimized UI applications for performance and scalability.<br/>
              • Collaborated with design and backend teams for API integration.<br/>
              • Executed comprehensive testing and debugging for smooth functionality.<br/>
              • Engaged in daily scrums, feature enhancements, and code reviews.
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

export default Experience;
