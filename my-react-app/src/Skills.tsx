import { Box, Chip, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { motion } from "framer-motion";

// Import skill images
import javascript from "./images/javascript.webp";
import typescript from "./images/typescript.svg";
import react from "./images/react.webp";
import angular from "./images/angular.png";
import html from "./images/html.webp";
import css from "./images/css.svg";
import sql from "./images/sql.png";
import mui from "./images/mui.jpg";
import restapi from "./images/restapi.svg";
import git from "./images/git.png";
import bitbucket from "./images/bitbucket.webp";
import postman from "./images/postman.png";

// Skills array for cleaner code
const skills = [
  { name: "JavaScript", img: javascript },
  { name: "TypeScript", img: typescript },
  { name: "React", img: react },
  { name: "Angular", img: angular },
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "SQL", img: sql },
  { name: "MUI", img: mui },
  { name: "RESTful API", img: restapi },
  { name: "Git", img: git },
  { name: "Bitbucket", img: bitbucket },
  { name: "Postman", img: postman }
];

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box 
      sx={{ 
        pt: 10,
        pb: 20, 
        background: '#F4F1EB', 
        minHeight: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: isMobile ? 2 : 0 // Add horizontal padding on mobile
      }} 
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Section Title */}
      <Typography 
        variant={isMobile ? "h5" : "h4"}
        sx={{ 
          fontWeight: 'bold', 
          color: '#1E1E2E', 
          textAlign: 'center', 
          marginBottom: '20px',
          px: isMobile ? 2 : 0 // Prevent text from touching edges on mobile
        }}
      >
        Building Blocks of My Craft
      </Typography>

      <Divider sx={{ 
        width: isMobile ? '40px' : '60px', 
        borderBottom: '3px solid #1E1E2E', 
        marginBottom: '30px' 
      }} />

      {/* Skills Grid */}
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 
                                isTablet ? 'repeat(3, 1fr)' : 
                                'repeat(auto-fit, minmax(160px, 1fr))', 
          gap: isMobile ? 2 : 3, 
          width: isMobile ? '100%' : isTablet ? '90%' : '70%',
          justifyContent: 'center',
          px: isMobile ? 1 : 0 // Add padding on mobile
        }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Chip
              avatar={<Avatar src={skill.img} sx={{ 
                width: isMobile ? 24 : 32, 
                height: isMobile ? 24 : 32 
              }} />}
              label={skill.name}
              variant="filled"
              sx={{
                height: isMobile ? '36px' : '40px',
                width: isMobile ? '100%' : '160px',
                fontSize: isMobile ? '14px' : '18px',
                fontWeight: 600,
                background: '#1E1E2E',
                color: 'white',
                '&:hover': { background: '#4A4E69' },
                '& .MuiChip-label': {
                  overflow: 'visible' // Ensure text doesn't get cut off
                }
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
