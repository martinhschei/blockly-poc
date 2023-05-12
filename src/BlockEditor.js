import Blockly from 'blockly';
import React, { Component } from 'react';
import './CustomBlocks.js';
import {ZoomToFitControl} from '@blockly/zoom-to-fit';

class BlockEditor extends Component {

  hasRun = false;

  componentDidMount() {
    const toolbox = {
      "kind": "flyoutToolbox",
      "scrollbar": true,
      "contents": [
        {
          "kind" : "block",
          "type" : "phase_t1_t2",
        },
        {
          "kind" : "block",
          "type" : "phase_t1_iterator"
        },
        {
          "kind" : "block",
          "type" : "phase_t1_iterator_interval",
        },
        {
          "kind" : "block",
          "type" : "ensemble",
        },
        {
          "kind" : "block",
          "type" : "delay",
        },
        {
          "kind" : "block",
          "type" : "ping_simultaneously_group"
        },
        {
          "kind" : "block",
          "type" : "ping_configuration_attributes"
        },
        {
          "kind" : "block",
          "type" : "ping_configuration",
        }
      ]
    };
    
    this.workspace = Blockly.inject('blocklyDiv', {
      // toolbox: toolbox,
      grid: {
        spacing: 20,
        length: 3,
        colour: '#e8e8e8',
        snap: true
      },
      zoom: {
        controls: true,
      },
      scrollbars: true,
    });

    const zoomToFit = new ZoomToFitControl(this.workspace);
    zoomToFit.init();

    var blockName = "ping_configuration" // Name of block to add

    var newBlock = this.workspace.newBlock(blockName);
    newBlock.initSvg();
    newBlock.render();
    newBlock.moveBy(50,10);
    this.workspace.cleanUp();

  }

  componentWillUnmount() {
    this.workspace.dispose();
  }

  render() {
    return (
      <div>
        <div id="blocklyDiv"></div>
      </div>
    );
  }
}

export default BlockEditor;
