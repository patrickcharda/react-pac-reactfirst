import React from "react";

import { Profile } from "./Profile";
import { Name } from "./Name";


export function Header() {
  return (
    <div className="header">
      <div id="logo"></div>
      <div>
        <div class="h-profile">
          <Profile />
          <Name />
        </div>
      </div>
      <div id="nav"></div>
    </div>
  )
}