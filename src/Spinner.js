import { CircularProgress, Paper } from '@mui/material'
import React from 'react'

function Spinner() {
    return (
        <Paper sx={{ height: '100vh', backgroundColor: '#f0e0bb' }} elevation={0}>
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color: '#661005',
                    animationDuration: '400ms',
                    padding: 10,
                    position: 'relative',
                    left: 'calc(50% - 18vh)',
                    transform: 'translateX(-50%)'
                }}
                size='18vh'
                thickness={4}
            />
        </Paper>
    )
}

export default Spinner