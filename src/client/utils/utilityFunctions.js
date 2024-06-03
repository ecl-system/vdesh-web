export const toCapitalizeFirstLetterOfWord = (word) => {
    if (!word) return ''; 
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const toCapitalizeFirstLetterAmongWords = (string) => {
    const splittedWords = string.split(' ');
    let refinedSentence = '';
    splittedWords.forEach((word, index) => {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        if (index !== 0) {
            refinedSentence += ' ';
        }
        refinedSentence += capitalizedWord;
    });
    return refinedSentence;
  }
  