import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/MenItems.js";

let StartFunc = () => {
    jFLocalMenTab();
};

let jFLocalMenTab = () => {
    let jVarLocalMenItemsTabId = document.getElementById("MenItemsTabId");

    if (jVarLocalMenItemsTabId === null === false) {
        let jVarLocalItemSelect = jVarLocalMenItemsTabId.querySelector(".ItemSelect");

        if (jVarLocalItemSelect === null === false) jVarLocalItemSelect.addEventListener("change", (event) => {
            jFLocalItemSelectChange({
                inEvent: event,
                inLocalStorageKey: "Items"
            });
        });
    };
};

let jFLocalItemSelectChange = ({ inEvent }) => {
    try {
        let jVarLocalStorageKey = "Items";
        let jVarLocalEvent = event;
        let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
        let jVarLocalClosestTab = jVarLocalCurrentTarget.closest(".tab-pane");
        let jVarLocalRate = jVarLocalClosestTab.querySelector(".RateClass");

        let jVarLocalItemPk = parseInt(jVarLocalCurrentTarget.value);

        let jVarLocalItems = StartFuncFromLocalStorage({ inLocalStorageKey: jVarLocalStorageKey });

        let jVarLocalFind = Object.values(jVarLocalItems).find(element => element.pk === jVarLocalItemPk);

        jVarLocalRate.value = jVarLocalFind.DryWashRate;

    } catch (error) {
        console.log("error : ", error);
    };
};

export { StartFunc };