import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import portfolio from "./images/Akansha.webp";

interface SplitTextProps {
  text: string;
}

// Function to animate split text (letter by letter)
const SplitText: React.FC<SplitTextProps> = ({ text }) => {
  return (
    <motion.span style={{ display: "inline-block" }}>
      {text.split("").map((char:string, index:number) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.05, delay: index * 0.05 }}
          style={{ display: "inline-block", whiteSpace: "pre" }} // Preserve spaces
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Variants for section scroll animation
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
  return (
    <motion.div 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of section is visible
    >
      <Box 
        sx={{
          display: 'flex', 
          flexDirection: { xs: 'column-reverse', md: 'row' }, // Column for mobile, row for desktop
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'left' },
          padding: { xs: '20px', md: '40px 100px' }, 
          paddingTop: {xs:'90px', md:'100px'},
          paddingLeft: {xs:'2px', md:'300px'},
          gap: { xs: '40px', md: '80px' }, 
          pt: 10
        }}
      >
        {/* Left Side - Text */}
        <Box sx={{ maxWidth: '600px' }}>
          {/* 👋 Wavy Hand Animation */}
          <motion.div
            animate={{ rotate: [0, 20, -10, 20, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "inline-block" }} 
          >
            <Typography 
              sx={{ fontWeight: "800", fontSize: "24px", display: "inline-block" }} 
            >
              👋
            </Typography>
          </motion.div>

          {/* Split Text Animation */}
          <Typography sx={{ fontWeight: "800", fontSize: "24px", display: "inline-block", marginLeft: "10px" }}>
            <SplitText text="Hey there! I'm Akansha!" />
          </Typography>

          <Typography sx={{ pt: 2, pb: 2 }}>
            I'm a Frontend Developer with experience in crafting sleek, user-friendly interfaces. 
            From pixel-perfect designs to smooth, interactive experiences, I bring ideas to life with code. 
            Passionate about clean design, rigorous testing, and making the web a better place—one bug-free component at a time!
          </Typography>
          <Typography sx={{ pt: 2, pb: 5 }}>
            Always learning, always building. Let’s create something amazing! ✨
          </Typography>

          {/* <Button 
            component="a"
            href="https://drive.google.com/file/d/1NSqjKYffWADCsj5xSma5MINsXx3XahJO/view?usp=drive_link"
            download="YourName_Resume.pdf" // This will force download
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              backgroundColor: "#282A36", 
              color: "white", 
              fontWeight: "bold", 
              padding: "10px 20px", 
              borderRadius: "8px",
              '&:hover': { backgroundColor: "#1E1E2E" } 
            }}
          >
            Download Resume
          </Button> */}
          <Button 
              component="a"
              href="https://drive.google.com/file/d/1NSqjKYffWADCsj5xSma5MINsXx3XahJO/view?usp=drive_link" // Replace with your actual resume path
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Security best practice
              sx={{ 
                backgroundColor: "#282A36", 
                color: "white", 
                fontWeight: "bold", 
                padding: "10px 20px", 
                borderRadius: "8px",
                '&:hover': { 
                  backgroundColor: "#1E1E2E",
                  transform: "translateY(-2px)", // Optional: Add slight lift on hover
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)" // Optional: Add shadow on hover
                },
                transition: "all 0.2s ease" // Smooth hover transition
              }}
            >
              View Resume
            </Button>
        </Box>

        {/* Right Side - Profile Image with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}  
          whileInView={{ opacity: 1, scale: 1 }}  
          transition={{ duration: 1, ease: "easeOut" }}  
          viewport={{ once: true, amount: 0.2 }}
        >
          <Box sx={{pl:{xs:'25px', md:'0px'}}}>
            <img 
              src={portfolio} 
              alt="Akansha's Portrait"
              style={{ 
                width: "250px", 
                height: "250px", 
                borderRadius: "50%", 
                objectFit: "cover", 
                backgroundColor: "white" 
              }}
            />
          </Box>
        </motion.div>

      </Box>
    </motion.div>
  );
}

export default About;
