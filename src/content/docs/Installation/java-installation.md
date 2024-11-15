---
title: Installing Java 17 on Ubuntu
description: Java 17
---


1. Update package index:
```bash
sudo apt update
```

2. Install Java 17:
```bash
sudo apt install -y openjdk-17-jdk
```

3. Verify installation:
```bash
java -version
```

4. Set JAVA_HOME (add to ~/.bashrc):
```bash
echo 'export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java))))' >> ~/.bashrc
echo 'export PATH=$PATH:$JAVA_HOME/bin' >> ~/.bashrc
source ~/.bashrc
