import React from "react";
import unshuffledResources from "../../ml_resources.json";
import { useState } from "react";
import MouseTooltip from "react-sticky-mouse-tooltip";
import { ReactTinyLink } from "react-tiny-link";
import { Header } from "../../components/Header";
import { CardResource } from "../../components/CardResource";
import "./styles.css";

function shuffle<T>(ogArr: Array<T>): Array<T> {
  // Do c