import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Tooltip, IconButton, withStyles } from '@material-ui/core';
import { Home, AccountBox, ListAlt } from '@material-ui/icons';

const styles = {
    root: {
        paddingBottom: '12px',
    },
    tooltip: {
        fontSize: '1rem',
    }
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
                                        <IconButton color="inherit" aria-label="Home">
                                            <Home />
                                        </IconButton>
                                    </Tooltip>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography color="inherit" variant="title">
                                    <Tooltip title="Resume" classes={{ tooltip: classes.tooltip }}>
                                        <IconButton color="inherit" aria-label="Resume">
                                            <ListAlt />
                                        </IconButton>
                                    </Tooltip>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography color="inherit" variant="title">
                                    <Tooltip title="Contact" classes={{ tooltip: classes.tooltip }}>
                                        <IconButton color="inherit" aria-label="Contact">
                                            <AccountBox />
                                        </IconButton>
                                    </Tooltip>
                                </Typography>
                            </ListItemText>
                        </ListItem >
                    </List>
                </Toolbar>
                {/* <a target="_blank" href="https://github.com/Santamaura/Santamaura">SOURCE</a> */}
            </AppBar>

        )
    }
}
export default withStyles(styles)(NavBar);