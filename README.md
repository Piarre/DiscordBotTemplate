# Discord Bot
Discord Bot Client.

## Features
- [x] 🚀 Slash command with a handler builder command.
- [x] 📧 Embed message builder.

## 🧾 Avaible commands
- Get the Bot ping with ```/ping```.
- Clear any channel with ```/clear``` up to 100 messages.
- Get a Watch2Gehter link with ```/room``.
- Get the BAN HAMMER ```/ban``` & ```/kick```.
- Get you best streamer's channel with ```/streamers```.
- Create a dropdown menu with [dropdown menu](https://github.com/Piarre/DiscordBotTemplate#dropdown-menu).

## 🖐 Using Discord Bot
Rename ```.prod.env``` to ```.env``` and here are the env variables :
- TOKEN=Get your token bot on [Discord Devlopers](discord.com/developers/applications)
- guildID=The server id's on which you want the commands.
- W2GKEY=Get your key on [Watch2Gether](https://community.w2g.tv/t/watch2gether-api-documentation/133767/1).
- onJoinRoleId=Role id to give on join
- onJoinChannelId=Channel id to send the welcome message


## 👇 Dropdown menu
1. Send the message for the dropdown menu with : ```/sendroletext```
   - channel: The channel where you want the dropdown menu
   - text: A custom message like: ```Select your role(s)```

2. Send the dropdown meny with : ```/addrole```
   - channel: The same channel as ```/sendroletext``` command's
   - role: The role you want give/remove on select.

## 🔁 Auto start bot for debian
#### Prerequisites
   - Make sure that ts-node is installed
   
1. And ```auto-start-bot.sh``` file into ```/usr/local/sbin```
2. sudo chmod +x /usr/local/sbin/auto-start-bot.sh
3. Put ```auto-start-bot.service``` file into ```/usr/systemd/system/```

## 🔐 License
MIT
