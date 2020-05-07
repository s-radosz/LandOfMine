import React from "react";
export const GameContext = React.createContext({
    date: "",
    money: 0,
    population: 0,
    freeHumanResources: 0,
    materials: 0,
    societyHappiness: 0,
    mapConfig: [],
    daysPassed: 0,
    handleDayPassed: () => { },
    handleUpdateMapConfigItem: (
        value,
        population,
        freeHumanResources,
        materials,
        money,
        desriptionHeader,
        descriptionContent,
        finishedBuildDays,
        durationBuildDays,
        notAddedHumanResources
    ) => { },
    handleSetActionModal: (x, y) => { },
    showActionModal: false,
    activeXCord: 0,
    activeYCord: 0,
    activeZCord: 0,
    handleSetElementDescription: (x, y) => { },
    showDescription: false,
    showMapRoadBackLight: "hide",
    handleMapRoadBackLight: (status) => { }
});
