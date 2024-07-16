/* functional programming in JavaScript */

// final window
const Window = function (tabs) {
    this.tabs = tabs;       // tabs is array of all tabs open
};

// join two windows
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);     
    return this;
};

// open new tab at end
Window.prototype.tabOpen = function (newTab) {
    this.tabs.push('newTab');
    return this;
};


// close any tab
Window.prototype.tabClose = function (index) {
    const tabsBeforeIndex = this.tabs.slice(0, index);
    const tabsAfterIndex = this.tabs.slice(index);
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
    return this;
}

// example windows to test
const leetcode = new Window(['easy prob', 'med prob', 'hard prob']);
const anime = new Window(['the wind rises', 'beserk', 'monogatari', 'naruto', 'gintama']);
const sports = new Window(['euro', 'copa america', 'wimbledon', 'f1 miami', 'icc t20', 'smackdown']);

// testing with test window
const finalTabs = leetcode.tabOpen('netflix').join(anime.tabClose(2)).join(sports.tabOpen('UFC').tabClose(4));



console.log(finalTabs);


