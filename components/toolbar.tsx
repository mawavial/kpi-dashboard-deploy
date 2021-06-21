
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import Link from 'next/link';
import ToolbarMaterial from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';
import Filter from './filter';

const Toolbar = () => {

    const router = useRouter();

    return (
        <AppBar
            position='static'
            style={{
                boxShadow: '8px 8px 0 2px #c0c0c0',
                backgroundColor: 'white',
                borderRadius: 10,
                border: '2px solid #4907a0',
                marginLeft: 0,
                marginRight: 0
            }}
        >
            <ToolbarMaterial>
                <Button color='primary' onClick={() => router.push('/')}>
                    <ArrowBackIcon />
                    <Typography variant='subtitle2' style={{ marginLeft: 10 }}>
                        Back
                    </Typography>
                </Button>
                <div style={{flexGrow:1}}>
                    <Filter />
                </div>
                
            </ToolbarMaterial>
        </AppBar>
    )

}

export default Toolbar;