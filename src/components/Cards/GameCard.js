import React, {useState} from 'react';
import {AppColors} from "../../resources/AppColors";
import {useHistory} from "react-router-dom";
import {AppTextsFontSize, AppTextsFontWeight, useTextStyles} from "../../resources/AppTexts";
import {makeStyles} from "@mui/styles";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography} from '@material-ui/core';
import Icons from "../../resources/Icons";
import IconProvider from "../IconProvider/IconProvider";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    text: {
        fontSize: AppTextsFontSize.SIZE_BODY,
        fontWeight: AppTextsFontWeight.WEIGHT_LIGHT
    },
    pos: {
        marginBottom: 12,
    },
    link: {
        overflowX: "auto",
        "&:hover": {
            cursor: 'pointer',
            textDecoration: `underline ${AppColors.WHITE}`
        }
    }, cardHeaderRoot: {
        overflow: "hidden"
    },
    cardHeaderContent: {
        overflow: "hidden"
    }


});

/**
 * @component
 * Component to create the card of the game
 *
 * @param {number} gameId: id of the game
 * @param {string} gameTitle: title of the game
 * @param {string} gameDescription: description of the game

 *
 * @constructor
 * <GameCard gameId={'12'} gameTitle={'TITLE'} gameDescription={'DESCRIPTION'} gameImage={2}/>
 *
 */
const GameCard = ({
                      gameId,
                      gameTitle,
                      gameDescription,
                      gameImage,
                      gameRating

                  }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const texts = useTextStyles();
    const history = useHistory()
    const [drawerLink, setDrawerLink] = useState()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const onClickHandler = () => {
        history.push({
            pathname: `/game/${gameId}`,
            state: {detail: gameId}
        })


    }


    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Card style={{height: '302px', width: '222px', position: "relative", borderRadius: 20}}
              className={classes.card}>

            <CardActionArea style={{position: 'relative', height: '302px', width: '222px'}} onClick={onClickHandler}>

                <CardMedia
                    media="picture"
                    alt={gameTitle}
                    image={gameImage}
                    title={gameTitle}
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        height: '302px', width: '222px'
                    }}
                />
                <CardContent style={{
                    position: "relative",
                    backgroundColor: "transparent",
                    paddingTop: 0,
                    height: '250px'
                }}>
                    <Grid container>

                        <Grid item style={{paddingLeft: '8em'}}>
                            <Paper style={{
                                backgroundColor: AppColors.BACKGROUND,
                                borderRadius: 20,
                                width: '7em',
                                height: '2.5em'
                            }}
                            >
                                <Grid container style={{paddingLeft: '0.5em', paddingTop: '0.15em'}}>
                                    <IconProvider icon={<Icons.STAR style={{
                                        paddingTop: '0.15em',
                                        verticalAlign: "middle",
                                        display: "inline-flex",
                                        paddingRight: '4px',
                                        color: AppColors.PRIMARY,
                                    }} size="100px"/>}/>
                                    <Typography style={{color: AppColors.WHITE, marginBottom: 0}} gutterBottom
                                                variant="h5"
                                                component="h2">
                                        {gameRating}
                                    </Typography>
                                </Grid>
                            </Paper>

                        </Grid>
                        <Grid item style={{paddingTop: '9em'}}>
                            <Typography style={{color: AppColors.WHITE, height: '64px'}} variant="h5" component="h2">
                                {gameTitle}
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingLeft: '12em', paddingTop: '0.7em'}}>
                            <Paper style={{
                                backgroundColor: AppColors.BACKGROUND,
                                borderRadius: 30,
                                border: '2px solid #6563FF',
                                borderColor: AppColors.PRIMARY,
                                maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px',
                            }}>
                                <IconProvider icon={<Icons.BOOKMARK style={{
                                    marginTop: '0.25em',
                                    verticalAlign: "middle",
                                    display: "inline-flex",
                                    color: AppColors.PRIMARY,
                                }} size="100px"/>}/>

                            </Paper>

                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )


}

GameCard.propTypes = {}

export default GameCard;