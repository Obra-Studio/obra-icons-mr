<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import NavItem from './NavItem.svelte';
	import { onMount } from 'svelte';
	import { IconMenu } from 'obra-icons-svelte';
	const version = import.meta.env.VITE_APP_VERSION;

	let menuShown = false;
	let windowWidth = 0;

	onMount(() => {
		if (browser) {
			windowWidth = window.innerWidth;
		}
	});

	$: if (browser && (windowWidth <= 700)) {
		menuShown = false;
	} else {
		menuShown = true;
	}

	function showMenu() {
		menuShown = !menuShown;
	}

	function closeMenu() {
		if (windowWidth <= 700) {
			menuShown = false;
		}
	}

</script>

<svelte:window bind:innerWidth={windowWidth} />

<header>
	<div class="is-dark">
		<div class="bg-black">
			<div class="container padding-medium margin-0-auto is-dark">
				<div class="flex justify-content-space-between align-items-center gap-large">
					<div class="flex align-items-center gap-large">

						<h1 class="logo">
							<a href="/">
								<img src="/logo-obra.svg" alt="Obra" />
								<span> Icons</span>
							</a>
						</h1>

						{#if menuShown}
							<nav>
								<ul class="main-menu">
									<li><NavItem on:click={closeMenu} href="/" active={$page.url.pathname === '/'}>Home</NavItem></li>
									<li><NavItem on:click={closeMenu} href="/about" active={$page.url.pathname.startsWith('/about')}>About</NavItem></li>
									<li><NavItem on:click={closeMenu} href="/blog" active={$page.url.pathname.startsWith('/blog')}>Blog</NavItem></li>
									<li><NavItem on:click={closeMenu} href="/buy" active={$page.url.pathname.startsWith('/buy')}>Buy</NavItem></li>
								</ul>
						</nav>
						{/if}
					</div>

					<div class="flex align-items-center gap-large">
						<p>{version}</p>
						<button class="mobile-menu-trigger" on:click={showMenu}>
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


    .mobile-menu-trigger {
        appearance: none;
        background: none;
        color: #FFF;
        font-size: 1rem;
        border: none;
		padding: .75rem 1.25rem;
        gap: .5rem;
        display: none;
        align-items: center;
        justify-content: center;
        border-radius: 1.5rem;
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
        }

		.main-menu li {
			min-width: 100%;
		}

		.main-menu li :global(a) {
			display: block;
			padding: .75rem 1.25rem;
			border-radius: 1.5rem;
		}

        .mobile-menu-trigger {
            display: inline-flex;
        }
    }

    .mobile-menu-trigger:hover {
        background: rgba(255,255,255,.2);
    }

    @media (min-width: 700px) {
        ul {
            display: flex;
            gap: .5rem;
        }
    }
</style>
