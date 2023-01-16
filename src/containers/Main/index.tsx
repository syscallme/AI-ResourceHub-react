import React from "react";
import unshuffledResources from "../../ml_resources.json";
import { useState } from "react";
import MouseTooltip from "react-sticky-mouse-tooltip";
import { ReactTinyLink } from "react-tiny-link";
import { Header } from "../../components/Header";
import { CardResource } from "../../components/CardResource";
import "./styles.css";

function shuffle<T>(ogArr: Array<T>): Array<T> {
  // Do cloning to prevent mutation
  const arr = [...ogArr];
  for (let i = arr.length - 1; i > 0; i--) {
    const newI = Math.floor(Math.random() * (i + 1));
    const tempValue = arr[newI];
    arr[newI] = arr[i];
    arr[i] = tempValue;
  }
  return arr;
}

const resources = shuffle(unshuffledResources);

const Main = () => {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");

  function getResources() {
    if (!search) {
      return resources;
    }
    return resources.filter(
      (resource) =>
        resource