<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'New: React package',
        date: '2024-09-16',
        tags: 'package'
    };
</script>

We added a React package to Obra Icons. Now it's possible to use Obra Icons easily in a react context.

To install:

```
npm i --save obra-icons-react
```

To use ([example on CodeSandbox](https://codesandbox.io/p/sandbox/j62vlt)):

```js
import { IconAddRoundrect } from "obra-icons-react";

export default function App() {
	return (
		<div>
			<IconAddRoundrect strokeWidth={1} color="red" size={64}/>
		</div>
	);
}
```

With this change, we also provided the foundations to add more formats, for example a Vue package. If you would like to
see Obra Icons in more formats, <a href="mailto:johan@obra.studio">let us know</a>!
