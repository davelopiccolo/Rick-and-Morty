import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { CardActionArea } from "@mui/material";

export default function Character({ character }) {
  const { id, image, name, status, gender, species } = character;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component='img' alt={name} height='250' image={image} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <List dense>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText primary='STATUS' secondary={status} />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText primary='GENDER' secondary={gender} />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText primary='SPECIES' secondary={species} />
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
