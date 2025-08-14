import * as cowsay from 'cowsay';
import * as lolcatjs from 'lolcatjs';

function addition(nb1, nb2) {
    const result = nb1 + nb2;
    return Math.round(result * 1_000) / 1_000;
}

const val1 = 17;
const val2 = 25;
const res = addition(val1, val2);

const message = cowsay.think({
    text: `L'addition de ${val1} et ${val2} donne ${res} !`,
    e: '^^',
    f: 'squirrel'
});

lolcatjs.options.seed = Math.round(Math.random() * 1_000);
lolcatjs.fromString(message);