import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

const Qualification = () => {
  return (
    <Box sx={{ padding: '50px 20px', backgroundColor: '', textAlign: 'center' }}>
      <Typography variant="h5" sx={{ fontWeight: '600', mb: 4, color: '#1E1E2E' }}>
      Academic Qualifications
      </Typography>
      
      <Timeline sx={{ maxWidth: '600px', margin: '0 auto' }}>
        {[{
          title: "Master of Computer Application",
          institute: "Indira Gandhi Delhi Technical University for Women",
          year: "2019-2022",
          align: "right"
        }, {
          title: "Bachelor of Computer Application",
          institute: "Jamia Hamdard",
          year: "2016-2019",
          align: "left"
        }].map((edu, index) => (
          <TimelineItem key={index} position={edu.align as "left" | "right"}>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: '#1E1E2E' }}>
                <SchoolIcon fontSize="small" sx={{ color: 'white' }} />
              </TimelineDot>
              {index < 1 && <TimelineConnector sx={{ bgcolor: '#1E1E2E' }} />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: edu.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1E1E2E' }}>
                  {edu.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>{edu.institute}</Typography>
                <Typography variant="caption" sx={{ color: '#999' }}>{edu.year}</Typography>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Qualification;
