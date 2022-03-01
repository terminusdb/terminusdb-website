#!/usr/bin/env python3

import os
import requests
import sys

files = [
    'https://terminusdb.com/',
    'https://terminusdb.com',
]

headers = {
    'X-Auth-Email': os.environ["CLOUDFLARE_EMAIL"],
    'X-Auth-Key': os.environ["CLOUDFLARE_API_KEY"],
}
zone = os.environ["CLOUDFLARE_ZONE"]
print(requests.post(f"https://api.cloudflare.com/client/v4/zones/{zone}/purge_cache", json={'files': files}, headers=headers).text)
