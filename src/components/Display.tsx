
import React, { useState } from "react";
import MouseTooltip from "react-sticky-mouse-tooltip";
import { ReactTinyLink } from "react-tiny-link";
import unshuffledResources from "../ml_resources.json";

function shuffle<T>(ogArr: Array<T>): Array<T> {
  // Do cloning to prevent mutation
  const arr = [...ogArr];
  for (let i = arr.length - 1; i > 0; i--) {
    const newI = Math.floor(Math.random() * (i + 1));
    const tempValue = arr[newI];
    arr[newI] = arr[i];
    arr[i] = tempValue;