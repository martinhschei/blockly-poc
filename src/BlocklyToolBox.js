import React from "react";
import "./BlocklyToolbox.css";

const BlocklyToolBox = props => {

    const blocks = [
        {
            color: "#f8f8f8",
            humanName: "Phase",
            name: 'phase_t1_t2',
        },
        {
            name: 'phase_t1_iterator',
        },
        {
            name: 'phase_t1_iterator_interval',
        },
        {
            name: 'ensemble',
        },
        {
            name: 'delay',
        },
        {
            name: 'ping_simultaneously_group',
        },
        {
            name: 'ping_configuration_attributes',
        },
        {
            name: 'ping_configuration',
        },
    ];

    return (
        <>
            <div class="blockly-toolbox"> 

            </div>
        </>
    )
};

export default BlocklyToolBox;