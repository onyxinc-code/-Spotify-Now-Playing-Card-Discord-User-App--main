const { Client, GatewayIntentBits, AttachmentBuilder, SlashCommandBuilder, REST, Routes } = require('discord.js');
const { createCanvas, loadImage } = require('canvas');

const TOKEN = 'token';
const CLIENT_ID = 'CLİENTİD';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ]
});

const commands = [
    new SlashCommandBuilder()
        .setName('spo')
        .setDescription('Dinlediğin Spotify şarkısını görselleştirir.')
        .setContexts([0, 1, 2]) 
        .setIntegrationTypes([0, 1]) 
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Komutlar kaydediliyor...');
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
        console.log('Komutlar global olarak yüklendi!');
    } catch (error) {
        console.error('Hata:', error);
    }
})();

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'spo') {
        await interaction.deferReply();

        const user = interaction.user;
        const guild = client.guilds.cache.find(g => g.members.cache.has(user.id));
        const member = guild?.members.cache.get(user.id);
        const spotify = member?.presence?.activities.find(a => a.name === 'Spotify');

        if (!spotify) {
            return interaction.editReply('SALAK ORUSPU DURUMUN GIZLI SPO');
        }

        try {
            const canvas = createCanvas(800, 280);
            const ctx = canvas.getContext('2d');

            ctx.fillStyle = '#121212';
            ctx.beginPath();
            ctx.roundRect(0, 0, 800, 280, 25);
            ctx.fill();

            const artId = spotify.assets.largeImage.split(':')[1];
            const albumArt = await loadImage(`https://i.scdn.co/image/${artId}`);
            
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(30, 30, 220, 220, 15);
            ctx.clip();
            ctx.drawImage(albumArt, 30, 30, 220, 220);
            ctx.restore();

            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 34px sans-serif';
            ctx.fillText(spotify.details, 280, 100);

            ctx.fillStyle = '#B3B3B3';
            ctx.font = '26px sans-serif';
            ctx.fillText(spotify.state, 280, 150);

            ctx.fillStyle = '#1DB954';
            ctx.font = 'bold 22px sans-serif';
            ctx.fillText('Spotify', 690, 50);

            ctx.fillStyle = '#404040';
            ctx.roundRect(280, 220, 480, 8, 4);
            ctx.fill();
            ctx.fillStyle = '#1DB954';
            ctx.roundRect(280, 220, 200, 8, 4); 
            ctx.fill();

            const attachment = new AttachmentBuilder(canvas.toBuffer(), { name: 'wase-spotify.png' });
            await interaction.editReply({ files: [attachment] });

        } catch (err) {
            console.error(err);
            await interaction.editReply('BOT CODE YARRAK OLUSTURDU KB');
        }
    }
});

client.login(TOKEN);