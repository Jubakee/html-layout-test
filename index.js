document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            contents.forEach(content => {
                content.classList.remove('active');
            });

            tabs.forEach(t => {
                t.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');
            tab.classList.add('active');
        });
    });

    // Activate the first tab by default
    if (tabs.length > 0) {
        tabs[0].click();
    }
});
