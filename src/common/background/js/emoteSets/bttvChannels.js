const URL = 'https://emotes.adamcy.pl/v1/channel/{CHANNEL_NAME}/emotes/bttv';


function parseEmotes(json, set) {
    var result = {};

    for (var i = 0; i < json.length; ++i) {
        result[json[i].code] = {
            url: json[i].urls[0].url,
            channel: set.substring(13) + ' BTTV Channel Emote'
        };
    }

    return result;
}


module.exports = {
    parseEmotes: parseEmotes,
    getURL: function(channel_name) {
        return URL.replace('{CHANNEL_NAME}', channel_name);
    }
};