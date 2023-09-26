import { KEYWORDS_FILE, SVG_OUT_DIR } from './paths';
import { writeFile, readdir } from 'fs/promises';
import { basename } from 'path';
import OpenAI from 'openai';

console.time('generate keywords');

//? Create the OpenAI client
const openai = new OpenAI({
	apiKey: import.meta.env.SCRIPTS_OPENAI_KEY,
});

console.log('Finding icon names');

//? Find all the icon svg files so we can use the names
const icon_files = await readdir(SVG_OUT_DIR);

//? Normalise the names and remove the .svg extension
const icon_names = icon_files.map((name) => basename(name).slice(0, -4));

console.log('Generating keywords');

//? Map the keywords icon_name:keywords
const keywords_map = new Map<string, string[]>();

let i = 0;

//? Generate the keywords map
for (const name of icon_names) {
	console.log(`  Generating keywords for icon "${name}"`);

	//? Ask gpt4 for keywords
	const completion = await openai.chat.completions.create({
		model: 'gpt-4',
		n: 1,
		temperature: 0,
		max_tokens: 50,
		// prettier-ignore
		messages: [
            //? The prompt
            { role: 'system', content: 'The user will give you an icon name, please provide no more than 6 synonyms. Each synonym should be a simple plain english word, that a user might give when searching for the icon.' },
            
            //? Example
            { role: 'user', content: 'clock' },
            { role: 'assistant', content: 'time\nwatch\nalarm\nstopwatch' },
            
            //? Provide the icon
            { role: 'user', content: name },
        ],
	});

	//? Parse and normalise the result
	const keywords = completion.choices[0].message.content?.trim().split('\n');

	if (!keywords || !keywords.length) {
		//? Handle no keywords, hopefully this doesn't happen
		throw new Error(`No keywords for ${name}`);
	}

	keywords_map.set(name, keywords);
}

console.log('Writing keywords');

//? Convert the keywords map to json
const keywords_json = JSON.stringify(
	Object.fromEntries(keywords_map),
	null,
	2,
).replace(/"/g, "'");

//? The keywords ts file template
const template = `//prettier-ignore
export default ${keywords_json};
`;

//? Write they keywords
await writeFile(KEYWORDS_FILE, template, 'utf-8');

console.timeEnd('generate keywords');
