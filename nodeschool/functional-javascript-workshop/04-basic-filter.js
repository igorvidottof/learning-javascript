// Solution 1
function getShortMessages(messages) {
  messages = messages.map(function(obj) {
    return obj.message;
  });

  return messages.filter(function(message) {
    return message.length < 50;
  });
}

module.exports = getShortMessages;

// Solution 2
function getShortMessages(messages) {
  return messages.filter(function(obj) {
    return obj.message.length < 50;
  }).map(function(obj) {
    return obj.message;
  });
}

module.exports = getShortMessages;