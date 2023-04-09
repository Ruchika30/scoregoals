import React from 'react'
import ImageGallery from './LightGallery';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import Heading from '../../../components/heading'
import { images, imageCat2, imageCat3 } from "./images";


const Gallery = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <div>
            <div className='flex justify-center'>
                <Heading title="GALLERY" />
            </div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ImageGallery images={images} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ImageGallery images={imageCat2} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ImageGallery images={imageCat3} />
            </TabPanel>


        </div>
    )
}

export default Gallery