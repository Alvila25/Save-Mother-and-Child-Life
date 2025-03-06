// Animate stats on scroll
const stats = document.querySelectorAll('.stat');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            let count = 0;
            const increment = target / 50;
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    entry.target.querySelector('h3').textContent = `${Math.ceil(count)}${target > 100 ? '+' : '%'}`;
                    requestAnimationFrame(updateCount);
                } else {
                    entry.target.querySelector('h3').textContent = `${target}${target > 100 ? '+' : '%'}`;
                }
            };
            updateCount();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => observer.observe(stat));
