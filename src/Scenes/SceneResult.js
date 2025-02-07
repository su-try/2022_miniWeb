import '../App.css'; 
//import axios from "axios";
import React, { useEffect } from 'react';
import { textData, sceneData, pageData, userSelectData, baseHigherData } from '../Data/AppVars';
import RenderLineChart from '../Data/LineChartDrawer';
import RaderChart from '../Data/RaderChartDrawer';

function RenderResultPage(prop) {
    const { setPageIndex, setPrevIndex, prevIndex} = pageData();
    const { setUserSelect, userSelect, SetUserName, userName } = userSelectData();
    const { setSceneIndex } = sceneData();

    useEffect(() => {
        
    }, [])

    return (
        <div className="main-body" key="introPage">
            <p>this_Is_result_Page</p>
            <div> {textData[0]} </div>
            <button onClick={() => {
                sendData(userSelect, prevIndex)
                setSceneIndex(0);
                clearAlldata(setPageIndex, setUserSelect, setPrevIndex, SetUserName);
            }}> press to GoHome</button>
            <p>userName : {userName}</p>
            <RaderChart />
            <RenderLineChart />
        </div>
    )
}


// *************** ACTION ***************

function sendData(userSelect, prevIndex){
    console.log("userSelect : " + userSelect);
    console.log("prevIndex : " + prevIndex);
}


function clearAlldata(setPageIndex, setUserSelect, setPrevIndex, setUserName) {
    setPageIndex(0);
    setUserSelect([]);
    setPrevIndex([]);
    setUserName('');
}

export default RenderResultPage;