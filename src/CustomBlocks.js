import Blockly from 'blockly';

Blockly.Blocks['ping_configuration'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("Transducer")
          .appendField(new Blockly.FieldDropdown([["A","optA"], ["B","optB"], ["C","optC"]]), "NAME");
      this.appendDummyInput()
          .appendField("Pulse type")
          .appendField(new Blockly.FieldTextInput("default"), "NAME");
      this.appendDummyInput()
          .appendField("Pulse duration")
          .appendField(new Blockly.FieldTextInput("default"), "NAME");
      this.appendDummyInput()
          .appendField("Ramping")
          .appendField(new Blockly.FieldTextInput("default"), "NAME");
      this.appendDummyInput()
          .appendField("Start frequency")
          .appendField(new Blockly.FieldNumber(0), "NAME");
      this.appendDummyInput()
          .appendField("End frequency")
          .appendField(new Blockly.FieldNumber(0), "NAME");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['ping_configuration_attributes'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Mode")
          .appendField(new Blockly.FieldDropdown([["Active","optActive"], ["Passive","optPassive"]]), "Mode");
      this.appendDummyInput()
          .appendField("Tx Power (W)")
          .appendField(new Blockly.FieldDropdown([["200","opt200"], ["500","opt500"], ["750","opt750"], ["1000","opt1000"]]), "Power");
      this.appendDummyInput()
          .appendField("Range (m)")
          .appendField(new Blockly.FieldNumber(0, 1, Infinity, 1), "Range");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['ping_simultaneously_group'] = {
    init: function() {
      this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Run simultaneously");
      this.appendDummyInput()
        .appendField("Repeat")
        .appendField(new Blockly.FieldNumber(0, 1, Infinity, 1), "NAME")
        .appendField("times")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['delay'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Delay")
        .appendField(new Blockly.FieldNumber(1,1, Infinity, 0.1), "Delay")
        .appendField("seconds")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
  }

  Blockly.Blocks['ensemble'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Run for")
          .appendField(new Blockly.FieldNumber(0), "NAME")
          .appendField("seconds")
      this.appendDummyInput()
          .appendField("Repeat")
          .appendField(new Blockly.FieldNumber(0, 1, Infinity, 1), "NAME")
          .appendField("times")
      this.appendStatementInput("NAME")
          .setCheck(null)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['phase_t1_t2'] = {
    init: function() {
      this.appendDummyInput()
      .appendField("From")
      .appendField(new Blockly.FieldDropdown([["2023", "2023"], ["2024", "2024"],
          ["2025", "2025"], ["2026", "2026"], ["2027", "2027"], ["2028", "2028"], ["2029", "2029"]
      ]), "YEAR")
      .appendField(new Blockly.FieldDropdown([
          ["01", "01"], ["02", "02"], ["03", "03"],
          ["04", "04"], ["05", "05"], ["06", "06"],
          ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"]
      ]), "MONTH")
      .appendField(new Blockly.FieldDropdown([
          ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
          ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
          ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
          ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
          ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
          ["30", "30"], ["31", "31"]
      ]), "DAY")
          .appendField(new Blockly.FieldDropdown([["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"],
          ["04", "04"], ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"], ["10", "10"],
          ["11", "11"], ["12 (Noon)", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"],
          ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]
      ]), "HOUR")
      .appendField(":")
      .appendField(new Blockly.FieldDropdown([
          ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
          ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
          ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
          ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
          ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
          ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"],
          ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
          ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"],
          ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
          ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"],
          ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]
      ]), "MINUTE")
      .appendField(":")
      .appendField(new Blockly.FieldDropdown([
          ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
          ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
          ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
          ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
          ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
          ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"],
          ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
          ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"],
          ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
          ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"],
          ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]
      ]), "SECOND");
      this.appendDummyInput()
          .appendField("Until ")
          .appendField(new Blockly.FieldDropdown([["2023", "2023"], ["2024", "2024"],
          ["2025", "2025"], ["2026", "2026"], ["2027", "2027"], ["2028", "2028"], ["2029", "2029"]
      ]), "YEAR")
      .appendField(new Blockly.FieldDropdown([
          ["01", "01"], ["02", "02"], ["03", "03"],
          ["04", "04"], ["05", "05"], ["06", "06"],
          ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"]
      ]), "MONTH")
      .appendField(new Blockly.FieldDropdown([
          ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
          ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
          ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
          ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
          ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
          ["30", "30"], ["31", "31"]
      ]), "DAY")
          .appendField(new Blockly.FieldDropdown([["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"],
          ["04", "04"], ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"], ["10", "10"],
          ["11", "11"], ["12 (Noon)", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"],
          ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]
      ]), "HOUR")
        .appendField(":")
        .appendField(new Blockly.FieldDropdown([
            ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
            ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
            ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
            ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
            ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
            ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
            ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"],
            ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
            ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"],
            ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
            ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"],
            ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]
        ]), "MINUTE")
        .appendField(":")
        .appendField(new Blockly.FieldDropdown([
            ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
            ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
            ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
            ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
            ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
            ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
            ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"],
            ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
            ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"],
            ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
            ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"],
            ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]
        ]), "SECOND")
        this.appendDummyInput()
          .appendField("Interval")
          .appendField(new Blockly.FieldNumber(0,0, Infinity, 1))
          .appendField("Day")
          .appendField(new Blockly.FieldNumber(0,0, Infinity, 1))
          .appendField("Hour")
          .appendField(new Blockly.FieldNumber(0,0, Infinity, 1))
          .appendField("Minute")
        this.appendStatementInput("NAME")
          .setCheck(null)
          
      this.setInputsInline(false);
      this.setColour(290);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['phase_t1_iterator'] = {
    init: function() {
      this.appendDummyInput()
      .appendField("From")
      .appendField(new Blockly.FieldDropdown([["2023", "2023"], ["2024", "2024"],
          ["2025", "2025"], ["2026", "2026"], ["2027", "2027"], ["2028", "2028"], ["2029", "2029"]
      ]), "YEAR")
      .appendField(new Blockly.FieldDropdown([
          ["01", "01"], ["02", "02"], ["03", "03"],
          ["04", "04"], ["05", "05"], ["06", "06"],
          ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"]
      ]), "MONTH")
      .appendField(new Blockly.FieldDropdown([
          ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
          ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
          ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
          ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
          ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
          ["30", "30"], ["31", "31"]
      ]), "DAY")
          .appendField(new Blockly.FieldDropdown([["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"],
          ["04", "04"], ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"], ["10", "10"],
          ["11", "11"], ["12 (Noon)", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"],
          ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]
      ]), "HOUR")
      .appendField(":")
      .appendField(new Blockly.FieldDropdown([
          ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
          ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
          ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
          ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
          ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
          ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"],
          ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
          ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"],
          ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
          ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"],
          ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]
      ]), "MINUTE")
      .appendField(":")
      .appendField(new Blockly.FieldDropdown([
          ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
          ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
          ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
          ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
          ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
          ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"],
          ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
          ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"],
          ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
          ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"],
          ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]
      ]), "SECOND");
      this.appendDummyInput()
          .appendField("Repeat")
          .appendField(new Blockly.FieldNumber(1,1, Infinity, 1))
          .appendField("times")
      this.appendStatementInput("NAME")
          .setCheck(null)
      this.setInputsInline(false);
      this.setColour(290);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['phase_t1_iterator_interval'] = {
    init: function() {
      this.appendDummyInput()
      .appendField("From")
      .appendField(new Blockly.FieldDropdown([["2023", "2023"], ["2024", "2024"],
          ["2025", "2025"], ["2026", "2026"], ["2027", "2027"], ["2028", "2028"], ["2029", "2029"]
      ]), "YEAR")
      .appendField(new Blockly.FieldDropdown([
          ["01", "01"], ["02", "02"], ["03", "03"],
          ["04", "04"], ["05", "05"], ["06", "06"],
          ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"]
      ]), "MONTH")
      .appendField(new Blockly.FieldDropdown([
          ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
          ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
          ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
          ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
          ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
          ["30", "30"], ["31", "31"]
      ]), "DAY")
          .appendField(new Blockly.FieldDropdown([["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"],
          ["04", "04"], ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"], ["10", "10"],
          ["11", "11"], ["12 (Noon)", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"],
          ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]
      ]), "HOUR")
      .appendField(":")
      .appendField(new Blockly.FieldDropdown([
          ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
          ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
          ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
          ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
          ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
          ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"],
          ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
          ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"],
          ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
          ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"],
          ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]
      ]), "MINUTE")
      .appendField(":")
      .appendField(new Blockly.FieldDropdown([
          ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
          ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
          ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
          ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
          ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
          ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
          ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"],
          ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
          ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"],
          ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
          ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"],
          ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]
      ]), "SECOND");
      this.appendDummyInput()
          .appendField("Repeat")
          .appendField(new Blockly.FieldNumber(1,1, Infinity, 1))
          .appendField("times")
      this.appendDummyInput()
          .appendField("Interval")
          .appendField(new Blockly.FieldNumber(0,0, Infinity, 1))
          .appendField("Day")
          .appendField(new Blockly.FieldNumber(0,0, Infinity, 1))
          .appendField("Hour")
          .appendField(new Blockly.FieldNumber(0,0, Infinity, 1))
          .appendField("Minute")
      this.appendStatementInput("NAME")
          .setCheck(null)
      this.setInputsInline(false);
      this.setColour(290);
      this.setTooltip("");
      this.setHelpUrl("");
    }
};