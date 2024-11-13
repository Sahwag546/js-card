const box = document.getElementById('box');
const cardsData = [
    {
        title: "Congratulation",
        description: "Lorem ipsum dolor sit, adipisicing elit. Maxime, ratione?",
        image: "https://img.freepik.com/premium-photo/colorful-birdbird-flying-sky-generated-ai_644690-1348.jpg?ga=GA1.1.677278728.1727690235&semt=ais_hybrid"
    },
    {
        title: "Heading",
        description: "Lorem ipsum dolor sit, amet elit. Maxime, ratione?",
        image: "https://img.freepik.com/premium-photo/colorful-parrot-with-black-background_856660-85.jpg?ga=GA1.1.677278728.1727690235&semt=ais_hybrid"
    },
    {
        title: "Welcome",
        description: "Lorem ipsum dolor sit adipisicing elit. Maxime, ratione?",
        image: "https://img.freepik.com/premium-photo/colorful-parrot-with-black-background_856660-89.jpg?ga=GA1.1.677278728.1727690235&semt=ais_hybrid"
    },
    {
        title: "Very happy",
        description: "Lorem ipsum dolor sit, amet  elit. Maxime, ratione?",
        image: "https://img.freepik.com/premium-photo/colorful-parrot-with-black-beak-yellow-eyes_856660-91.jpg?ga=GA1.1.677278728.1727690235&semt=ais_hybrid"
    }
];

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}" class="card-image">
        <div class="card-content">
            <h2 class="card-title">${card.title}</h2>
            <p class="card-description">${card.description}</p>
            <a href="#" class="card-button">Click</a>
        </div>
    `;

    box.appendChild(cardElement);
});

