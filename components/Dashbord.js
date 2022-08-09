import React from 'react';

import Sidebar from "./Sidbar";
import Body from "./Body";
import Right from "./Right";

function Dashbord() {
  return (
    <main>
        <Sidebar />
        <Body />
        <Right />
    </main>
  )
}

export default Dashbord