import React from "react";
import {Button, Card, CardActions, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    back: {
        backgroundImage: "url(/images/canada.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        width: '100%',
        height:'100vh',
        display: 'block'

    },

    button: {
        color: "#fff",
        fontSize: 13,
        outlineColor: "#fff",
        marginLeft: '15%',


        "&:hover": {
            backgroundColor: "#FFF",
            color: "black",
        }

    },

    details: {
        position: "relative",
        width: 650,
        height: "auto",
        fontSize: 40,
        fontFamily: "sans-serif",
        fontWeight: "bolder",
        color: "#fff",
        paddingLeft: '15%',
        paddingTop: '15%',

    },
    root: {
        minWidth: 275,
        padding:5,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },


}));


export default function ImageSlider() {
    const classes = useStyles();
    const card =
        <Card  variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br/>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>;
    return (
        <div>
            <Grid container className={classes.back}>
                <div className={classes.details}>
                    <div>BE CAREER SMART</div>
                    <div>STUDY IN CANADA</div>
                </div>
                <Button variant="outlined" color={"primary"} className={classes.button}>
                    Book Free Consultation
                </Button>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={0}>
                <Grid className={classes.root} item xs={12} sm={6} lg={3}> <Card>{card}</Card> </Grid>
                <Grid className={classes.root} item xs={12} sm={6} lg={3}> <Card>{card}</Card> </Grid>
                <Grid className={classes.root} item xs={12} sm={6} lg={3}> <Card>{card}</Card> </Grid>
                <Grid className={classes.root} item xs={12} sm={6} lg={3}> <Card>{card}</Card> </Grid>
            </Grid>

        </div>)
}
