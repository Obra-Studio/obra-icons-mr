<script>
	import NavItem from './NavItem.svelte';
	import { page } from '$app/stores';
</script>

<footer>
	<div class="container padding-medium margin-0-auto footer">
		<div class="blacked-links">
			<p>
				A product by <a href="https://obra.studio">Obra Studio</a>.
				Crafting great experiences.
			</p>
		</div>

		<nav>
			<ul class="flex gap-small muted-links">
				<li>
					<NavItem
						href="/licensing"
						active={$page.url.pathname === '/licensing'}
						>Licensing</NavItem
					>
				</li>
				<li>
					<NavItem
						href="/privacy-policy"
						active={$page.url.pathname === '/privacy-policy'}
						>Privacy policy</NavItem
					>
				</li>
			</ul>
		</nav>
	</div>
</footer>
