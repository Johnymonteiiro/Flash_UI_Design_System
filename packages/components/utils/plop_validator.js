import fs from "fs";

export function componentFileNameExist(compn, folder = "components") {
  const componentFileName = fs.readdirSync(`src/${folder}`);
  const themeFolder = fs.readdirSync(`src/`);
  const component = componentFileName.concat(themeFolder);

  return component.indexOf(compn) >= 0;
} 

export  function typeNameExist(compn, folder = "@types") {
  const componentFileName = fs.readdirSync(`src/${folder}`);
  const themeFolder = fs.readdirSync(`src/`);
  const component = componentFileName.concat(themeFolder);

  return component.indexOf(compn) >= 0;
} 
