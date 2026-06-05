const prefix = ".";
const botname = "SangucheBot (" + prefix + "help)";
const version = "V0.0.1";
let isPremium = false;
socket.emit("login", {
        name: botname,
        room: login_room.value,
    });
setup();

const help = `- %%^^COMMANDS:^^%% \n` +
`${prefix}help\\n ${prefix}help2\\n ${prefix}echo\\n ${prefix}joke\\n ${prefix}triggered\\n ${prefix}fact\\n ${prefix}hat\\n ${prefix}color\\n ${prefix}name\\n ${prefix}resethat\\n ${prefix}resetcolor\\n ${prefix}resetname\\n ${prefix}ship\\n ${prefix}roast\\n ${prefix}cow\\n ${prefix}llama\\n ${prefix}parrot\\n ${prefix}source\\n ${prefix}changelog\\n ${prefix}france\\n ${prefix}asshole\\n ${prefix}lumi\\n ${prefix}gokid`;

const help2 = `- %%^^COMMANDS:^^%% \n` +
`${prefix}pp\\n ${prefix}aplle\\n ${prefix}stfu\\n ${prefix}fuk`;

const changelog = `- ^^**${version}**^^\\n Nothing changed`;

function sendMsg(msg) {
    setTimeout(() => {
        socket.emit("talk", { text: msg });
    }, 200);
}

setTimeout(() => { cmd(`name SangucheBot (.help)`); }, 1000);
setTimeout(() => { cmd(`color green`); }, 1000);
setTimeout(() => { cmd(`hat sprout`); }, 1000);
setTimeout(() => { cmd(`speed 145`);}, 1000);
setTimeout(() => { cmd(`pitch 50`);}, 1000);
setTimeout(() => { sendMsg(`{NAME} Is Here. Type ${prefix}help To See Commands. Created By SPH.`); }, 1100);
setInterval(() => {
        socket.emit("typing", 1);
    }, 60000);
setInterval(() => {
        socket.emit("typing", 0);
    }, 60002);
setInterval(() => {
        sendMsg(`{NAME} Is Still Here. Type ${prefix}help To See Commands. Yea.`)
    }, 60003);

socket.on("talk", (message) => {
    const text = message.text;

    if (text === prefix + "help") return sendMsg(help);
    if (text === prefix + "help2") return sendMsg(help2);
    if (text === prefix + "changelog") return sendMsg(changelog);
    if (text.startsWith(prefix + "echo")) return sendMsg(text.substring(prefix.length + 5));
    if (text.startsWith(prefix + "say")) return sendMsg(text.substring(prefix.length + 4));
    if (text === prefix + "joke") return cmd(`joke`);
    if (text === prefix + "triggered") return cmd(`triggered`);
    if (text === prefix + "fact") return cmd(`fact`);
    if (text === prefix + "france") return cmd(`france`);
    if (text.startsWith(prefix + "hat")) return cmd(`hat`, text.substring(prefix.length + 5));
    if (text.startsWith(prefix + "color")) return cmd(`color`, text.substring(prefix.length + 6));
    if (text.startsWith(prefix + "name")) return cmd(`name`, text.substring(prefix.length + 5));
    if (text.startsWith(prefix + "asshole")) return cmd(`asshole`, text.substring(prefix.length + 7));
    if (text.startsWith(prefix + "resetname")) cmd(`name SangucheBot (.help)`);
    if (text.startsWith(prefix + "resetcolor")) cmd(`color green`);
    if (text.startsWith(prefix + "resethat")) cmd(`hat sprout`);
        
    if (text.startsWith(prefix + "roast")) {
        const user = text.substring(prefix.length + 6);
        if (!user) return sendMsg("Name Plz!\\n Example: .roast user");
        const roasts = [
            `${user}, I'd agree with you, but then we'd both be wrong.`,
            `${user}, if laughter is the best medicine, your face must cure the world.`,
            `${user}, you bring everyone so much joy... when you leave the room.`,
            `${user}, you're proof evolution can go in reverse.`,
            `${user}, if I wanted to kill myself, I'd climb your ego and jump to your IQ.`
        ];
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        return sendMsg(roast);
    }

    if (text.startsWith(prefix + "ship")) {
        const users = text.substring(prefix.length + 5).split(" and ");
        if (users.length !== 2) return sendMsg("Names Plz!\\n Example: .ship he and she");
        const percent = Math.floor(Math.random() * 101);
        return sendMsg(`${users[0]} ❤️ ${users[1]} = ${percent}% Love!`);
    } 
    if (text === prefix + "llama") {
        return sendMsg("- ^^**U GOT THE LLAMA**^^");
    }
    if (text === prefix + "source") {
        return sendMsg("- ^^**SOURCE CODE:**^^\\n https://LCInDMA402.github.io/sanguchebot/bot.js");
    }
    if (text === prefix + "parrot") {
        return sendMsg("- ^^**U GOT THE PARROT**^^");
    }
    if (text === prefix + "cow") {
        return sendMsg("- ^^**U GOT THE COW**^^");
    }
    if (text === prefix + "lumi") {
        cmd(`image https://files.catbox.moe/mc9mdo.png`);
    }
    if (text.startsWith(prefix + "gokid")) {
    const userxd = text.substring(prefix.length + 6);
    const gokids = [
            `${userxd}, your a gokid!`,
            `${userxd}, your a fucking gokid!`
        ];
        const gokid = gokids[Math.floor(Math.random() * gokids.length)];
        return sendMsg(gokid);
    }
    if (text.startsWith(prefix + "pp")) {
    const name = text.substring(prefix.length + 2);
    const pps = [
            `This is ${name}'s PP: 8=Đ`,
            `This is ${name}'s PP: 8==Đ`,
            `This is ${name}'s PP: 8===Đ`,
            `This is ${name}'s PP: 8====Đ`,
            `This is ${name}'s PP: 8=====Đ`,
            `This is ${name}'s PP: 8======Đ`
        ];
        const pp = pps[Math.floor(Math.random() * pps.length)];
        return sendMsg(pp);
    }
    if (text === prefix + "aplle") {
        return sendMsg("- ^^**U GOT THE APLLE**^^");
    }
    if (text.startsWith(prefix + "stfu")) {
    const userxd2 = text.substring(prefix.length + 4);
    const stfus = [
            `${userxd2} shut the fuck up, NOW!`,
            `${userxd2} shut the fuck up, because I'm tired of your bullshit`
        ];
        const stfu = stfus[Math.floor(Math.random() * stfus.length)];
        return sendMsg(stfu);
    }
    if (text.startsWith(prefix + "fuk")) {
        const thingxd = text.substring(prefix.length + 3).trim();
    setTimeout(function(){
        sendMsg(`Guess The ${thingxd}`);
    }, 200);
    setTimeout(function(){
        sendMsg("IT'S A FUCKING [[fVk]]");
    }, 1000);
 }
});
