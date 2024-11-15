---
title: Installing Gradle on Ubuntu
description: Gradle
---


1. Install required packages:
```bash
sudo apt update
sudo apt install -y unzip wget
```

2. Download and install Gradle:
```bash
wget https://services.gradle.org/distributions/gradle-7.6-bin.zip
sudo mkdir /opt/gradle
sudo unzip -d /opt/gradle gradle-7.6-bin.zip
```

3. Configure environment variables (add to ~/.bashrc):
```bash
echo 'export GRADLE_HOME=/opt/gradle/gradle-7.6' >> ~/.bashrc
echo 'export PATH=$PATH:$GRADLE_HOME/bin' >> ~/.bashrc
source ~/.bashrc
```

4. Verify installation:
```bash
gradle --version
```
