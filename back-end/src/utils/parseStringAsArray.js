const parseStringAsArray = string => {
    return string.split(',').map(item => item.trim());
}

module.exports = parseStringAsArray;