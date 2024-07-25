import tokens from "../tokens/tokens.json";

const convertJsonObject = (jsonString: any) => {
  return JSON.parse(jsonString);
};

const stringified = JSON.stringify(tokens, null, 2);
const convertedObject = convertJsonObject(stringified);

const formatObjectForDisplay = (obj: string) => {
  const stringified = JSON.stringify(obj, null, 2);
  return stringified.replace(/\"([^(\")"]+)\":/g, "$1:");
};

const formattedObject = formatObjectForDisplay(convertedObject);

export const renderJson = `export const theme = ${formattedObject}`;
