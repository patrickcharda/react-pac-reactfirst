import React from "react";

import { Profile } from "./Profile";
import { Name } from "./Name";


export function Header() {
  return (
    <div className="header">
      <Profile />
      <Name />
    </div>
  )
}