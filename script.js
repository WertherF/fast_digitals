document.addEventListener('DOMContentLoaded', () => {
    const reasons = [
        {
            icon: 'users',
            text: "Customer-Centered Approach",
            description: "We prioritize our customers' needs and feedback, ensuring that our solutions are tailored to their specific requirements and continuously evolve to meet their changing needs."
        },
        {
            icon: 'zap',
            text: "Expert Solutions",
            description: "Our team of seasoned professionals brings years of experience and cutting-edge knowledge to deliver top-tier, innovative solutions that stand out in the market."
        },
        {
            icon: 'sparkles',
            text: "Simplicity in Complexity",
            description: "We excel at distilling complex problems into user-friendly solutions, focusing on intuitive interfaces and streamlined processes that enhance efficiency and user satisfaction."
        },
        {
            icon: 'headset',
            text: "Continuous Support",
            description: "Our commitment doesn't end at delivery. We provide ongoing support, regular updates, and proactive improvements to ensure your solution remains effective and up-to-date."
        }
    ];

    const reasonsContainer = document.getElementById('reasons-container');

    reasons.forEach((reason, index) => {
        const reasonElement = document.createElement('div');
        reasonElement.className = 'mb-4';
        reasonElement.innerHTML = `
            <button class="reason-button" data-index="${index}">
                <div class="flex items-center">
                    <i data-lucide="${reason.icon}" class="reason-icon"></i>
                    <span>${reason.text}</span>
                </div>
                <i data-lucide="chevron-right" class="reason-chevron"></i>
            </button>
            <div class="reason-description">
                <p>${reason.description}</p>
            </div>
        `;
        reasonsContainer.appendChild(reasonElement);
    });

    // Initialize Lucide icons
    lucide.createIcons();

    // Add click event listeners to reason buttons
    const reasonButtons = document.querySelectorAll('.reason-button');
    reasonButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            const chevron = button.querySelector('.reason-chevron');
            const description = button.nextElementSibling;

            chevron.classList.toggle('open');
            description.classList.toggle('open');

            // Close other open descriptions
            reasonButtons.forEach((otherButton, otherIndex) => {
                if (otherIndex !== parseInt(index)) {
                    const otherChevron = otherButton.querySelector('.reason-chevron');
                    const otherDescription = otherButton.nextElementSibling;
                    otherChevron.classList.remove('open');
                    otherDescription.classList.remove('open');
                }
            });
        });
    });
});
