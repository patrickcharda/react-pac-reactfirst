import React from "react";

import { Profile } from "../app-header/Profile";
import { Name } from "../app-header/Name";


export function Footer() {
  return (
    <header className="footer">
      <div id="f-left">
        
      </div>
      <div id="f-center">
        <div className="f-profile">
          {/*<Profile />*/}
        </div>
      </div>
      <div id="f-right"></div>
    </header>
  )
}