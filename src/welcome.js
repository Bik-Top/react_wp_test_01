"use strict";

export default function (message) {

  if( NODE_ENV == 'development'){
      console.log(`DEVELOPMENT ${message}`);
  }

  console.log(`WELCOME ${message}`);
}