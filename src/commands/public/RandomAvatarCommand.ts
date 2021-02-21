import { Command } from "discord-akairo";
import { Message, MessageEmbed, ImageSize } from "discord.js";

export default class RandomAvatarCommand extends Command {
    public constructor() {
        super("random_avatar", {
            aliases: ["avatar-rand", "av-rand", "lottery"],
            category: "Public Commmands",
            description: {
                content: "Display the Avatar of a random member",
                usage: "avatar [ random ]",
                examples: ["avatar-rand"],
            },
            ratelimit: 3,
        });
    }

    public async exec(message: Message): Promise<Message> {
        let size: Number = 512;
        let members = await message.guild.members.fetch();
        let member = members.random();

        return message.util.send(
            new MessageEmbed()
                .setTitle(`Avatar | ${member.user.tag}`)
                .setColor("RANDOM")
                .setImage(
                    member.user.displayAvatarURL({ size: size as ImageSize })
                )
        );
    }
}
