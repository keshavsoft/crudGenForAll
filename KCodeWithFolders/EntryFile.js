import { StartFunc as StartFuncPrepareTablesSchema } from "./PrepareTablesSchema/EntryFile.js";
import { StartFunc as StartFuncPrepareReadColumnsData } from "./PrepareTablesSchema/ReadColumnsData.js";

import { StartFunc as StartFuncBaseDirs } from './BaseDirs/EntryFile.js';
import { StartFunc as StartFuncForDatabase } from './ForDatabase/EntryFile.js';
import { StartFunc as StartFuncForBackend } from './ForBackend/EntryFile.js';

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "srcWithFolder";
    let CommonTo = "binWithFolder";

    StartFuncBaseDirs({ inTo: CommonTo });

    StartFuncForBackend({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });

    StartFuncForDatabase({
        inFilesArray: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });
};

let LocalFilesArray = StartFuncPrepareTablesSchema();
StartFuncPrepareReadColumnsData({ inTableData: LocalFilesArray });

console.log("LocalFilesArray : ", LocalFilesArray);

StartFunc({ inFilesArray: LocalFilesArray });
