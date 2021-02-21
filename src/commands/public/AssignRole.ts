import { Command } from "discord-akairo";
import { GuildMember } from "discord.js";
import { Message } from "discord.js";

export default class AssignRole extends Command {
    public constructor() {
        super("assign", {
            aliases: ["assign"],
            category: "Public Commands",
            description: {
                content:
                    "Assign the given role to the author who initiates this command",
                usage: "assign [ member ]",
                examples: ["assign 1", "assign 2"],
            },
            ratelimit: 3,
            args: [
                {
                    id: "member",
                    default: (msg: Message) => msg.member,
                },
                {
                    id: "year",
                    type: (_: Message, str: string): null | Number => {
                        if (
                            str &&
                            !isNaN(Number(str)) &&
                            [1, 2, 3, 4, 5, 6].includes(Number(str))
                        ) {
                            return Number(str);
                        }
                        return null;
                    },
                    match: "option",
                    flag: ["-year="],
                    default: 0,
                },
            ],
        });
    }

    public exec(
        message: Message,
        { member, year }: { member: GuildMember; year: Number }
    ) {
        switch (year) {
            case 1:
                member.roles.add("813118674642403343").catch(console.error);
                message.util.send(
                    `SUCCESS - Welcome \`${member.user.tag}\` you are now considered a 1st year student 😄`
                );
                break;
            case 2:
                member.roles.add("813124643799302146").catch(console.error);
                message.util.send(
                    `SUCCESS - Welcome \`${member.user.tag}\` you are now considered a 2nd year student 😄`
                );
                break;
            case 3:
                member.roles.add("813124991641845771").catch(console.error);
                message.util.send(
                    `SUCCESS - Welcome \`${member.user.tag}\` you are now considered a 3rd year student 😄`
                );
                break;
            case 4:
                member.roles.add("813127288836849694").catch(console.error);
                message.util.send(
                    `SUCCESS - Welcome \`${member.user.tag}\` you are now considered a 4th year student 😄`
                );
                break;
            case 5:
                member.roles.add("813131657791012884").catch(console.error);
                message.util.send(
                    `SUCCESS - Welcome \`${member.user.tag}\` you are now considered a 5th year student 😄`
                );
                break;
            case 6:
                member.roles.add("813132811661869066").catch(console.error);
                message.util.send(
                    `SUCCESS - Welcome \`${member.user.tag}\` you are now considered a 6th year student 😄`
                );
                break;

            default:
                message.util.send(
                    `ERROR - Sorry \`${member.user.tag}\` the year you have selected is invalid`
                );
                break;
        }
    }
}
