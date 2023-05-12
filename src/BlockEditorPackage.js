import { BlocklyWorkspace } from 'react-blockly';
import React, { useState } from 'react';
import './CustomBlocks.js';
import Blockly from 'blockly';

function BlockEditorPackage() {
  const [xml, setXml] = useState();
  const [javascriptCode, setJavascriptCode] = useState("");
  const toolbox = {
    "kind": "flyoutToolbox",
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
  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

    function workspaceDidChange(workspace) {
        
    }

  return (
    <>
      <BlocklyWorkspace
        toolboxConfiguration={toolbox}
        initialXml={initialXml}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
      <pre id="generated-xml">{xml}</pre>
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={javascriptCode}
        readOnly
      ></textarea>
    </>
  );
}

export default BlockEditorPackage;