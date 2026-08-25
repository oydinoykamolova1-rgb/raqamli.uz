const { Markup } = require('telegraf');
const keyboard = Markup.keyboard([['A', 'B']]).resize();
console.log(keyboard);
console.log("Spanned: ", { parse_mode: 'Markdown', ...keyboard });
