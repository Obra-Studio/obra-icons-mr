<script lang="ts">
	import { page } from '$app/stores';
	import NavItem from './NavItem.svelte';
	const version = import.meta.env.VITE_APP_VERSION;
</script>

<header>
	<div class="is-dark">
		<div class="bg-black">
			<div class="container padding-medium margin-0-auto is-dark">

					<div class="flex justify-content-space-between align-items-center gap-large">

						<div class="flex align-items-center gap-large">
							<h1 class="logo">
								<a href="./">
									<img src="/logo-obra.svg" alt="Obra" />
									<span> Icons</span>
								</a>
							</h1>

							<nav>
								<ul class="flex align-items-center gap-small">
									<li>
										<NavItem
											href="/"
											active={$page.url.pathname === '/'}
											>Home</NavItem
										>
									</li>
									<li>
										<NavItem
											active={$page.url.pathname.startsWith(
												'/about',
											)}
											href="/about">About</NavItem
										>
									</li>
									<li>
										<NavItem
											active={$page.url.pathname.startsWith(
												'/buy',
											)}
											href="/buy">Buy Obra Icons</NavItem
										>
									</li>
								</ul>
							</nav>
						</div>
						<p>{version}</p>
				</div>
			</div>
		</div>
	</div>
</header>
