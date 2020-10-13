import React from 'react'
import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
function Home() {
    const useStyles = makeStyles({
        root: {
          maxWidth: '80%',
          margin : 'auto auto' ,
          marginTop : '1rem',
          minHeight : 500 
        },
        media: {
          height: 400,
        },
      });
      const classes = useStyles();
return ( 
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Welcome to Local for Vocal
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, aspernatur. Totam libero laudantium, alias hic obcaecati accusamus eius tempora. Aut aperiam vitae sed placeat a nemo vero, maxime earum temporibus consectetur ratione laudantium excepturi neque nobis provident, reiciendis recusandae expedita dolores labore? Ipsum illo molestiae nobis veniam eveniet numquam distinctio?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default Home
