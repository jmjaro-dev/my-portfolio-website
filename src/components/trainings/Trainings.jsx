import React, { useEffect, useState } from 'react';
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Divider, Grid, GridList, GridListTile, GridListTileBar, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { lightBlue, yellow, green, grey }  from '@material-ui/core/colors';
// Icons
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
// Trainings
import { trainingsData } from './trainingsData';
// Page Animations
import trainings from '../animation/trainings';
// imgModal
import ImgModal from '../layout/ImgModal'; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: "2em",
    paddingBottom: "3em"
  },
  container: {
    maxWidth: 780
  },
  awardsIcon: {
    color: yellow[700],
  },
  certificateIcon: {
    color: green[700],
  },
  img: {
    height: "auto"
  },
  cert: {
    minWidth: 200,
    minHeight: 200
  },
  imgModal: {
    position: 'absolute',
    top: 50,
    left: 50,
    transform: 'translate(-50, -50)'
  },
  headerContainer: {
    paddingTop: "2em !important",
  },
  headerText: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: 600,
    margin: 0
  },
  underline: {
    textAlign: "center",
    height: "50px",
    padding: "0 !important",
    margin: "0 !important"
  },
  lineCenter: {
    display: "inline-block",
    borderTop: "4px solid",
    borderColor: lightBlue[900],
    height: "30px",
    width: "55px"
  },
  subHeader: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: 500,
    paddingBottom: "1em"
  },
  detailsContainer: {
    textAlign: "center"
  },
  detailsLabel: {
    color: grey[700]
  },
  detailsInfo: {
    color: lightBlue[800],
    fontWeight: "bold"
  },
  subTitle: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: 500,
    padding: "1.5em 0"
  },
  certificateContainer: {
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  certificateGridList: {
    maxWidth: 600,
    height: "auto"
  },
  awardsContainer: {
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: "1em"
  },
  gridList: {
    maxWidth: 450,
    height: "auto"
  },
  titleBar: {
    '& .MuiGridListTileBar-title': {
      fontSize: "0.9em",
      fontWeight: 500,
      flexWrap: "nowrap",      
    }
  },
  gutter: {
    height: "1em",
    marginBottom: "1em"
  }
}));

const Trainings = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [imgUrl, setImageUrl] = useState(null);
  const details = ["Start Date", "End Date", "Hours Rendered"];

  useEffect(() => {
    trainings();
  });
  
  const handleOpen = e => {
    e.preventDefault();
    setImageUrl(e.target.src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.container}>
        <ImgModal url={imgUrl} open={open} handleClose={handleClose} className={classes.imgModal} />
        {/* Header */}
        <Grid item xs={12} className={classes.headerContainer}>
          <Typography variant="h4" className={classes.headerText} id="trainingsHeader">
            Trainings
          </Typography>
        </Grid>
        
        <Grid item xs={12} className={classes.underline} id="trainingsLine">
          <span className={classes.lineCenter}></span>
        </Grid>
          
        {/* Trainings */}
        <Grid container spacing={2} >
          {trainingsData.map((data, index) => (
            <Grid item xs={12} key={data.title} className="trainings">
              <CardContent>
                {/* Training Title */}
                <Typography variant="h5" className={classes.subHeader}  id="trainingTitle">
                  {data.title}
                </Typography>
                <Grid container spacing={1} className={classes.detailsContainer}>
                  {details.map(detail => (
                    <Grid item key={detail} xs={12} sm={4} className="trainingDetails">
                      <Typography variant="caption" className={classes.subHeader}>
                        <span className={classes.detailsLabel}>{detail}: </span> 
                        {detail === "Start Date" && <span className={classes.detailsInfo}>{data.startDate}</span>}
                        {detail === "End Date" && <span className={classes.detailsInfo}>{data.endDate}</span>}
                        {detail === "Hours Rendered" && <span className={classes.detailsInfo}>{data.totalHours}</span>}
                      </Typography>
                    </Grid>
                  ))} 
                </Grid>
              </CardContent>
              
              {/* Certificate of Training */}
              <CardContent className="certTraining">
                <Typography variant="subtitle2" className={classes.subTitle}>
                  <VerifiedUserIcon className={classes.certificateIcon} />
                  <p>Certificate of Training</p>
                </Typography>
              </CardContent>

              <Box className={classes.certificateContainer}>
                <Box className="certOfTraining">
                  <GridList cellHeight={'auto'} className={classes.certificateGridList}>
                    <GridListTile cols={2}>
                    <CardActionArea onClick={handleOpen}>
                      <CardMedia component="img" image={data.thumbnail} className={classes.img}/>
                    </CardActionArea>
                    </GridListTile>
                  </GridList>
                </Box>
              </Box>  

              <CardContent className="certAwards">
                <Typography variant="subtitle2" className={classes.subTitle}>
                  <EmojiEventsIcon className={classes.awardsIcon} />
                  <p>Awards</p>
                </Typography>
                <Box className={classes.awardsContainer}>
                  <GridList  cellHeight={190} className={classes.gridList}>
                    {data.awards.map(award => (
                      <GridListTile key={award.certificate} cols={award.featured ? 2 : 1} className="awardsCert">
                        <CardActionArea onClick={handleOpen}>
                          <CardMedia component="img" image={award.certificate} className={classes.cert}/>
                        </CardActionArea>
                        <GridListTileBar title={award.title} className={classes.titleBar} />
                      </GridListTile>
                    ))}
                  </GridList>
                </Box>
              </CardContent>
              {index !== trainingsData.length - 1 && <Divider />}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Trainings;