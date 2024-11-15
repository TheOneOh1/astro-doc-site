---
title: Installing Node.js on Ubuntu
description: Node
---


1. Install Node.js using NodeSource repository:
```bash
# Download and execute NodeSource setup script
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

# Install Node.js
sudo apt-get install -y nodejs

# Install build essentials (optional)
sudo apt-get install -y build-essential
```

2. Verify installation:
```bash
node --version
npm --version
```
