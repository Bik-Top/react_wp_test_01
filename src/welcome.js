"use strict";

module.exports = function (message) {


/*    console.log(`WELCOME ${message}`);*/


  if(process.env.NODE_ENV == 'development'){
      console.log(`DEVELOPMENT ${message}`);
  }

  console.log(`WELCOME ${message}`);
};
