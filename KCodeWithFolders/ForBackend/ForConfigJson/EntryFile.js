import fs from 'fs';

let StartFunc = async ({ inTableConfig, inFrom, inTo }) => {
    let LocalFileName = "Config.json";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);
    LocalfileNameJsonData.DbName = LocalfileNameJsonData.ToDataDetails.DbName;

    LocalfileNameJsonData.sequelizeConfig.tableAndColumns = inTableConfig;
    LocalfileNameJsonData.JsonPath = `${LocalfileNameJsonData.ToDataDetails.DataPath}/${LocalfileNameJsonData.ToDataDetails.DataPk}`;

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };