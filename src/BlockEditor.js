import Blockly from 'blockly';
import './CustomBlocks.js';
import React, { useEffect } from 'react';
import { ZoomToFitControl } from '@blockly/zoom-to-fit';

const BlockEditor = (props) => {
  
  useEffect(() => {
    const workspace = Blockly.inject('blocklyDiv', {
      grid: {
        length: 3,
        spacing: 20,
        snap: true,
        colour: '#c8c8c8',
      },
      zoom: {
        controls: true,
      },
      scrollbars: true,
    });

    const zoomToFit = new ZoomToFitControl(workspace);
    zoomToFit.init();
    
    const pc = workspace.newBlock('ping_configuration');
    pc.initSvg();
    pc.render();
    pc.moveBy(50, 10);

    const pca = workspace.newBlock('ping_configuration_attributes');
    pca.initSvg();
    pca.render();
    pca.moveBy(50, 10);

    return () => {
      workspace.dispose();
    };
  }, []);

  return (
    <div>
      <div id="blocklyDiv"></div>
    </div>
  );
};

export default BlockEditor;
