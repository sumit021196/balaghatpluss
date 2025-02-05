import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

const cardData = [
  {
    title: "Gangulpara Waterfall",
    subheader: "Balaghat's Natural Beauty",
    image: "/static/images/cards/gangulpara.jpg",
    content: "A stunning waterfall located near Balaghat, a perfect picnic spot surrounded by lush greenery."
  },
  {
    title: "Kanha National Park",
    subheader: "Wildlife & Nature",
    image: "/static/images/cards/kanha.jpg",
    content: "A famous tiger reserve near Balaghat, home to diverse flora and fauna."
  },
  {
    title: "Lanji Fort",
    subheader: "Historical Landmark",
    image: "/static/images/cards/lanji.jpg",
    content: "An ancient fort with historical significance, offering scenic views and a glimpse into Balaghat's past."
  },
  {
    title: "Rajiv Sagar Dam",
    subheader: "Serene Water Body",
    image: "/static/images/cards/dam.jpg",
    content: "A beautiful dam perfect for relaxation and enjoying nature."
  }
];

export default function BlogCards() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', padding: '16px' }}>
      {cardData.map((card, index) => {
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
          setExpanded(!expanded);
        };

        return (
          <Card key={index} sx={{ maxWidth: 280, width: '100%' }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }}>{card.title.charAt(0)}</Avatar>}
              action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
              title={card.title}
              subheader={card.subheader}
            />
            <CardMedia component="img" height="150" image={card.image} alt={card.title} />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{card.content}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
              <IconButton aria-label="share"><ShareIcon /></IconButton>
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>More details about {card.title}...</Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </div>
  );
}
