import express from 'express';

var router = express.Router();

import ConfigJson from '../../../../srcWithFolder/Config.json' assert {type: 'json'};

router.get('/', async (req, res) => {
    let LocalFirstLevelFolders = ConfigJson.jsonConfig.tableAndColumns.children.filter(element => {
        return "children" in element
    });

    let LocalFoldersArray = LocalFirstLevelFolders.map(element => {
        return element.name
    });
    // tableAndColumns

    res.json(LocalFoldersArray);
});

export { router };

