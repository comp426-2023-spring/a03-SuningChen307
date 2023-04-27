#!/usr/bin/env node

import minimist from "minimist"
import { rpsls } from "../lib/rpsls.js"

const arg2 = minimist(process.argv.slice(2)); 

function help_message(){
    console.log('Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n',
    
    '  -h, --help        display this help message and exit\n',
    '  -r, --rules       display the rules and exit\n\nExamples:\n',
    '  node-rpsls        Return JSON with single player RPSLS result.\n',
    '                    e.g. {"player":"rock"}\n',
    '  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.\n',
    '                    e.g {"player":"rock","opponent":"Spock","result":"lose"}')
}

function rule_message(){
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
}

if (args.h || args.help) {
    help_message();
    process.exit(0);
}
if (args.r || args.rules) {
    rule_message();
    process.exit(0);
}

try {
    console.log(JSON.stringify(rpsls(arg2._[0])))
} catch (error) {
    help_message()
    rule_message()
    process.exit(0)
}
