import fs from 'fs';

let StartFunc = async ({ inTablesCollection, inFrom, inTo }) => {
    let LocalFileName = "Config.json";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);

    LocalfileNameJsonData.jsonConfig.tableAndColumns = inTablesCollection;

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };