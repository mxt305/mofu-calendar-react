const transDictionary: Record<string, string> = {
    先胜: "先勝",
    先负: "先負",
    佛灭: "仏滅",
    惊蛰: "驚蟄",
    芒种: "芒種",
    谷雨: "穀雨",
    处暑: "處暑",
    闰正: "閏正",
    闰二: "閏二",
    闰三: "閏三",
    闰四: "閏四",
    闰五: "閏五",
    闰六: "閏六",
    闰七: "閏七",
    闰八: "閏八",
    闰九: "閏九",
    闰十: "閏十",
};

function trans(word: string) {
    if (word in transDictionary) {
        return transDictionary[word];
    }
    return word;
}

export default trans;
