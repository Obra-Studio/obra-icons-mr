<script>
	import NavItem from './NavItem.svelte';
	import { page } from '$app/state';
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
						href="/licensing-agreement"
						active={page.url.pathname === '/licensing-agreement'}
						>Licensing agreement</NavItem
					>
				</li>
				<li>
					<NavItem
						href="/privacy-policy"
						active={page.url.pathname === '/privacy-policy'}
						>Privacy policy</NavItem
					>
				</li>
				<li>
					<NavItem
						href="/support"
						active={page.url.pathname === '/support'}
						>Support</NavItem
					>
				</li>
			</ul>
		</nav>
	</div>
</footer>
