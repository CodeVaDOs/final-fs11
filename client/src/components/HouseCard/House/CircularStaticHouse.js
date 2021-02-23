import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="p" color="initial" style={{ fontSize: "1rem", fontWeight: 500 }}>
                    {`${props.progress}%`}
                </Typography>
            </Box>
        </Box>
    );
}

    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */

export default function CircularStaticHouse(props) {
    const { color, progress, size, thickness,value } = props;
    return <CircularProgressWithLabel size={size} thickness={thickness} value={value} progress={progress} style={{ 'color': `${color}` }}/>;
}