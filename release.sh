#!/usr/bin/env bash
set -euo pipefail

start=$(date +%s)
root_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
release_dir="$root_dir/release"

cd "$root_dir"
yarn build:production

mkdir -p "$release_dir"
rm -f "$release_dir/panel.tar.gz" "$release_dir/panel.zip"

tar -czf "$release_dir/panel.tar.gz" \
    --exclude='./.git' \
    --exclude='./node_modules' \
    --exclude='./vendor' \
    --exclude='./release' \
    --exclude='./tmp' \
    --exclude='./.env' \
    --exclude='./.env.ci' \
    --exclude='./storage/app/private/*' \
    --exclude='./storage/app/public/*' \
    --exclude='./storage/clockwork/*' \
    --exclude='./storage/logs/*' \
    --exclude='./storage/framework/cache/*' \
    --exclude='./storage/framework/sessions/*' \
    --exclude='./storage/framework/views/*' \
    -C "$root_dir" .

zip -qr "$release_dir/panel.zip" . \
    -x './.git/*' \
    -x './node_modules/*' \
    -x './vendor/*' \
    -x './release/*' \
    -x './tmp/*' \
    -x './.env' \
    -x './.env.ci' \
    -x './storage/app/private/*' \
    -x './storage/app/public/*' \
    -x './storage/clockwork/*' \
    -x './storage/logs/*' \
    -x './storage/framework/cache/*' \
    -x './storage/framework/sessions/*' \
    -x './storage/framework/views/*'

end=$(date +%s)
echo "MZCloud packages built in $((end - start)) seconds: $release_dir"
