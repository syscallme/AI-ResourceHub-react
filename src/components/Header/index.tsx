import React from "react";
import "./styles.css";

type Props = {
  searchValue: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export co