---
title: Bash Scripts
description: Bash
---


### Docker Installation Script for Linux
```bash
#!/bin/bash

# Remove any old Docker installations
sudo apt-get remove docker docker-engine docker.io containerd runc

# Update package index
sudo apt-get update

# Install prerequisites
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up stable repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Add current user to docker group
sudo usermod -aG docker $USER

# Verify installation
docker --version
```

### System Details Script
```bash
#!/bin/bash

# Output system information in a formatted way
echo "=== System Information ==="
echo "Operating System: $(uname -s)"
echo "Kernel Version: $(uname -r)"
echo "Architecture: $(uname -m)"
echo ""

echo "=== CPU Information ==="
echo "CPU Model: $(grep "model name" /proc/cpuinfo | head -n1 | cut -d ":" -f2)"
echo "CPU Cores: $(nproc)"
echo ""

echo "=== Memory Information ==="
echo "Total Memory: $(free -h | grep "Mem:" | awk '{print $2}')"
echo "Used Memory: $(free -h | grep "Mem:" | awk '{print $3}')"
echo "Free Memory: $(free -h | grep "Mem:" | awk '{print $4}')"
echo ""

echo "=== Disk Information ==="
df -h
echo ""

echo "=== Network Information ==="
ip addr show
```

### DHCP Server Setup Script for Ubuntu
```bash
#!/bin/bash

# Install DHCP server
sudo apt-get update
sudo apt-get install -y isc-dhcp-server

# Backup original configuration
sudo cp /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf.backup

# Create new DHCP configuration
cat << EOF | sudo tee /etc/dhcp/dhcpd.conf
default-lease-time 600;
max-lease-time 7200;

subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;
    option routers 192.168.1.1;
    option domain-name-servers 8.8.8.8, 8.8.4.4;
}
EOF

# Configure network interface
sudo sed -i 's/INTERFACESv4=""/INTERFACESv4="eth0"/' /etc/default/isc-dhcp-server

# Start and enable DHCP service
sudo systemctl restart isc-dhcp-server
sudo systemctl enable isc-dhcp-server

# Check status
sudo systemctl status isc-dhcp-server
```
