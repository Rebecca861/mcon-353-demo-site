import "./home.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function Home() {
  return (
    <div className="Home">
      <h1>Hi, I'm Rivky</h1>
      <h3>And I like to bake.</h3>
      <img
        src="https://live.staticflickr.com/3103/3162846081_fd02176b12_b.jpg"
        alt="cookies"
      />
      <div>
        I wasn't always this way though. I was a store-bought chocolate-chip
        cookie kind of girl for most of my life.
      </div>
      <div>
        Once quarantine came around, my family had to get busy somehow - so we
        started baking (and we kept pretty busy eating too :))
      </div>
      <div>
        The recipes I like to make are easy, delicious, and taste like home.
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://st4.depositphotos.com/13349494/21081/i/1600/depositphotos_210814620-stock-photo-close-view-homemade-pie-baking.jpg"
            alt="pie"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              PIE
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pies are a light, refreshing baked good which can be personalized
              based on season and tastes.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGsMmscCclnMh6ujqpIZoQmub4aLWVWKDIg&usqp=CAU"
            alt="cookies"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              COOKIES
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You can never go wrong with cookes. Make them simple for every day
              or go a little fancier for occasions.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://breadtopia.com/wp-content/uploads/2017/10/challah-blk-001.jpg"
            alt="challah"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CHALLAH
            </Typography>
            <Typography variant="body2" color="text.secondary">
              There's nothing like the smell of warm, fresh homemade challah
              before Shabbos. Once you try it, you'll never go back to store
              bought!
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Button variant="outlined" href="https://www.kosher.com/">
        Click here for a helpful website with lots of great recipes!
      </Button>
      <br />
      <Typography component="legend">Rate our website!</Typography>
      <Rating name="half-rating" defaultValue={5} precision={0.5} />
    </div>
  );
}

export default Home;
