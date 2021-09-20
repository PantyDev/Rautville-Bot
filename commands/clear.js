module.exports = {
    name: "clear",
    description: "clear command",
    execute(message, args) {
        message.channel.bulkDelete(args[0]);
    }
}