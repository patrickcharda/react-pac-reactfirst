import React from "react";

import { Profile } from "./Profile";
import { Name } from "./Name";


export function Header() {
  return (
    <div className="header">
      <div id="h-left">
        <div id="logo">LOGO</div>
      </div>
      <div id="h-center">
        <div class="h-profile">
          <Profile />
          <Name />
        </div>
      </div>
      <div id="h-right"></div>
    </div>
  )
}