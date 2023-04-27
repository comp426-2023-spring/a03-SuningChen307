#!/usr/bin/env node
import { rps } from 'node-rpsls'
import minimist from 'minimist'

const args = minimist(process.argv.slice(2));

function help_message() {
    console.log('Usage: node-rps [SHOT]\n
    Play Rock Paper Scissors (RPS)\n\n',
    '  -h, --help      display this help message and exit\n',
    '  -r, --rules     display the rules and exit\n\nExamples:\n',
    Examples:
    '  node-rps        Return JSON with single player RPS result.\n',
    '                  e.g. {"player":"rock"}\n',
    '  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n',
    '                  e.g {"player":"rock","opponent":"scissors","result":"win"}')
}

function rule_message() {
    console.log('Rules for Rock Paper Scissors:\n\n',
    ' - Scissors CUTS Paper\n',
    ' - Paper COVERS Rock\n',
    ' - Rock CRUSHES Scissors')
}