![Global Twitch Emotes banner](/marquee.png)

A browser extension which replaces Twitch.tv emote phrases found on any website with their actual emoticons.

Currently supports Chrome, Firefox, and Opera. Edge support is planned, Safari support is not.

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

[Extension Website](https://ostrichtools.com/p/GlobalTwitchEmotes)

[FAQ Section](https://ostrichtools.com/p/GlobalTwitchEmotes#FAQ)

##  Building

Global Twitch Emotes is built using Node.js. Download and install the latest version of Node.js [here](https://nodejs.org/).

1.  Navigate to the parent directory.
2.  Run ```npm install```
3.  Then run <pre>npm run-script build <b>VERSION BROWSER</b></pre> 

    **VERSION:** Extension version to build.

    `test` | `release`
    
    *Release builds are minified, stripped of all `console` calls, and zipped into a .zip file for distribution, whilst test builds are not minified, to allow for easier debugging.*
    
    **BROWSER:** The browser type you want to build for.

    `webkit` | `firefox`
    
    | **Parameter** | **Applicable Browser(s)**                    |
    |---------------|----------------------------------------------|
    | webkit        | Chromium-based browsers (Chrome, Edge, etc.) |
    | firefox       | Firefox                                      |

    
    *The script will build for all browser types if the browser parameter is not specified.*

##  Installation

Built extensions can be found in the newly-generated `build` directory. You can side-load the unpacked extension in order to run it in your browser. Please refer to your browser's extension installation guide for details.

If you are using the zip file from [github releases](https://github.com/melalawi/GlobalTwitchEmotes/releases):

- Chromium Based Browsers: Navigate to `chrome://extensions/`, enable developer mode, and drag the zip you downloaded into the window.


- Firefox: You must use Firefox Developer Edition since I (Electrolyte) can't sign these releases. Navigate to `about:config`, at the top, search for `xpinstall.signatures.required` and change it to false. Then, navigate to `about:addons` and click `Install Add-on from file` from the gear at the top right and select the zip file you downloaded.

##  Testing

In the parent directory, run `npm run-script test` to run all test files found in the `test` directory.
    
##  Support

For inquiries, please either [contact me](mailto:me@itsmo.me) or [open an issue](https://github.com/melalawi/GlobalTwitchEmotes/issues/new).
