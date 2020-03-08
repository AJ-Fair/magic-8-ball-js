let responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]
// your code, here
// Confirm the correct number of responses have been stored by printing the number to the console (`20`)
console.log(responses.length)
// Ask the user what their question is, and store it as a variable called `question`
let question = prompt(`What is your question?`)
// Output a random response to the user's question
let answer = Math.floor(Math.random() * 21 - 1)
console.log(responses[answer])
// Output the number of responses that include the word "yes"
let yesAnswers = []
responses.forEach((reply) => {
  if (reply.includes("yes") == true) {
    yesAnswers.push(reply)
  }
})
console.log(yesAnswers.length)
// Output the number of responses that include the words "no" or "not"
let noAnswers = []
responses.forEach((reply) => {
  if (reply.includes("no") == true || reply.includes("not") == true) {
    noAnswers.push(reply)
  }
})
console.log(noAnswers.length)
// Output the alphabetized list of responses
responses.sort()
console.log(responses)
// Output the first and last responses from the alphabetized list
console.log(responses[0])
console.log(responses[19])
// Delete two of the negative responses
let i = responses.indexOf("My reply is no")
let j = responses.indexOf("My sources say no")
responses.splice(i, 1)
responses.splice(j, 1)
// Reassign 'Ask again later' to the beginning of the array
let a = responses.indexOf("Ask again later")
responses.splice(a, 1)
responses.unshift("Ask again later")
// Add 1 response of your choosing to the current list
responses.push("Maybe someday")

// Concat an **array** of 3 additional responses to the current list
let newReply = ["Never in a million years", "You bet your biscuits", "Arcane interference, try again"]
let newResponses = responses.concat(newReply)
// Confirm the correct number of responses have been removed and added by printing the number of responses to the console (`22`)
console.log(newResponses.length)
