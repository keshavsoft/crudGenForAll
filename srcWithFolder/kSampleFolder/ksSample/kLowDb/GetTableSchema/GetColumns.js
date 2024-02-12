import path from 'path';
import Configjson from '../../../../Config.json' assert { type: 'json' };
import fileNameJson from '../fileName.json' assert { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;
    let LocalTableColumns =Configjson.sequelizeConfig.srcDataDetails.tableAndColumns;

    let LocalFindColumns =LocalTableColumns.find(element => {
        return element.tableName===path.parse(fileNameJson.fileName).name 
    });

    return LocalFindColumns.tableColumns;
};

export { StartFunc };