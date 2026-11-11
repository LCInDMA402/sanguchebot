const prefix = ".";
const botname = "SangucheBot (" + prefix + "help)";
const version = "V0.0.3";
const startTime = Date.now();

let isPremium = false;
let hostID = me;
const bannedGUIDs = new Set();

socket.emit("login", {
    name: botname,
    room: login_room.value,
});

setup();

const help = `- %%^^COMMANDS:^^%% \n` +
`${prefix}help\\n ${prefix}help2`;

const help1 = `- %%^^COMMANDS:^^%% \n` +
`${prefix}help1\\n ${prefix}echo\\n ${prefix}joke\\n ${prefix}triggered\\n ${prefix}fact\\n ${prefix}hat\\n ${prefix}color\\n ${prefix}name\\n ${prefix}resethat\\n ${prefix}resetcolor\\n ${prefix}resetname\\n ${prefix}ship\\n ${prefix}roast\\n ${prefix}cow\\n ${prefix}llama\\n ${prefix}parrot\\n ${prefix}source\\n ${prefix}changelog\\n ${prefix}france\\n ${prefix}asshole\\n ${prefix}lumi\\n ${prefix}gokid (disowned)\\n ${prefix}backflip`;

const help2 = `- %%^^COMMANDS:^^%% \n` +
`${prefix}help2\\n ${prefix}pp\\n ${prefix}aplle\\n ${prefix}stfu\\n ${prefix}fuk\\n ${prefix}version\\n ${prefix}coinflip\\n ${prefix}restore\\n ${prefix}repeat\\n ${prefix}apllefy\\n ${prefix}8ball\\n ${prefix}uptime\\n ${prefix}freepope\\n ${prefix}poll\\n ${prefix}kick`;

const changelog = `- ^^**${version}**^^\n Added some new commands and GUID ban`;

function sendMsg(msg) {
    setTimeout(() => {
        socket.emit("talk", { text: msg });
    }, 200);
}

// INITIAL SETTINGS
setTimeout(() => { cmd(`name ${botname}`); }, 1000);
setTimeout(() => { cmd(`color green`); }, 1000);
setTimeout(() => { cmd(`hat sprout`); }, 1000);
setTimeout(() => { cmd(`speed 150`); }, 1000);
setTimeout(() => { cmd(`pitch 50`); }, 1000);

setTimeout(() => {
    sendMsg(`{NAME} Is Here. Type ${prefix}help To See Commands. Created By Sanguche.`);
}, 1100);

// TYPING INDICATOR
setInterval(() => socket.emit("typing", 1), 60000);
setInterval(() => socket.emit("typing", 0), 60002);

// STATUS MESSAGE
setInterval(() => {
    sendMsg(`{NAME} Is Still Here. Type ${prefix}help To See Commands. Yea.`);
}, 60003);

// COMMAND HANDLER
socket.on("talk", (message) => {

    const text = message.text || "";
    const senderGUID = message.guid;

    // BANNED USER CHECK
    if (senderGUID && bannedGUIDs.has(senderGUID)) {
        sendMsg("You were removed from the bot.");
        return;
    }

    // HELP
    if (text === prefix + "help") return sendMsg(help);
    if (text === prefix + "help1") return sendMsg(help1);
    if (text === prefix + "help2") return sendMsg(help2);

    // VERSION
    if (text === prefix + "version")
        return sendMsg(version);

    // CHANGELOG
    if (text === prefix + "changelog")
        return sendMsg(changelog);

    // ECHO
    if (text.startsWith(prefix + "echo "))
        return sendMsg(text.substring(prefix.length + 5));

    // SAY
    if (text.startsWith(prefix + "say "))
        return sendMsg(text.substring(prefix.length + 4));

    // BASIC COMMANDS
    if (text === prefix + "backflip") return cmd(`backflip`);
    if (text === prefix + "joke") return cmd(`joke`);
    if (text === prefix + "triggered") return cmd(`triggered`);
    if (text === prefix + "fact") return cmd(`fact`);
    if (text === prefix + "france") return cmd(`france`);

    // POLL
    if (text.startsWith(prefix + "poll "))
        return cmd(`poll ${text.substring(prefix.length + 5).trim()}`);

    // CUSTOMIZATION
    if (text.startsWith(prefix + "hat "))
        return cmd(`hat ${text.substring(prefix.length + 4).trim()}`);

    if (text.startsWith(prefix + "color "))
        return cmd(`color ${text.substring(prefix.length + 6).trim()}`);

    if (text.startsWith(prefix + "name "))
        return cmd(`name ${text.substring(prefix.length + 5).trim()}`);

    if (text.startsWith(prefix + "asshole "))
        return cmd(`asshole ${text.substring(prefix.length + 8).trim()}`);

    // RESET
    if (text === prefix + "resetname")
        return cmd(`name ${botname}`);

    if (text === prefix + "resetcolor")
        return cmd(`color green`);

    if (text === prefix + "resethat")
        return cmd(`hat sprout`);

    // RESTORE
    if (text === prefix + "restore") {
        cmd(`color green`);
        cmd(`hat sprout`);
        cmd(`name ${botname}`);
        return;
    }

    if (text.startsWith(prefix + "kick")) {

        if (senderGUID !== hostID)
            return sendMsg("Owner Only");

        const parts = text.trim().split(/\s+/);

        if (parts[0] !== prefix + "kick")
            return;

        const guid = parts[1];

        if (!guid)
            return sendMsg("GUID Plz!\\n Example: .kick BonziGUID");

        if (bannedGUIDs.has(guid))
            return sendMsg("That user is already removed");

        bannedGUIDs.add(guid);

        return sendMsg(`That user has been removed from the bot.`);
    }

    // ROAST
    if (text.startsWith(prefix + "roast ")) {
        const user = text.substring(prefix.length + 6).trim();

        if (!user)
            return sendMsg("Name Plz!\\nExample: .roast user");

        const roasts = [
            `${user}, I'd agree with you, but then we'd both be wrong.`,
            `${user}, if laughter is the best medicine, your face must cure the world.`,
            `${user}, you bring everyone so much joy... when you leave the room.`,
            `${user}, you're proof evolution can go in reverse.`,
            `${user}, if I wanted to kill myself, I'd climb your ego and jump to your IQ.`
        ];

        return sendMsg(roasts[Math.floor(Math.random() * roasts.length)]);
    }

    // SHIP
    if (text.startsWith(prefix + "ship ")) {
        const users = text.substring(prefix.length + 5).split(" and ");

        if (users.length !== 2)
            return sendMsg("Names Plz!\\nExample: .ship he and she");

        const percent = Math.floor(Math.random() * 101);

        return sendMsg(`${users[0]} ❤️ ${users[1]} = ${percent}% Love!`);
    }

    // LLAMA
    if (text === prefix + "llama")
        return sendMsg("- ^^**U GOT THE LLAMA**^^");

    // SOURCE
    if (text === prefix + "source")
        return sendMsg("- ^^**SOURCE CODE:**^^\nhttps://LCInDMA402.github.io/sanguchebot/bot.js");

    // PARROT
    if (text === prefix + "parrot")
        return sendMsg("- ^^**U GOT THE PARROT**^^");

    // COW
    if (text === prefix + "cow")
        return sendMsg("- ^^**U GOT THE COW**^^");

    // LUMI
    if (text === prefix + "lumi")
        return cmd(`image https://files.catbox.moe/mc9mdo.png`);

    // GOKID
    if (text.startsWith(prefix + "gokid")) {
        const user = text.substring(prefix.length + 6).trim();

        if (!user) return sendMsg("Name Plz!");

        const gokids = [
            `This command has been disowned`,
            `This command has been disowned, ok?`
        ];

        return sendMsg(gokids[Math.floor(Math.random() * gokids.length)]);
    }

    // PP
    if (text.startsWith(prefix + "pp")) {
        const name = text.substring(prefix.length + 2).trim() || "Unknown";

        const pps = [
            `This is ${name}'s PP: FUCK YOU`,
            `This is ${name}'s PP: asdfasdf`,
            `This is ${name}'s PP: bro`,
            `This is ${name}'s PP: no`,
            `This is ${name}'s PP: wtf`,
            `This is ${name}'s PP: a`
        ];

        return sendMsg(pps[Math.floor(Math.random() * pps.length)]);
    }

    // APLLE
    if (text === prefix + "aplle")
        return sendMsg("- ^^**U GOT THE APLLE**^^");

    // STFU
    if (text.startsWith(prefix + "stfu ")) {
        const user = text.substring(prefix.length + 4).trim();

        const stfus = [
            `${user} shut the fuck up, NOW!`,
            `${user} shut the fuck up, because I'm tired of your bullshit`
        ];

        return sendMsg(stfus[Math.floor(Math.random() * stfus.length)]);
    }

    // FUK
    if (text.startsWith(prefix + "fuk ")) {
        const thing = text.substring(prefix.length + 4).trim();

        if (!thing)
            return sendMsg("Example: .fuk homework");

        setTimeout(() => sendMsg(`Guess The ${thing}`), 200);
        setTimeout(() => sendMsg("IT'S A FUCKING [[fVk]]"), 1000);

        return;
    }

    // COINFLIP
    if (text === prefix + "coinflip") {
        const results = [
            "- 🪙Landed On, ^^HEADS^^",
            "- 🪙Landed On, ^^TAILS^^"
        ];

        return sendMsg(results[Math.floor(Math.random() * results.length)]);
    }

    // REPEAT
    if (text.startsWith(prefix + "repeat ")) {
        const parts = text.substring(prefix.length + 7).trim().split(" ");
        const count = parseInt(parts[parts.length - 1], 10);

        if (isNaN(count) || count < 1 || count > 20)
            return sendMsg("Text Plz!\\nExample: .repeat Example 5");

        const msg = parts.slice(0, -1).join(" ");

        if (!msg)
            return sendMsg("Text Plz!\nExample: .repeat Example 5");

        return sendMsg(Array(count).fill(msg).join(" "));
    }

    // APLLEFY
    if (text === prefix + "apllefy") {
        cmd(`color green`);
        cmd(`hat sprout`);
        cmd(`name Aplle`);

        return sendMsg("**^^MY APLLES!^^**");
    }

    // 8BALL
    if (text.startsWith(prefix + "8ball")) {
        const question = text.substring(prefix.length + 5).trim();

        if (!question)
            return sendMsg("Question Plz!\\nExample: .8ball Example");

        const answers = [
            "Yes, Definitely",
            "No Way",
            "Maybe",
            "Ask Again Later",
            "The Bonzis Says Yes",
            "IDFK",
            "100% Confirmed",
            "Probably Not",
            "Never"
        ];

        return sendMsg(answers[Math.floor(Math.random() * answers.length)]);
    }

    // UPTIME
    if (text === prefix + "uptime") {
        const seconds = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        return sendMsg(
            `SangucheBot Uptime:\n${hours}h ${minutes % 60}m ${seconds % 60}s`
        );
    }

    // FREEPOPE
    if (text === prefix + "freepope") {
        cmd(`freepope`);
        return sendMsg(`Dats It, Bēnned`);
    }
});
