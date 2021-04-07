import React from "react";

import { Profile } from "./Profile";
import { Name } from "./Name";


export function Header() {
  return (
    <header className="header">
      <div id="h-left">
        <div id="logo"></div>
      </div>
      <div id="h-center">
        <div className="h-profile">
          <Profile />
          <Name />
        </div>
      </div>
      <div id="h-right"></div>
    </header>
  )
}