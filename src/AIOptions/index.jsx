export const arrayItems = [
    {
    name: 'Q&A',
    id: 'qna',
    description: 'Answewr questions based on your knowledge base',
    option:{
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
    }

},
{
    name: "Grammer Correction",
    id: "grammerCorrection",
    description: "Correct grammer mistakes in your text",
    option:{
        model: "text-davinci-003",
        // prompt: "Correct this to standard English:\n\nShe no went to the market.",
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: "Summarise for a 2nd grader", 
    id: "summary",
    description: "Translates difficult text into simple language",
    option:{
        model: "text-davinci-003",
        // prompt: "Summarize this for a second-grade student:\n\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: "English to other languages",
    id: "translate",
    description: "Translates text into other languages",
    option:{
        model: "text-davinci-003",
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: "Movie to emoji",
    id: "emoji",
    description: "Translates movie titles into emojis",
    option:{
        model: "text-davinci-003",
        temperature: 0.8,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
    }
},
{
    name: "Explain code",
    id: "expcode",
    description: "Explains code in plain english",
    option:{
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\"\"\""],
    }

},
{
    name: "JavaScript to Python",
    id: "js2py",
    description: "Translates JavaScript code into Python",
    option:{
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
]