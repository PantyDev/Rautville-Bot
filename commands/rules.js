module.exports = {
    name: "rules",
    description: "Sets up a rules and reaction role",
    async execute(message, args, Discord, client) {
        const channel = '800366252169101342';
        const guestRole = message.guild.roles.cache.get("800379819334303775");
        const memberRole = message.guild.roles.cache.get("800380361179791360");
        const adminRole = message.guild.roles.cache.get("800082002137186315");

        const memberEmoji = '<:ratatouille:800388481665859634>';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setImage('https://cdn.discordapp.com/attachments/800056164594876421/800821592623153152/IMG_20210119_011509-02.jpeg')
            .setTitle(':dragon: Правила сервера и роли')
            .addFields(
                { name: "Строго запрещено:", value: "\n1. Оскорблять граждан в сообщениях (следите за тем что пишите). Брань использовать в умеренном количестве."
                + "\n2. Размещать порнографический материал."
                + "\n3. Устраивать беспорядки и перепалки."
                + "\n4. Размещать любую рекламу. "
                + "\nТакже нельзя пиарить свой сервер, группу, сообщество без ведома главы. Такие сообщения будут удалены, а пользователь будет забанен."
                + "\nПо вопросам пиара и другим вопросам писать " + `${adminRole}` },
                { name: "Стать участником", value: "Чтобы выдать себе роль " + `${memberRole}` + " и зайти на сервер нажмите на эмоцию " + `${memberEmoji}` + " крыски ниже под сообщением."},
                { name: "Классовые роли", value: "Добавьте себе роль класса за который вы играете на канале <#800386735568846858>.*"
                + "\n\n*иногда администрация сама может выдавать роли. Вы не сможете дважды взять одну и ту же роль, поэтому если кликните на эмодзи с уже существующей ролью, то ничего не произойдет."
                + "\nОднако вы можете убрать эту роль сняв значок эмодзи."});
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(memberEmoji);


        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name == 'ratatouille') {
                    
                    await reaction.message.guild.members.cache.get(user.id).roles.add(memberRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(guestRole);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name == 'ratatouille') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(memberRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(guestRole);
                }
            } else {
                return;
            }
        });
    }
}