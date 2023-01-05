import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import viewServices from "../Services/view.services";
import QuoteCard from "./QuoteCard";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import IconButton from "@mui/material/IconButton";

function Home() {
  const [quote, setQuote] = useState([]);
  const init = () => {
    viewServices
      .view()
      .then((result) => {
        console.log(result.data);
        setQuote(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => init(), []);

  return (
    <div style={{backgroundColor: "LemonChiffon"}}>
      <IconButton
        aria-label="create"
        style={{ position: "fixed", right: "5%", marginTop: "40px" }}
      >
        <AddCircleOutlinedIcon sx={{ fontSize: 35 }}/>
      </IconButton>

      <Container>
        <Grid container spacing={3}>
          {quote.map((item) => {
            return (
              <Grid item key={item.id} xs={12} md={6} lg={4}>
                <QuoteCard
                  id={item.id}
                  quote={item.quote}
                  author={item.author}
                  avatar={`https://randomuser.me/api/portraits/women/${item.id}.jpg`}
                  image={`https://picsum.photos/id/${item.id}/800/400`}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
