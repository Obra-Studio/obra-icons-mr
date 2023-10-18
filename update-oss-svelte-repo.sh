# This is a shell script to update the OSS repo, that lives outside the monorepo /packages structure

# Make sure the folder named obra-icons-svelte-public exists

cp -r packages/obra-icons-svelte .
mv obra-icons-svelte obra-icons-svelte-public
# Remove some files in there
cd obra-icons-svelte-public

# Remove any secrets
rm .env
rm .env.example
# Remove any editor related files
rm -rf .idea
rm -rf .vscode
# Remove any builds if they exist
rm -rf .svelte-kit
rm -rf dist
# Remove pnpm related files
rm pnpm-lock.yaml
# Remove the build scripts
rm -rf scripts
# Remove the marketing website root
rm src/app.html
# Remove the marketing website
rm -rf src/routes
rm -rf static
