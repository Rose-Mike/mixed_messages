function randomMessage() {
    let messages = ["Be yourself; everyone else is already taken.",
        "Be the change that you wish to see in the world.",
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        'Without music, life would be a mistake.',
        'We accept the love we think we deserve.',
        'Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring.',
        "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        "We are all in the gutter, but some of us are looking at the stars.",
        "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present"
    ];

    let messageAmount = messages.length;
    let randomIndex = Math.floor(Math.random() * messageAmount);
    console.log(messages[randomIndex]);
}
randomMessage();
