module.exports = {
    name: "classes",
    description: "Sets up a classes roles",
    async execute(message, args, Discord, client) {
        const channel = '800366252169101342';
        
        const sinRole = message.guild.roles.cache.get("800362509168410625");
        const astrRole = message.guild.roles.cache.get("800363189497888821");
        const lsmRole = message.guild.roles.cache.get("800363364739710977");
        const bmRole = message.guild.roles.cache.get("800387454392991745");
        const destrRole = message.guild.roles.cache.get("800363639638982696");
        const forceRole = message.guild.roles.cache.get("800363718713671680");
        const gunRole = message.guild.roles.cache.get("800363931628863488");
        const kfmRole = message.guild.roles.cache.get("800364013300744202");
        const sfRole = message.guild.roles.cache.get("800364086058549268");
        const sumRole = message.guild.roles.cache.get("800364455182467112");
        const warRole = message.guild.roles.cache.get("800364583872233492");
        const warlockRole = message.guild.roles.cache.get("800364672364576798");
        const archRole = message.guild.roles.cache.get("800364793026445342");

        const sinEmoji = '<:assassin:800377995238965269>';
        const astrEmoji = '<:thunderer:800379082092445707>';
        const lsmEmoji = '<:bladedancer:800377834949312543>';
        const bmEmoji = '<:blademaster:800378183211548703>';
        const destrEmoji = '<:destroyer:800378323581534248>';
        const forceEmoji = '<:forcemaster:800378331504967680>';
        const gunEmoji = '<:shooter:800379257707823134>';
        const kfmEmoji = '<:kungfufighter:800379383096672317>';
        const sfEmoji = '<:soulfighter:800378566880526346>';
        const sumEmoji = '<:summoner:800378614884859924>';
        const warEmoji = '<:warrior:800379521731264512>';
        const warlockEmoji = '<:warlock:800388392327839744>';
        const archEmoji = '<:archer:800378955441111120>';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setImage('https://cdn.discordapp.com/attachments/800056164594876421/800821592623153152/IMG_20210119_011509-02.jpeg')
            .setTitle(':dragon: Выдача классовых ролей')
            .addFields(
                { name: "Классы", value: "Чтобы выдать себе классовую роль вам необходимо кликнуть на одну или несколько классовых эмоций.\nСписок классов предоставлен ниже:"},
                { name: "\u200B", value: `${sinEmoji} ${sinRole}\n${astrEmoji} ${astrRole}\n${lsmEmoji} ${lsmRole}\n${bmEmoji} ${bmRole}\n${destrEmoji} ${destrRole}`, inline: true },
                { name: "\u200B", value: `${forceEmoji} ${forceRole}\n${gunEmoji} ${gunRole}\n${kfmEmoji} ${kfmRole}\n${sfEmoji} ${sfRole}`, inline: true },
                { name: "\u200B", value: `${sumEmoji} ${sumRole}\n${warEmoji} ${warRole}\n${warlockEmoji} ${warlockRole}\n${archEmoji} ${archRole}`, inline: true });
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(sinEmoji);
        messageEmbed.react(astrEmoji);
        messageEmbed.react(lsmEmoji);
        messageEmbed.react(bmEmoji);
        messageEmbed.react(destrEmoji);
        messageEmbed.react(forceEmoji);
        messageEmbed.react(gunEmoji);
        messageEmbed.react(kfmEmoji);
        messageEmbed.react(sfEmoji);
        messageEmbed.react(sumEmoji);
        messageEmbed.react(warEmoji);
        messageEmbed.react(warlockEmoji);
        messageEmbed.react(archEmoji);


        /* client.on('messageReactionAdd', async (reaction, user) => {
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
        }); */
    }
}