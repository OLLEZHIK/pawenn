import sys, json, re

def parse_mcp_output(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match JSON block after ### Result
    m = re.search(r'### Result\s*(\{.*\})\s*(?:### Ran Playwright|\Z)', content, re.DOTALL)
    if m:
        return json.loads(m.group(1))
    # Or just find the first { to the matching }
    idx = content.find('{')
    if idx != -1:
        # find last }
        last_idx = content.rfind('}')
        if last_idx != -1:
            return json.loads(content[idx:last_idx+1])
    raise ValueError("Could not find JSON in output")

if __name__ == '__main__':
    data = parse_mcp_output(sys.argv[1])
    print(f"Total with text: {data.get('totalExtractedWithText')}")
    print(f"<6m: {data.get('under6m')}, <12m: {data.get('under12m')}, <24m: {data.get('under24m')}")
    reviews = data.get('reviews', [])
    print(f"Number of <24m reviews: {len(reviews)}")
    for i, r in enumerate(reviews):
        print(f"[{i+1}] {r['dateText']} ({r['months']}m) | {r['stars']}* | {r['author']}: {r['text'][:140]}...")
