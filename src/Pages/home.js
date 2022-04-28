import React from "react";
import { Paper, Grid, Typography, List, makeStyles } from '@material-ui/core/';
import Item from "../components/Item";
import Card from "../components/Card";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '5px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));

const HomePage = () => {

    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List>
                        <Item
                            name="Time Nacionais"
                            dateils="3"
                        />
                        <Item
                            name="Times Internacionais"
                            dateils="4"
                        />
                        <Item
                            name="Times Historicos"
                            dateils="5"
                        />
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root}>
                <Card name="Flamengo 2020" price="99" image="./images/produtos/fla.jpg" />
                <Card name="Alemanha" price="150" image="./images/produtos/alemanha.jpg" />
                <Card name="Arsenal" price="80" image="./images/produtos/arsenal.jpg" />
                <Card name="Brasil" price="200" image="./images/produtos/brasil.jpg" />
            </Grid>
        </Grid>
    )
}
export default HomePage;