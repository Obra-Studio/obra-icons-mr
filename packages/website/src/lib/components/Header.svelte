<script lang="ts">
	import { IconMenu, IconBrandGithubFill } from 'obra-icons-svelte';
	import NavItem from './NavItem.svelte';
	import { page } from '$app/state';
	import { onClickOutside } from 'runed';

	let open = $state(0);

	function toggleMenu() {
		open = !open;
	}

	function closeMenu() {
		open = false;
	}

	function clickOutside(node: HTMLElement) {
		const handler = onClickOutside(node, closeMenu);

		return () => {
			handler.stop();
		};
		open = false;
	}
</script>

<header>
	<div class="is-dark">
		<div class="bg-black">
			<div class="container padding-medium margin-0-auto is-dark">
				<div
					class="flex justify-content-space-between align-items-center gap-large"
				>
					<div class="flex align-items-center gap-large">
						<h1 class="logo">
							<a href="/">
								<img alt="Obra" src="/logo-obra.svg" />
								<span> Icons</span>
							</a>
						</h1>

						<nav {@attach clickOutside}>
							<ul class="main-menu" class:open>
								<li>
									<NavItem
										active={page.url.pathname === '/'}
										href="/"
										onclick={closeMenu}
									>
										Home
									</NavItem>
								</li>
								<li>
									<NavItem
										active={page.url.pathname.startsWith(
											'/about',
										)}
										href="/about"
										onclick={closeMenu}
									>
										About
									</NavItem>
								</li>
								<li>
									<NavItem
										active={page.url.pathname.startsWith(
											'/blog',
										)}
										href="/blog"
										onclick={closeMenu}
									>
										Blog
									</NavItem>
								</li>
								<li>
									<NavItem
										active={page.url.pathname.startsWith(
											'/changelog',
										)}
										href="/changelog"
										onclick={closeMenu}
									>
										Changelog
									</NavItem>
								</li>
							</ul>
						</nav>
					</div>

					<div class="flex align-items-center gap-large">
						<a
							class="github-link"
							href="https://github.com/Obra-Studio/obra-icons-mr"
							rel="noopener noreferrer"
							target="_blank"
							title="View on GitHub"
						>
							<IconBrandGithubFill />
						</a>
						<button
							class="mobile-menu-trigger"
							class:open
							onclick={toggleMenu}
						>
							<IconMenu />
							Menu
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	.github-link {
		color: #fff;
		padding: 0.5rem;
		border-radius: 0.5rem;
		transition: background-color 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.github-link:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.mobile-menu-trigger {
		appearance: none;
		background: none;
		color: #fff;
		font-size: 1rem;
		border: none;
		padding: 0.75rem 1.25rem;
		gap: 0.5rem;
		display: none;
		align-items: center;
		justify-content: center;
		border-radius: 1.5rem;
		cursor: pointer;
	}

	.mobile-menu-trigger.open {
		box-shadow: 0 0 0 2px #fff;
	}

	.mobile-menu-trigger:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	@media (max-width: 700px) {
		.mobile-menu-trigger {
			display: flex;
		}
	}

	@media (max-width: 700px) {
		.main-menu {
			position: fixed;
			width: 12rem;
			right: 1.5rem;
			top: 5.5rem;
			padding: 1rem;
			border-radius: 1.5rem;
			background: #333;
			visibility: hidden;
			opacity: 0;
			transition:
				visibility 0s,
				opacity 0.2s;
		}

		.main-menu.open {
			visibility: visible;
			opacity: 1;
			z-index: 1;
		}

		.main-menu li {
			min-width: 100%;
		}

		.main-menu li :global(a) {
			display: block;
			padding: 0.75rem 1.25rem;
			border-radius: 1.5rem;
		}
	}

	@media (min-width: 700px) {
		ul {
			display: flex;
			gap: 0.5rem;
		}
	}
</style>
