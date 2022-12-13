import React from "react";
import "./styles.css";

type Props = {
  searchValue: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const Header = ({ searchValue, setSearch }: Props) => {
  return (
    <header>
      <h1>ML Resources</h1>
      <input
        typ