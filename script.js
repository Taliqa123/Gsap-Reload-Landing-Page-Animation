const preloader = document.querySelector('.preloader');

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		gsap.to('.preloader', {
			opacity: 0,
			duration: 2,
			onComplete() {
				preloader.style.animation = 'none';
				preloader.style.display = 'none';
			},
		});
	}, 500);

	gsap.fromTo(
		'.bg-image',
		{
			opacity: 0,
		},
		{
			opacity: 1,
			ease: 'power3.out',
			duration: 1.5,
			delay: 2,
		},
	);

	gsap.fromTo(
		'.title h1',
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			ease: 'power3.out',
			duration: 1,
			delay: 3,
		},
	);

	gsap.fromTo(
		'.title h2',
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			ease: 'power2.out',
			duration: 0.7,
			delay: 3.3,
		},
	);

	gsap.fromTo(
		'.menu a',
		{
			opacity: 0,
			x: 30,
		},
		{
			opacity: 1,
			x: 0,
			duration: 0.4,
			stagger: 0.3,
			delay: 3.5,
		},
	);

	gsap.fromTo(
		'.brand',
		{
			opacity: 0,
			x: -50,
		},
		{
			opacity: 1,
			x: 0,
			duration: 0.4,
			delay: 3.5,
		},
	);

	gsap.fromTo(
		'.btn',
		{
			opacity: 0,
			y: 50,
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.4,
			delay: 4.5,
		},
	);

	gsap.fromTo(
		'.social a',
		{
			opacity: 0,
			y: 30,
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.4,
			stagger: 0.3,
			delay: 5,
		},
	);
});
