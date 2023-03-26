import React from "react";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeCompoment = () => {
    return (
        <div>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    );
};

export default HomeCompoment;