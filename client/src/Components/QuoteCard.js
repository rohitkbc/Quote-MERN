import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function QuoteCard(item) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginTop: 3,
        boxShadow: 5,
        borderRadius: 5,
        ":hover": {
          boxShadow: 20,
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar src={item.avatar} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="delete">
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        }
        title={item.author}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary" align="center">
          {item.quote}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default QuoteCard;
