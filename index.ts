import DiscordJS, {
  Intents,
  MessageEmbed,
  PresenceData,
  Role,
  TextChannel,
} from "discord.js";
import { ActivityTypes } from "discord.js/typings/enums";

import dotenv from "dotenv";

import EmbedBuilder from "./utils/EmbedBuilder";

import ping from "./commands/ping";
import clear from "./commands/clear";

import kick from "./commands/moderations/kick";
import ban from "./commands/moderations/ban";

import send from "./commands/roles/send";
import addRole from "./commands/roles/addRole";
import W2G from "./commands/utils/W2G";
import getStreams from "./commands/utils/getStreams";

dotenv.config();

const user = {
  config: {
    presence: {
      activities: [
        {
          name: `for members`,
          type: ActivityTypes.WATCHING,
        },
      ],
      status: undefined,
    },
  },
  client: new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
    ],
  }),
};

user.client.on("ready", () => {
  user.client.user?.setPresence(user.config.presence as PresenceData);

  ping(user.client);
  clear(user.client);
  W2G(user.client);
  getStreams(user.client);

  kick(user.client);
  ban(user.client);

  send(user.client);
  addRole(user.client);

  console.log(`Logged as ${user.client.user?.tag}`);
});

user.client.on("guildMemberAdd", (guildMember) => {
  const role = guildMember.guild.roles.cache.find(
    (role) => role.id === process.env.onJoinRoleId
  );

  const hi = new EmbedBuilder(
    user.client,
    "Welcome",
    `Welcome to the server, ||<@${guildMember.user.id}>|| !`,
    "YELLOW"
  );

  guildMember.roles.add(role as Role).catch(console.error);
  (
    guildMember.guild.channels.cache.get(
      process.env.onJoinChannelId as string
    ) as TextChannel
  ).send({ embeds: [hi] });
});

user.client.on("guildMemberRemove", (guildMember) => {
  const bye = new EmbedBuilder(
    user.client,
    "Goodbye",
    `||<@${guildMember.user.id}>|| has left the server.`,
    "RED"
  );

  (
    guildMember.guild.channels.cache.get(
      process.env.onJoinChannelId as string
    ) as TextChannel
  ).send({ embeds: [bye] });
});

user.client.login(process.env.TOKEN as string);
