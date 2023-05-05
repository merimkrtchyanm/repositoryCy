//karelia ogtaorcel aranc importii... global hasnalia
// defconf variable vorin veragrvatsa cypressna, vory henc mer cypressna,,, 
// exporta anum module exporti mejiny
// bolor packagnery vory oetqa cypressy import ani vor hasknaa inch packegner enq ogt, dra amar

const { defineConfig } = require ('cypress')
require ('dotenv').config()

module.exports = defineConfig ({
  e2e: {
    setupNodeEvents(on, config) {
    },
    
    env: { 
      globalUrl:process.env.Global_URL
      

    }
  }
})