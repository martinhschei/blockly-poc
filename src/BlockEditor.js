import Blockly from 'blockly';
import './CustomBlocks.js';
import React, { useEffect } from 'react';
import { ZoomToFitControl } from '@blockly/zoom-to-fit';

const BlockEditor = (props) => {
  const blocks = [
    {
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

  useEffect(() => {
    const workspace = Blockly.inject('blocklyDiv', {
      grid: {
        spacing: 20,
        length: 3,
        colour: '#e8e8e8',
        snap: true,
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
