import { Box, Button, Divider, IconButton, TextField, Typography, useTheme } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';

const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Too short!').required('Name is required'),
    message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const formik = useFormik({
        initialValues: {
            name: '',
            subject: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log('Form Submitted:', values);
            alert('Message sent successfully!');
            resetForm();
        },
    });

    return (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Box sx={{ 
                 width:{xs:'300px', md:'895px'},
                pt: 5, 
                // px: isMobile ? 2 : 30,
                pl: isMobile ? '38px': '240px',
                pr: isMobile ? '0px': '29px', 
                pb: 10, 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                justifyContent: 'center', 
                alignItems: 'stretch',
                gap: isMobile ? 4 : 0
            }}>
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <Box sx={{ 
                        pr: { xs: 0, md: 10 }, 
                        flex: 1, 
                        pt: { xs: 0, md: '50px' },
                        textAlign: isMobile ? 'center' : 'left'
                    }}>
                        <Typography sx={{ fontSize: '27px', fontWeight: 600, pb: 2 }}>Let's get in Touch !</Typography>
                        <Typography sx={{ fontSize: '20px', fontWeight: 400, pb: 2 }}>
                            Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions.
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-start' }}>
                            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pb: 2, alignItems: 'flex-start' }}>
                                <IconButton sx={{ color: '#FFBF00' }}><MailIcon /></IconButton>
                                <Box>
                                    <Typography sx={{ fontSize: '15px', fontWeight: 400, textAlign:'justify' }}>Email </Typography>
                                    <Typography sx={{ fontSize: '15px', fontWeight: 400 }}>akanshabhandari221@gmail.com </Typography>
                                </Box>
                            </Box> */}
                            <Box 
                            component="a"
                            href="mailto:akanshabhandari221@gmail.com" 
                            sx={{ 
                                display: 'flex', 
                                flexDirection: 'row', 
                                pb: 2, 
                                alignItems: 'flex-start',
                                textDecoration: 'none', // removes underline
                                color: 'inherit', // keeps text color consistent
                                cursor: 'pointer', // shows pointer cursor on hover
                                '&:hover': {
                                opacity: 0.8 // optional hover effect
                                }
                            }}
                            >
                            <IconButton sx={{ color: '#FFBF00' }}><MailIcon /></IconButton>
                            <Box>
                                <Typography sx={{ fontSize: '15px', fontWeight: 400, textAlign: 'justify' }}>
                                Email
                                </Typography>
                                <Typography sx={{ fontSize: '15px', fontWeight: 400 }}>
                                akanshabhandari221@gmail.com
                                </Typography>
                            </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <IconButton sx={{ color: '#023020' }}><PhoneIcon /></IconButton>
                                <Box>
                                    <Typography sx={{ fontSize: '15px', fontWeight: 400, textAlign:'justify' }}>Phone</Typography>
                                    <Typography sx={{ fontSize: '15px', fontWeight: 400, pb: 1 }}>1234567890 </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{ width: '100%', my: 2 }} />
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: { xs: 'row', sm: 'row' }, 
                                gap: { xs: 1, sm: 30 },
                                alignItems: 'center',
                                width: '100%',
                                justifyContent: { xs: 'center', md: 'flex-start' }
                            }}>
                                
                                <Box 
                                component="a" 
                                href="https://www.linkedin.com/in/akansha-bhandari-814856193/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                <Typography sx={{ fontSize: '15px', fontWeight: 400, display: 'flex', alignItems: 'center' }}>
                                    <IconButton sx={{ color: 'blue' }}><LinkedInIcon /></IconButton>
                                    LinkedIn
                                </Typography>
                                </Box>
                                <Typography sx={{ fontSize: '15px', fontWeight: 400, display: 'flex', alignItems: 'center' }}>
                                    <IconButton sx={{ color: 'black' }}><GitHubIcon /></IconButton>
                                    Github
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
                
                {!isMobile && (
                    <Divider 
                        orientation="vertical" 
                        flexItem 
                        sx={{ 
                            borderRightWidth: 2, 
                            height: '80%', 
                            minHeight: '380px', 
                            borderColor: '#ccc',
                            mx: 4
                        }} 
                    />
                )}
                
                {isMobile && (
                    <Divider 
                        orientation="horizontal" 
                        flexItem 
                        sx={{ 
                            borderBottomWidth: 2, 
                            width: '100%', 
                            borderColor: '#ccc',
                            my: 2
                        }} 
                    />
                )}
                
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <Box sx={{ 
                        pl: { xs: 0, md: 10 }, 
                        flex: 1,
                        width: '100%'
                    }}>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField 
                                fullWidth 
                                label="Name" 
                                name="name" 
                                value={formik.values.name} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                error={formik.touched.name && Boolean(formik.errors.name)} 
                                helperText={formik.touched.name && formik.errors.name} 
                                sx={{ mb: 1.5 }} 
                            />
                            <TextField 
                                fullWidth 
                                label="Subject" 
                                name="subject" 
                                value={formik.values.subject} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                error={formik.touched.subject && Boolean(formik.errors.subject)} 
                                helperText={formik.touched.subject && formik.errors.subject} 
                                sx={{ mb: 1.5 }} 
                            />
                            <TextField 
                                fullWidth 
                                label="Email" 
                                name="email" 
                                type="email" 
                                value={formik.values.email} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                error={formik.touched.email && Boolean(formik.errors.email)} 
                                helperText={formik.touched.email && formik.errors.email} 
                                sx={{ mb: 1.5 }} 
                            />
                            <TextField 
                                fullWidth 
                                label="Message" 
                                name="message" 
                                multiline 
                                rows={4} 
                                value={formik.values.message} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                error={formik.touched.message && Boolean(formik.errors.message)} 
                                helperText={formik.touched.message && formik.errors.message} 
                                sx={{ mb: 1.5 }} 
                            />
                            <Button 
                                type="submit" 
                                variant="contained" 
                                sx={{ 
                                    width: { xs: '100%', sm: '180px' }, 
                                    mt: 2, 
                                    backgroundColor: '#007bff', 
                                    color: 'white' 
                                }}
                            >
                                Send Message
                            </Button>
                        </form>
                    </Box>
                </motion.div>
            </Box>
        </motion.div>
    );
};

export default Contact;