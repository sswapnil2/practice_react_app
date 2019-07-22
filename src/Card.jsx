import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
 

const useStyles = makeStyles({
  card: {
    minWidth: 275,
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
});

function SimpleCard(props) {
  const classes = useStyles();
  // console.log(props)/;
  // const bull = <span className={classes.bullet}>•</span>;
  // console.log("In card", props);
  // console.log(typeof props);
  function getNewName(){
    return props.data.name + "salt";
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.data.email}
        </Typography>
        <Typography variant="h5" component="h2">
         {getNewName()}
        </Typography>
        <Typography variant="body2" component="p">
          I have your password
          <br />
          {props.data.password}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => props.showAlert(props.data)}>
          Learn More</Button>
      </CardActions>
    </Card>
  );
}

// SimpleCard.defaultProps = {
//   email: "email@test.com",
//   name: "Test",
//   id: "id",
//   password: "Password"
// }

export default SimpleCard;