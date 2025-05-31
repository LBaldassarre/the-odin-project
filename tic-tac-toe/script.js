import controller from "./controller.js";

const p1Name = 'Mark';
const p1Icon = 'X';
const p2Name = 'Julia';
const p2Icon = 'O';

const testMatch = controller.createMatch(p1Name, p1Icon, p2Name, p2Icon);

testMatch.startMatch();