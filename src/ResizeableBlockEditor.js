import Blockly from 'blockly';
import React, { Component } from 'react';

class ResizeableBlockEditor extends Component {

    workspace = null;

    componentDidMount() {
        const toolbox = {
            "kind": "flyoutToolbox",
            "contents": [
              {
                "kind": "block",
                "type": "controls_if"
              },
              {
                "kind": "block",
                "type": "controls_repeat_ext"
              },
              {
                "kind": "block",
                "type": "logic_compare"
              },
              {
                "kind": "block",
                "type": "math_number"
              },
              {
                "kind": "block",
                "type": "math_arithmetic"
              },
              {
                "kind": "block",
                "type": "text"
              },
              {
                "kind": "block",
                "type": "text_print"
              },
            ]
          }
          
        this.workspace = Blockly.inject('blocklyDiv', {
            toolbox: toolbox, 
            sounds: false,
            grid:
         {spacing: 30,
          length: 3,
          colour: '#ccc',
          snap: true},
            scrollbars: {
                horizontal: true,
                vertical: false,
            },
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.5
            },
                trashcan: true
            }
            );


    }

    componentWillUnmount() {
        this.workspace.dispose();
      }

    render() {
        return (
            <>
                <div id="blocklyDiv" style={{height: '100vh', width: '100%'}}></div>
            </>
        )
    }
}

export default ResizeableBlockEditor;