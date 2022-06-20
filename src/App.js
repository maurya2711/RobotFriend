import "./styles.css";
import React, { useState } from "react";
import CardList from "../components/CardList";
import SerachBox from "../components/SerachBox";
import { robots } from "../components/robots";
export default function App() {
  return (
    <div className="App tc">
      <h1> Robots Friends</h1>
      <SerachBox />
      <CardList robots={robots} />
    </div>
  );
}
