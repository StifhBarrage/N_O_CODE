document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        console.log('premium section visible');
    });

    observer.observe(document.querySelector('.premium'));

});