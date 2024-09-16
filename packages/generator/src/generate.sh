echo "Running generate:icons"
pnpm run generate:icons $1

if [ $? -ne 0 ]; then
  echo "generate:icons failed"
  exit 1
fi

echo "Running generate:keywords"
pnpm run generate:keywords

if [ $? -ne 0 ]; then
  echo "generate:keywords failed"
  exit 1
fi