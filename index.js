const { Console } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client();
const token = '';
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 

client.once('ready', () => {
    console.log('Rautville bot is online!');
});
 
client.on('message', message =>{
    
    if(!message.content.startsWith(prefix) || message.author.bot) { 
        console.log(getRandomInt(10));
        if(message.content.toLowerCase() == "бот, ты здесь?") {
            message.channel.send('Да, я тут');
        }
        if(message.content.substring(0, 19).toLowerCase() == "бот, сколько будет ") {
            
            var operation = -1;
            var operationType = "";
            if(message.content.includes('+'))
                operationType = "+";
            else if(message.content.includes('*'))
                operationType = "*";
            else if(message.content.includes('-'))
                operationType = "-";
            else if(message.content.includes('/'))
                operationType = "/";
            operation = message.content.indexOf(operationType);

            var first = message.content.substring(19, operation - 1);
            var second = message.content.substring(operation + 2);
            var result = "";
            
            if(operation > 20)
            {
                switch(operationType)
                {
                    case "+": result = parseFloat(first) + parseFloat(second); break;
                    case "*": result = parseFloat(first) * parseFloat(second); break;
                    case "-": result = parseFloat(first) - parseFloat(second); break;
                    case "/": result = parseFloat(first) / parseFloat(second); break;
                    default: result = 'Я не знаю такого выражения. Пожалуйста, введите значения в формате `бот, сколько будет {первое число} {оператор} {второе число}`!';
                }
                message.channel.send("`" + first + " " + operationType + " " + second + " = " + Math.round((result)*100)/100 + "`");
            }
            else  message.channel.send("Я не вижу в строке оператора. Пожалуйста, введите значения в формате `бот, сколько будет {первое число} {оператор} {второе число}`!");

            
            console.log(operation);
        }

        return; }
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(client.commands.has(command))
    {
        if(command != "rules" && command != "classes")
            client.commands.get(command).execute(message, args);
        else 
        {
            client.commands.get(command).execute(message, args, Discord, client);
        }
    }
    else message.channel.send('Пожалуйста, введите правильную команду.');
});


client.on('guildMemberAdd', member => {
    const guestRole = member.guild.roles.cache.get("800379819334303775");
    member.roles.add(guestRole);
    
    var nickname = '**' + member.user.username + '**';
    
    const welcome = [
        'Слава Великому Хон Соккыну! В нашу школу Пути Хона пожаловал новый ученик и имя ему - ' + nickname + '.',
        'Чин Соён была удивлена. К нам пожаловал новый гость - ' + nickname + '.',
        nickname + ' пришел к нам и принёс вкусненькие маньтоу!',
        'В храме воплощений появился новый босс... ' + nickname + ' готов сразиться с тобой!',
        nickname + ' пришел к нам и принёс много элиток и эссенций по выгодной цене.',
        nickname + ' использовал инвул и кувыркнулся в безопасную зону. Фаза пройдена!',
        nickname + ' пришел в школу милых крысок и пополнил ряды новых грызунов.',
        nickname + ' запустил последнего паука с ракетой в босса. Механика почти пройдена!',
        'До Чонпун в шоке! Чтобы избавиться от прыщей нужно всего лишь... *читать далее*. В это же время ' + nickname + ' пришел к нам!',
        'Во имя святой По Хваран! Во имя её невероятной сестры Ен Хварин! К нам с небес спустился ' + nickname + '.'
    ]

    member.guild.channels.cache.get('802541888514162728').send(welcome[getRandomInt(welcome.length)] + "\n```fix\nДобро пожаловать на сервер боевой школы Rautville!```"); 
});

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get('802541888514162728').send("К сожалению **" + member.user.username + "** покинул ряды нашей боевой школы."); 
});


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


client.on('typingStart', (channel, user) => {
    //if(user.username = "twikky75")
    //channel.send('ВНИМАНИЕ ВСЕМ! ' + user.username + "ЧТО-ТО ПИШЕТ! ВСЕМ БЫТЬ НАЧЕКУ!");
});

//Добралвение реакций
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};


client.on('raw', async event => {
	// `event.t` is the raw event name
	if (!events.hasOwnProperty(event.t)) return;

    const { d: data } = event;
    
    if(typeof client.channels.cache.get(data.channel_id) === 'undefined') {
        await client.users.cache.get(data.user_id).createDM();
    }
	const user = client.users.cache.get(data.user_id);
	const channel = client.channels.cache.get(data.channel_id);

	// if you're on the master/v12 branch, use `channel.messages.fetch()`
	const message = await channel.messages.fetch(data.message_id);

	// custom emojis reactions are keyed in a `name:ID` format, while unicode emojis are keyed by names
	// if you're on the master/v12 branch, custom emojis reactions are keyed by their ID
	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
	const reaction = message.reactions.cache.get(emojiKey);

    //rules
    const rules_channel_id = '800366252169101342';
    const rules_message_id = '801158652157231116';
    const emoji_id = 'ratatouille:800388481665859634';
    
    const memberRole = message.guild.roles.cache.get("800380361179791360");
    const guestRole = message.guild.roles.cache.get("800379819334303775");

    if(channel.id == rules_channel_id)
    {
        if(emojiKey == emoji_id && message.id == rules_message_id)
        {
            if(event.t == "MESSAGE_REACTION_ADD")
            {
                await message.guild.members.cache.get(data.user_id).roles.add(memberRole);
                await message.guild.members.cache.get(data.user_id).roles.remove(guestRole);
            }
            if(event.t == "MESSAGE_REACTION_REMOVE")
            {
                await message.guild.members.cache.get(data.user_id).roles.remove(memberRole);
                await message.guild.members.cache.get(data.user_id).roles.add(guestRole);
            }
        }
    }


    //classes
    classes_channel_id = '800386735568846858';
    classes_message_id = '801266396545155072';

    const roles = [
        message.guild.roles.cache.get("800362509168410625"),
        message.guild.roles.cache.get("800363189497888821"),
        message.guild.roles.cache.get("800363364739710977"),
        message.guild.roles.cache.get("800387454392991745"),
        message.guild.roles.cache.get("800363639638982696"),
        message.guild.roles.cache.get("800363718713671680"),
        message.guild.roles.cache.get("800363931628863488"),
        message.guild.roles.cache.get("800364013300744202"),
        message.guild.roles.cache.get("800364086058549268"),
        message.guild.roles.cache.get("800364455182467112"),
        message.guild.roles.cache.get("800364583872233492"),
        message.guild.roles.cache.get("800364672364576798"),
        message.guild.roles.cache.get("800364793026445342")
    ];
    const emojis = [
        'assassin:800377995238965269',
        'thunderer:800379082092445707',
        'bladedancer:800377834949312543',
        'blademaster:800378183211548703',
        'destroyer:800378323581534248',
        'forcemaster:800378331504967680',
        'shooter:800379257707823134',
        'kungfufighter:800379383096672317',
        'soulfighter:800378566880526346',
        'summoner:800378614884859924',
        'warrior:800379521731264512',
        'warlock:800388392327839744',
        'archer:800378955441111120'
    ]


    if(channel.id == classes_channel_id)
    {
        if(message.id == classes_message_id)
        {
            for(var i = 0; i < roles.length; i++)
            {
                if(event.t == "MESSAGE_REACTION_ADD")
                {
                    if(emojiKey == emojis[i])
                    {
                        //console.log(i + " " + emojis[i] + "No");
                        await message.guild.members.cache.get(data.user_id).roles.add(roles[i]);
                    }
                }   
                if(event.t == "MESSAGE_REACTION_REMOVE")
                {
                    if(emojiKey == emojis[i])
                    {
                        //console.log(i + " " + emojis[i] + "No");
                        await message.guild.members.cache.get(data.user_id).roles.remove(roles[i]);
                    }
                }  
            }
        }
    }
});


client.login(token);