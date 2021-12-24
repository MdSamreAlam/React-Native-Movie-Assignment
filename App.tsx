import React from "react";
import { CardImage } from "./components/CardImage";
import { CradsContainer } from "./components/CardsContainer ";
import { Footer } from "./components/Footer";
import { GetMovieList } from "./components/GetMovieListData";
import { ListHeader } from "./components/Header";
import { Movie } from "./components/Movie";
import MyComponent from "./components/MyComponent";









const App = () => {
  return (
    <>
      {/* <ListHeader /> */}
      <MyComponent />
      {/* <GetMovieList /> */}

      <Movie />
      {/* <CardImage /> */}
      {/* <CradsContainer /> */}


      <Footer />
    </>
  )

}
export default App;


