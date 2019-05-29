import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Tooltip, IconButton, withStyles } from '@material-ui/core';
import { Home, AccountBox, ListAlt } from '@material-ui/icons';
import GitHub from '../../Icons/GitHub';
import LinkedIn from '../../Icons/LinkedIn';

const styles = {
    root: {
        paddingBottom: '12px',
    },
    tooltip: {
        fontSize: '1rem',
    },
};

class NavBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar color="primary" position="static">
                <Toolbar classes={{ root: classes.root }}>
                    <Typography variant="title"
                        color="inherit"
                    >
                        Dashboard
                    </Typography>
                    <List component="nav">
                        <ListItem component="div">
                            <ListItemText inset>
                                <Typography color="inherit" variant="title">
                                    <Tooltip title="Home" classes={{ tooltip: classes.tooltip }}>
                                        <Link to={'/'} style={{ color: '#FFF' }}>
                                            <IconButton color="inherit" aria-label="Home">
                                                <Home />
                                            </IconButton>
                                        </Link>
                                    </Tooltip>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography color="inherit" variant="title">
                                    <Tooltip title="Resume" classes={{ tooltip: classes.tooltip }}>
                                        <Link to={'/resume'} style={{ color: '#FFF' }}>
                                            <IconButton color="inherit" aria-label="Resume">
                                                <ListAlt />
                                            </IconButton>
                                        </Link>
                                    </Tooltip>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography color="inherit" variant="title">
                                    <Tooltip title="GitHub" classes={{ tooltip: classes.tooltip }}>
                                        <a target="_blank" href="https://github.com/Santamaura">
                                            <IconButton color="inherit" aria-label="GitHub">
                                                <GitHub />
                                            </IconButton>
                                        </a>
                                    </Tooltip>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography color="inherit" variant="title">
                                    <Tooltip title="LinkedIn" classes={{ tooltip: classes.tooltip }}>
                                        <IconButton color="inherit" aria-label="LinkedIn">
                                            <LinkedIn />
                                        </IconButton>
                                    </Tooltip>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography color="inherit" variant="title">
                                    <Tooltip title="Contact" classes={{ tooltip: classes.tooltip }}>
                                        <Link to={'/contact'} style={{ color: '#FFF' }} >
                                            <IconButton color="inherit" aria-label="Contact">
                                                <AccountBox />
                                            </IconButton>
                                        </Link>
                                    </Tooltip>
                                </Typography>
                            </ListItemText>
                        </ListItem >
                    </List>
                </Toolbar>
                {/*  */}
            </AppBar>

        )
    }
}
export default withStyles(styles)(NavBar);