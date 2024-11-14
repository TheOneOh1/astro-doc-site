---
title: Environment Setup
description: Environment Setup
---

# Microservices
### Java 17 eclipse adoptium on Linux

```
[Download java tar file]
> wget https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.1%2B12/OpenJDK17U-jdk_x64_linux_hotspot_17.0.1_12.tar.gz

NOTE: If error shows "ERROR: The certificate of ‘github.com’ is not trusted."
> apt install ca-certificates -y
and try the wget command again

[Extract the tar file]
> tar -xzvf OpenJDK17U-jdk_x64_linux_hotspot_17.0.1_12.tar.gz

[move extracted folder to /opt]
> mv jdk-17.0.1+12/ /opt/

[add this java version to java-list]
> sudo update-alternatives --install /usr/bin/java java /opt/jdk-17.0.1+12/bin/java 500

> sudo update-alternatives --config java
[Select the index of the Java version you want to use]

> java --version
[Java would be installed]
```

### Gradle on Linux

- Java installation is a prerequisite for Gradle to be installed
- To download the latest version of **Gradle**, visit the [Gradle releases page](https://gradle.org/releases/)

```
[Install Gradle]
> wget -c https://services.gradle.org/distributions/gradle-7.4.2-bin.zip -P /tmp
> cd /tmp/

[unzip the file in /opt]
> unzip -d /opt/gradle /tmp/gradle-7.4.2-bin.zip

[Set up environment variables for gradle]
> nano /etc/profile.d/gradle.sh
	|
	|-->
		export GRADLE_HOME=/opt/gradle/gradle-7.4.2  
		export PATH=${GRADLE_HOME}/bin:${PATH}

> chmod +x /etc/profile.d/gradle.sh

> source /etc/profile.d/gradle.sh

> gradle --version
[Gradle will be installed]

```

## Install Specific version of Gradle using SDKman

```
[download and run SDKman]
> curl -s "https://get.sdkman.io" | bash

[execute env path]
> source "$HOME/.sdkman/bin/sdkman-init.sh"

[verify if installed]
> sdk version

[This will show available gradle versions]
> sdk list gradle

[to download specific version]
> sdk install gradle 7.6

[Check and verify gradle]
> gradle -v
```

________________________________________________

# Epariksha

### Java 11 on Rocky Linux

```
> sudo yum install java-11-openjdk java-11-openjdk-devel
[this will install the java 11]

> sudo update-alternatives --config java
[Select the index of the Java version you want to use]

> java --version
[Java would be installed]
```

### TomCat 9 on Rocky Linux

```
NOTE: Make sure Java is installed

[Creating Tomcat user and Group]
> sudo groupadd --system tomcat 
> sudo useradd -d /usr/share/tomcat -r -s /bin/false -g tomcat tomcat

[Installing Tomcat]
> export VER="9.0.64" 
> wget https://archive.apache.org/dist/tomcat/tomcat-9/v${VER}/bin/apache-tomcat-${VER}.tar.gz

[Extracting and linking tomcat]
> sudo tar xvf apache-tomcat-${VER}.tar.gz -C /usr/share/
> sudo ln -s /usr/share/apache-tomcat-$VER/ /usr/share/tomcat

[Setting user permissions]
> sudo chown -R tomcat:tomcat /usr/share/tomcat  
> sudo chown -R tomcat:tomcat /usr/share/apache-tomcat-$VER/

[Configuring Tomcat Systemd service ]
> sudo vim /etc/systemd/system/tomcat.service
	|
	|--->
			[Unit]
			Description=Tomcat
			After=syslog.target network.target
			
			[Service]
			Type=forking
			User=tomcat
			Group=tomcat
			
			Environment=JAVA_HOME=/usr/lib/jvm/jre-openjdk
			Environment='JAVA_OPTS=-Djava.awt.headless=true'
			
			Environment=CATALINA_HOME=/usr/share/tomcat
			Environment=CATALINA_BASE=/usr/share/tomcat
			Environment=CATALINA_PID=/usr/share/tomcat/temp/tomcat.pid
			
			ExecStart=/usr/share/tomcat/bin/catalina.sh start
			ExecStop=/usr/share/tomcat/bin/catalina.sh stop
			
			[Install]
			WantedBy=multi-user.target

[Start and enable the service]
> sudo systemctl daemon-reload 
> sudo systemctl restart tomcat 
> sudo systemctl enable tomcat

[firewall entry for port 8080]
> sudo firewall-cmd --permanent --add-port=8080/tcp  
> sudo firewall-cmd --reload

[Configuring tomcat admin/users]
> sudo nano /usr/share/tomcat/conf/tomcat-users.xml
[Enter the following before </tomcat-users>]
	|
	|-->
		<role rolename="admin-gui"/> <role rolename="manager-gui"/> 
		<user username="admin" password="pass" roles="admin-gui,manager-gui"/>

[to make sure you can access manager from outside localhost]
> nano /usr/share/tomcat/webapps/manager/META-INF/context.xml
[comment the following lines]
	|
	|-->
		<Valve className="org.apache.catalina.valves.RemoteAddrValve"
         allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1" />

[Do same commenting for below]
> vi /usr/share/tomcat/webapps/host-manager/META-INF/context.xml
```
- Once done your tomcat will be up and running on http://localhost:8080

________________________________________

# SonarQube Installation

**Preconfiguration**
```
[Install required tools]
> sudo apt update
> sudo apt install net-tools wget unzip vim curl

[Adding SonarQube requirements]
> sudo nano /etc/sysctl.conf
	|
	|-->
		vm.max_map_count=262144 
		fs.file-max=65536

[reload system configs]
> sudo sysctl --system
```

- Make sure that java 11+ is installed on your system for this to proceed further.
- Now we will install a DB [PostgreSQL]
- SonarQube needs a database to store all the information about the analysis hence PostgreSQL.

```
[GPG key for PostgreSQL]
> wget -q https://www.postgresql.org/media/keys/ACCC4CF8.asc -O - | sudo apt-key add -

[Adding to repository]
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'

[installation]
> apt update
> apt install postgresql postgresql-contrib

[systemctl]
> systemctl start postgresql
> systemctl enable postgresql
```

**Creating PostgreSQL database for SonarQube**

```
[creating postgres user and password]

> sudo passwd postgres
> su - postgres
> createuser sonar
> psql
	# ALTER USER sonar WITH ENCRYPTED PASSWORD 'Passw0rd';
	# CREATE DATABASE sonarqube OWNER sonar;
	# GRANT ALL PRIVILEGES ON DATABASE sonarqube to sonar;
	# \q

exit from postgres user
```

**Download and Configure SonarQube**

```
> wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-9.1.0.47736.zip

> unzip sonarqube-*.zip

> sudo mv sonarqube-*/ /opt/sonarqube

[Creating system user for sonarqube]
> sudo useradd -M -d /opt/sonarqube/ -r -s /bin/bash sonarqube

> chown -R sonarqube: /opt/sonarqube

[configuring sonarqube properties]
> sudo nano /opt/sonarqube/conf/sonar.properties
	|
	|-->
		# User Credentials
		sonar.jdbc.username=sonar 
		sonar.jdbc.password=password

		# PostgreSQL 9.6 or greater
		sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube

		# web server
		sonar.web.javaOpts=-Xmx512m -Xms128m -XX:+HeapDumpOnOutOfMemoryError

		sonar.web.host=<host_IP>
		sonar.web.port=9000

		# ELASTICSEARCH
		sonar.search.javaOpts=-Xmx512m -Xms512m -XX:MaxDirectMemorySize=256m -XX:+HeapDumpOnOutOfMemoryError

Save and Exit
```

**Creating SonarQube Systemd service**

```
> sudo nano /etc/systemd/system/sonarqube.service
	|
	|-->
		[Unit]
		Description=SonarQube service
		After=syslog.target network.target
		
		[Service]
		Type=forking
		ExecStart=/opt/sonarqube/bin/linux-x86-64/sonar.sh start
		ExecStop=/opt/sonarqube/bin/linux-x86-64/sonar.sh stop
		User=sonarqube
		Group=sonarqube
		Restart=always
		LimitNOFILE=65536
		LimitNPROC=4096
		
		[Install]
		WantedBy=multi-user.target
save and exit

> sudo systemctl daemon-reload
> sudo systemctl start sonarqube
> sudo systemctl enable sonarqube

[allow 9000 port through firewall]
> sudo ufw allow 9000

[check if the port is active]
> sudo ss -plunt|grep 9000
```

- You can access the sonarqube using the URL http://server-ip:9000
- Default username will be *admin* and password will be *admin*
- Once logged in it will ask you to update the password.

______________________________________________________

# Install Sonar Scanner

```
> mkdir /downloads/sonarqube -p

> cd /downloads/sonarqube

> wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.2.0.1873-linux.zip

> unzip sonar-scanner-cli-4.2.0.1873-linux.zip

[move the unzipped dir to opt]
> mv sonar-scanner-4.2.0.1873-linux /opt/sonar-scanner

[configure sonar scanner properties]
> nano /opt/sonar-scanner/conf/sonar-scanner.properties
	|
	|-->
		sonar.host.url=http://<sonarqube-ip>:9000
		sonar.sourceEncoding=UTF-8

[script to automate env variables]
> nano /etc/profile.d/sonar-scanner.sh
	|
	|-->
		#/bin/bash
		export PATH="$PATH:/opt/sonar-scanner/bin"

> source /etc/profile.d/sonar-scanner.sh

[check if installed]
> sonar-sacnner -v
```

 - You can access the sonarqube using the URL http://server-ip:9000

> Add project, give name and follow the instrutions