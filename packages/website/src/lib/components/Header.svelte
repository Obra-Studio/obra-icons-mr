<script lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';
	import { IconMenu, IconBrandGithubFill } from 'obra-icons-svelte';
	import { onClickOutside } from 'runed';
	import NavItem from './NavItem.svelte';
	import { page } from '$app/state';

	let mobile = $derived(
		typeof innerWidth.current === 'number' && innerWidth.current <= 700,
	);

	// For mobile nav
	let open = $derived(false);

	function showMenu() {
		open = !open;
	}

	function closeMenu() {
		if (mobile) {
			open = false;
		}
	}

	function clickOutside(node: HTMLElement) {
		const handler = onClickOutside(node, closeMenu);

		return () => {
			handler.stop();
		};
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
										onclick={closeMenu}
										href="/"
										active={page.url.pathname === '/'}
									>
										Home
									</NavItem>
								</li>
								<li>
									<NavItem
										onclick={closeMenu}
										href="/about"
										active={page.url.pathname.startsWith(
											'/about',
										)}
									>
										About
									</NavItem>
								</li>
								<li>
									<NavItem
										onclick={closeMenu}
										href="/blog"
										active={page.url.pathname.startsWith(
											'/blog',
										)}
									>
										Blog
									</NavItem>
								</li>
								<li>
									<NavItem
										onclick={closeMenu}
										href="/changelog"
										active={page.url.pathname.startsWith(
											'/changelog',
										)}
									>
										Changelog
									</NavItem>
								</li>
							</ul>
						</nav>
					</div>

					<div class="flex align-items-center gap-large">
						<a
							href="https://github.com/Obra-Studio/obra-icons-mr"
							target="_blank"
							rel="noopener noreferrer"
							class="github-link"
							title="View on GitHub"
						>
							<IconBrandGithubFill />
						</a>
						<button class="mobile-menu-trigger" onclick={showMenu}>
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

	@media (max-width: 700px) {
		.main-menu {
			position: fixed;
			width: 12rem;
			right: 1.5rem;
			top: 4.5rem;
			padding: 1rem;
			border-radius: 1.5rem;
			background: #333;

			&:not(&.open) {
				display: none;
			}
		}

		.main-menu li {
			min-width: 100%;
		}

		.main-menu li :global(a) {
			display: block;
			padding: 0.75rem 1.25rem;
			border-radius: 1.5rem;
		}

		.mobile-menu-trigger {
			display: inline-flex;
		}
	}

	.mobile-menu-trigger:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	@media (min-width: 700px) {
		ul {
			display: flex;
			gap: 0.5rem;
		}
	}
</style>
