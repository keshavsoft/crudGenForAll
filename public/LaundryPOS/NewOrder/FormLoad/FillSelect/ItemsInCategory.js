import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/Items.js";

let StartFunc = ({ inCategory }) => {
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage();

    let jVarLocalFiletered = jVarLocalFromLocalStorage.filter(element => {
        return element.Category === inCategory;
    });

    jFCommonSelectFill({
        inData: jVarLocalFiletered,
        inHtmlId: "MenItemsTabId"
    });
};

let jFCommonSelectFill = ({ inData, inHtmlId }) => {
    let jVarLocalinHtmlId = document.getElementById(inHtmlId);

    if (jVarLocalinHtmlId === null === false) {
        let jVarLocalWomanWashSelectId = jVarLocalinHtmlId.querySelector("select.ItemSelect");

        let jVarLocalMenItems = inData.map(element => {
            return {
                ItemName: element.ItemName,
                pk: element.pk
            }
        });

        jFLocalAddToSelect({
            inData: jVarLocalMenItems,
            inHtmlSelect: jVarLocalWomanWashSelectId
        });
    };
};

let jFLocalAddToSelect = ({ inData, inHtmlSelect }) => {
    if (inHtmlSelect === null === false) {
        inHtmlSelect.innerHTML = "";

        inData.forEach((element, LoopIndex) => {
            var car = new Option(element.ItemName, element.pk);
            inHtmlSelect.options.add(car);
        });
    };
};

export { StartFunc };