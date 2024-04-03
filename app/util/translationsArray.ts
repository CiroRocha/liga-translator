type Edition = {
    regex: RegExp
    replacement: string
}

export const translationsArray: Edition[] = [
    {regex: /\[p([a-z0-9]{3})\]/g, replacement: '[$1]'},    // Promo cards
    {regex: /\[([4-9])ed\]/g, replacement: '[$1e]'},        // X edition
    {regex: /\[3ed\]/g, replacement: '[rv]'},               // Revolt/Third edition
    {regex: /\[usg\]/g, replacement: '[us]'},               // Urza's saga
    {regex: /\[pcy\]/g, replacement: '[pr]'},               // Prophecy
    {regex: /\[fmb1\]/g, replacement: '[mb1]'},             // Mistery booster
    {regex: /\[4bb\]/g, replacement: '[4eb]'},              // Fourth edition black border
    {regex: /\[ons\]/g, replacement: '[on]'},               // Onslaught
    {regex: /\[scg\]/g, replacement: '[sc]'},               // Scourge
    {regex: /\[inv\]/g, replacement: '[in]'},               // Invasion
    {regex: /\[all\]/g, replacement: '[ai]'},               // Alliances
    {regex: /\[plc\]/g, replacement: '[pc]'},               // Planar chaos
    {regex: /\[pls\]/g, replacement: '[ps]'},               // Planeshift
    {regex: /\[ody\]/g, replacement: '[od]'},               // Odyssey
    {regex: /\[exo\]/g, replacement: '[ex]'},               // Exodus
    {regex: /\[ice\]/g, replacement: '[ia]'},               // Ice age
    {regex: /\[tsp\]/g, replacement: '[ts]'},               // Time spiral
    {regex: /\[wth\]/g, replacement: '[wl]'},               // Weatherlight
    {regex: /\[f16\]/g, replacement: '[fnmp]'},             // Friday night magic
    {regex: /\[pm19\]/g, replacement: '[fnmp]'},            // Friday night magic
    {regex: /\[vis\]/g, replacement: '[vi]'},               // Visions
    {regex: /\[tor\]/g, replacement: '[tr]'},               // Torment
    {regex: /\[dis\]/g, replacement: '[di]'},               // Dissension
    {regex: /\[ctb\]/g, replacement: '[slc169]'},           // Secret Lair Commander: From Cute to Brute
    {regex: /\[jud\]/g, replacement: '[ju]'},               // Judgment
    {regex: /\[mrd\]/g, replacement: '[mi]'},               // Mirrodin
    {regex: /\[p5dn\]/g, replacement: '[ptc]'},             // Prerelease events
    {regex: /\[dst\]/g, replacement: '[ds]'},               // Darksteel
    {regex: /\[h1r\]/g, replacement: '[ofmh2]'},            // Modern Horizons 2 (Old Frame)
    {regex: /\[uds\]/g, replacement: '[ud]'},               // Urza's destiny
    {regex: /\[gpt\]/g, replacement: '[gp]'},               // Guildpact
    {regex: /\[cma\]/g, replacement: '[cma2]'},             // Commander Anthology
    {regex: /\[mor\]/g, replacement: '[mt]'},               // Morningtide
    {regex: /\[mmq\]/g, replacement: '[mm]'},               // Mercadian Masques
    {regex: /\[brr\]/g, replacement: '[rfbro]'},            // The Brothers' War (Retro Frame Artifacts)
    {regex: /\[plg21\]/g, replacement: '[pwelb]'},          // Promo - Welcome Back
    {regex: /\[p08\]/g, replacement: '[mprp]'},             // Magic Player Rewards
    {regex: /\[v11\]/g, replacement: '[fvl]'},              // From the Vault: Legends
    {regex: /\[mir\]/g, replacement: '[mr]'},               // Mirage
    {regex: /\[hop\]/g, replacement: '[pch]'},              // Planechase
    {regex: /\[w21\]/g, replacement: '[pwp21]'},            // Wizards Play Network 2021
    {regex: /\[sld\]/g, replacement: '[sldex03]'},          // Secret Lair Drop Series: Stained-Glass Planeswalkers
    {regex: /\[cp1\]/g, replacement: '[clash]'},            // Clash Pack
    {regex: /\[sth\]/g, replacement: '[sh]'},               // Stronghold
    {regex: /\[ulg\]/g, replacement: '[ul]'},               // Urza's legacy
    {regex: /\[gk2\]/g, replacement: '[gk2r]'},             // Guild Kit: Rakdos
    {regex: /\[lst\]/g, replacement: '[ddo]'},              // Duel Decks: Kiora vs. Elspeth
]