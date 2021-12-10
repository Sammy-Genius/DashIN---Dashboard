import React, { useState } from "react";
import Aside from "./Aside";
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import Messages from "./Messages";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import Likes from "./Likes";
import Videos from "./Videos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App()  {

  const [isOpen, setIsOpen] = useState(false);

  const onClickSearchBtn = () => {
    setIsOpen(!isOpen);
  }

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <Router>
      <div className="App">
        <div className="app-content">
          <Header />
          <Aside toggleModal = { toggleModal } />
          <main>
            <div className="main-wrapper">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/Messages">
                  <Messages />
                </Route>
                <Route path="/Likes">
                  <Likes/>
                </Route>
                <Route path="/Videos">
                  <Videos/>
                </Route>
              </Switch>
            </div>
          </main>
          <Modal modal = { modal } toggleModal = { toggleModal } />
          <div className= "circle"></div>
          <div className="search-btn" onClick = { onClickSearchBtn }>
            <FontAwesomeIcon className="search-icon"icon = { faSearch } />
          </div>
          <SearchBar isOpen = { isOpen } onClickSearchBtn = { onClickSearchBtn } />
        </div>
        <Nav toggleModal = { toggleModal } />
      </div>
    </Router>
  );
}


export default App;
