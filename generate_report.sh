#!/bin/bash
# Generate report.pdf from report_source.html using headless Chromium

DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$DIR/report_source.html"
PDF="$DIR/report.pdf"
DEV_BROWSER="$HOME/.claude/plugins/cache/dev-browser-marketplace/dev-browser/66682fb0513a/skills/dev-browser"

[ ! -f "$SRC" ] && echo "Error: $SRC not found" && exit 1

pkill -f "dev-browser/server" 2>/dev/null
sleep 1
cd "$DEV_BROWSER" && ./server.sh --headless > /tmp/dev-browser-regen.log 2>&1 &

for i in $(seq 1 15); do
  grep -q "port 9222" /tmp/dev-browser-regen.log 2>/dev/null && break
  sleep 1
done

grep -q "port 9222" /tmp/dev-browser-regen.log 2>/dev/null || { echo "Error: server failed to start"; exit 1; }

cd "$DEV_BROWSER" && npx tsx <<EOF
import { connect, waitForPageLoad } from "@/client.js";
const client = await connect();
const page = await client.page("pdf-export", { viewport: { width: 816, height: 1056 } });
await page.goto("file://${SRC}");
await waitForPageLoad(page);
await page.waitForTimeout(1000);
await page.pdf({
  path: "${PDF}",
  format: "Letter",
  margin: { top: "0.75in", bottom: "0.75in", left: "0.75in", right: "0.75in" },
  printBackground: true
});
await client.disconnect();
EOF

pkill -f "dev-browser/server" 2>/dev/null
echo "Generated: $PDF"
