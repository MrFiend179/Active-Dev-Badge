import {config} from'dotenv';
import {Client,GatewayIntentBits,Routes}from 'discord.js';
import {REST}from'@discordjs/rest';
config()
const token = process.env.DB_TOKEN;
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
const rest = new REST({version:'10'}).setToken(token)

client.on('ready',()=>{
    console.log(`${client.user.username}#${client.user.discriminator} has logged in`)
})

client.on('interactionCreate',(interaction)=>{
    if(interaction.isCommand()){
        interaction.reply('pong')
    }
})

const CLIENT_ID = ''
const GUILD_ID = ''
async function main(){
    const commands = [
        {
            name: 'ping',
            description: 'Replies with Pong!',
          },
    ]
    try{
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(CLIENT_ID,GUILD_ID), { body: commands });
        client.login(token)
    } catch(err){
        console.log(err)
    }
}
main();