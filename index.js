const { Telegraf } = require('telegraf');

/**
 * How to get the secret tokrn for creating a bot?
 * -> Open telegram and search for botfather.
 * -> To read instruction type start and press enter.
 * -> To create a new bot type /newbot and press enter.
 * -> It will ask for a bot name, give a bot name without a /, ex: mist_bot.
 * -> then it will ask for a username ending with bot, ex: mist_students_bot
 * // t.me/mist_students_bot 
 */

let binarySearch = `
/**
 * Binary Search Algorithm
 * @param {Array} sortedArray - The array must be sorted.
 * @param {number} target - The value to search for.
 * @return {number} The index of the target in the array, or -1 if not found.
 */
function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedArray[mid] === target) {
            return mid; // Target found
        }

        if (sortedArray[mid] < target) {
            left = mid + 1; // Continue searching in the right half
        } else {
            right = mid - 1; // Continue searching in the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const result = binarySearch(arr, target);

if (result !== -1) {
    console.log('Target found at index', result)
} else {
    console.log('Target not found');
}

`

const bot = new Telegraf('6800711242:AAG8T5gtM4in_CPSwmQVTQ7bHo5w9kFnq0o');

bot.start((ctx) => ctx.reply('Welcome to the mist bot from Ankush'));

bot.command('binarysearchjs', (ctx) => ctx.reply(binarySearch));
bot.command('whomadethis', (ctx) => ctx.reply('Ankush'));

bot.on('sticker', (ctx) => ctx.reply('❤️ '));

bot.launch();