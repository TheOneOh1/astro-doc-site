---
title: Interview Questions
description: Questions for interviews
---


Here’s a collection of basic and intermediate interview questions along with answers for each of the technologies you mentioned. These questions will help in understanding both basic concepts and practical implementations.

---

### **AWS EC2**

#### **Basic Questions:**

1. **What is AWS EC2?**
   - **Answer:** AWS EC2 (Elastic Compute Cloud) is a web service that provides resizable compute capacity in the cloud. It allows users to launch and manage virtual servers on-demand.

2. **What are the different types of EC2 instances?**
   - **Answer:** EC2 instances are divided into various types based on performance: General Purpose (T, M), Compute Optimized (C), Memory Optimized (R, X), Storage Optimized (I, D), and GPU instances (P, G).

3. **What is an AMI in EC2?**
   - **Answer:** AMI (Amazon Machine Image) is a template used to create new EC2 instances. It contains the operating system, application server, and applications to launch a server.

4. **What are EC2 key pairs?**
   - **Answer:** Key pairs are secure login credentials used to connect to an EC2 instance. They consist of a private key (stored on the user's device) and a public key (stored in AWS).

5. **What is EBS in EC2?**
   - **Answer:** EBS (Elastic Block Store) is a persistent block storage solution for EC2 instances. It provides high-availability and low-latency block storage.

#### **Intermediate Questions:**

1. **What is EC2 Auto Scaling?**
   - **Answer:** EC2 Auto Scaling automatically adjusts the number of instances based on load to maintain application availability and performance, scaling in and out depending on traffic.

2. **What is a Security Group in EC2?**
   - **Answer:** A Security Group is a virtual firewall for EC2 instances that controls inbound and outbound traffic using defined rules. It helps to secure the instance by restricting network access.

3. **How do Spot Instances work in EC2?**
   - **Answer:** Spot Instances allow users to bid on unused EC2 capacity at lower prices than On-Demand instances. They can be terminated by AWS when capacity is needed elsewhere.

4. **What is the difference between a Reserved Instance and an On-Demand Instance?**
   - **Answer:** Reserved Instances offer discounts for committing to a specific instance type over a period (1 or 3 years), while On-Demand Instances allow users to pay for compute capacity by the hour without any long-term commitment.

5. **What is the use of Elastic IP in EC2?**
   - **Answer:** Elastic IP is a static, public IP address that can be associated with an EC2 instance. It allows the instance to retain a public IP even when it’s stopped or started.

---

### **AWS Lambda**

#### **Basic Questions:**

1. **What is AWS Lambda?**
   - **Answer:** AWS Lambda is a serverless compute service that runs code in response to events. It automatically manages the underlying infrastructure.

2. **What are Lambda triggers?**
   - **Answer:** Triggers are the events that invoke a Lambda function, such as an S3 file upload, SNS message, or API Gateway request.

3. **What language runtimes does AWS Lambda support?**
   - **Answer:** Lambda supports various runtimes like Python, Node.js, Java, Go, .NET Core, Ruby, and custom runtimes using AWS Lambda layers.

4. **What is the Lambda execution role?**
   - **Answer:** The execution role is an AWS IAM role that grants the Lambda function permissions to interact with other AWS services, such as reading an S3 bucket or writing logs to CloudWatch.

5. **What is the timeout in AWS Lambda?**
   - **Answer:** The timeout is the maximum duration that a Lambda function can run. The default is 3 seconds, and the maximum is 15 minutes.

#### **Intermediate Questions:**

1. **How does Lambda pricing work?**
   - **Answer:** Lambda pricing is based on the number of requests and the compute time used (measured in GB-seconds). Users are charged for each request and the amount of memory allocated during the execution.

2. **What are Lambda Layers?**
   - **Answer:** Lambda Layers are a mechanism for managing shared code and dependencies. You can use layers to include libraries, custom runtimes, or other assets in your function.

3. **How can you scale AWS Lambda?**
   - **Answer:** AWS Lambda automatically scales with incoming traffic by launching more copies of your function when needed. The scaling happens concurrently, depending on the number of requests.

4. **How do you secure Lambda functions?**
   - **Answer:** Lambda functions can be secured using AWS IAM roles, VPCs (for network security), environment variables (for secrets management), and encryption for sensitive data.

5. **What is the maximum package size you can deploy to AWS Lambda?**
   - **Answer:** The maximum deployment package size for AWS Lambda is 50 MB (zipped), and for Lambda layers, it is 250 MB (unzipped).

---

### **AWS S3**

#### **Basic Questions:**

1. **What is AWS S3?**
   - **Answer:** AWS S3 (Simple Storage Service) is a scalable object storage service that can store and retrieve any amount of data from anywhere.

2. **What are S3 Buckets?**
   - **Answer:** Buckets are containers for storing objects in S3. Each bucket has a globally unique name, and objects are stored inside the bucket.

3. **What is the maximum size of an object in S3?**
   - **Answer:** The maximum size for a single object in S3 is 5 TB.

4. **What is S3 Versioning?**
   - **Answer:** S3 Versioning allows you to keep multiple versions of an object in the same bucket. This is useful for data recovery and archiving.

5. **What are S3 Storage Classes?**
   - **Answer:** S3 offers different storage classes, such as Standard, Intelligent-Tiering, Standard-IA (Infrequent Access), and Glacier for archival storage, each optimized for different use cases.

#### **Intermediate Questions:**

1. **How does S3 handle security?**
   - **Answer:** S3 provides security through bucket policies, access control lists (ACLs), encryption (both at rest and in transit), and AWS IAM roles to control access.

2. **What is S3 Cross-Region Replication?**
   - **Answer:** Cross-Region Replication automatically replicates objects from one S3 bucket to another in a different AWS region, providing disaster recovery and compliance benefits.

3. **What is S3 Transfer Acceleration?**
   - **Answer:** S3 Transfer Acceleration enables faster uploads to S3 by using optimized network paths and Amazon CloudFront edge locations to improve transfer speeds globally.

4. **How do you optimize costs in S3?**
   - **Answer:** You can optimize costs by using lifecycle policies to move data between storage classes (e.g., from Standard to Glacier) based on access patterns and deleting unnecessary versions of files.

5. **What is S3 Event Notification?**
   - **Answer:** S3 Event Notification allows you to configure S3 to trigger actions (such as Lambda functions or SNS notifications) when certain events occur, such as object creation or deletion.

---

### **Terraform**

#### **Basic Questions:**

1. **What is Terraform?**
   - **Answer:** Terraform is an open-source Infrastructure as Code (IaC) tool that allows users to define and provision infrastructure using a declarative configuration language.

2. **What is a Terraform provider?**
   - **Answer:** A provider is a plugin in Terraform that defines the resources for a specific cloud platform or service, such as AWS, Azure, or Google Cloud.

3. **What are Terraform modules?**
   - **Answer:** Modules are reusable, self-contained components that contain multiple resources and can be used to manage common infrastructure components like VPCs, databases, etc.

4. **What is a Terraform state file?**
   - **Answer:** The state file in Terraform stores the current state of the infrastructure managed by Terraform. It helps to track changes and ensures that the actual infrastructure matches the declared configuration.

5. **How do you manage remote state in Terraform?**
   - **Answer:** Remote state is managed using backend configurations like S3 (for AWS) or Terraform Cloud. This allows multiple team members to collaborate and avoid state conflicts.

#### **Intermediate Questions:**

1. **What is Terraform Plan and Apply?**
   - **Answer:** `terraform plan` generates an execution plan showing what actions Terraform will take to change the infrastructure, while `terraform apply` applies the changes to the infrastructure.

2. **How do you use Terraform workspaces?**
   - **Answer:** Workspaces in Terraform allow for managing multiple environments (e.g., dev, test, prod) within the same configuration by keeping separate state files for each environment.

3. **How can you handle secret management in Terraform?**
   - **Answer:** Terraform integrates with secret management services like AWS Secrets Manager, Vault, or environment variables to securely manage and access secrets within the configuration.

4. **What is a Terraform lifecycle block?**
   - **Answer:** The lifecycle block in Terraform defines behavior for resource creation, updates, or deletion. It includes options like `create_before_destroy`, `prevent_destroy`, and `ignore_changes`.

5. **What is a data source in Terraform?**
   - **Answer:** A data source is used to query and reference existing infrastructure resources outside of Terraform's control. For example, you can reference existing VPCs or security groups without managing them directly.

---

### **Jenkins**

#### **Basic Questions:**

1

. **What is Jenkins?**
   - **Answer:** Jenkins is an open-source automation server used to automate tasks related to building, testing, and deploying software applications, commonly used for Continuous Integration/Continuous Deployment (CI/CD).

2. **What is a Jenkins pipeline?**
   - **Answer:** A Jenkins pipeline is a suite of automated processes that define how the software should be built, tested, and deployed. It can be written as a code using the `Jenkinsfile`.

3. **What is a Jenkins job?**
   - **Answer:** A Jenkins job is a task or a sequence of steps executed in Jenkins. It can be configured to run tasks like compiling code, running tests, and deploying applications.

4. **What are Jenkins agents?**
   - **Answer:** Jenkins agents are nodes that run jobs on behalf of the master node. They are used to distribute the workload and scale the build environment.

5. **What is Jenkins Blue Ocean?**
   - **Answer:** Jenkins Blue Ocean is a modern, user-friendly interface for Jenkins, designed to simplify the visualization and creation of Jenkins pipelines.

#### **Intermediate Questions:**

1. **What is the use of Jenkinsfile?**
   - **Answer:** Jenkinsfile is a text file that contains the definition of a Jenkins pipeline in a declarative or scripted syntax. It enables versioning of the CI/CD pipeline as code.

2. **What are Jenkins plugins?**
   - **Answer:** Plugins in Jenkins extend its functionality to support additional tools and services. For example, plugins can integrate Jenkins with Git, Docker, Kubernetes, Slack, etc.

3. **How do you secure Jenkins?**
   - **Answer:** Jenkins can be secured by enabling Role-Based Access Control (RBAC), securing Jenkins via SSL, limiting access to sensitive jobs, and using appropriate credentials management systems.

4. **What is a post-build action in Jenkins?**
   - **Answer:** Post-build actions are tasks that are executed after the build completes. Examples include sending notifications, archiving artifacts, or triggering downstream jobs.

5. **How do you implement a multi-branch pipeline in Jenkins?**
   - **Answer:** A multi-branch pipeline in Jenkins automatically creates pipelines for all branches in a repository. It detects branches, builds each one, and integrates with source control (e.g., Git).

---

### **Ansible**

#### **Basic Questions:**

1. **What is Ansible?**
   - **Answer:** Ansible is an open-source configuration management tool that automates the provisioning, configuration, and management of infrastructure. It is agentless and uses SSH for communication.

2. **What are Playbooks in Ansible?**
   - **Answer:** Playbooks are YAML files that define a set of tasks to be executed on remote hosts. They describe automation tasks in a human-readable format.

3. **What are Ansible Roles?**
   - **Answer:** Roles in Ansible are a way to organize playbooks and associated files. A role contains tasks, handlers, variables, files, and templates, and can be easily reused and shared.

4. **What is an Inventory file in Ansible?**
   - **Answer:** The inventory file defines the hosts and groups of hosts where Ansible will run its tasks. It can be a static file or dynamically generated using scripts.

5. **What is an Ansible ad-hoc command?**
   - **Answer:** An ad-hoc command is a one-time Ansible command used to execute a single task without writing a playbook, often used for quick tasks like restarting a service.

#### **Intermediate Questions:**

1. **How does Ansible handle idempotency?**
   - **Answer:** Ansible ensures idempotency by only making changes when necessary. It checks the current state of the system before making changes, preventing repeated actions that could cause issues.

2. **What is Ansible Galaxy?**
   - **Answer:** Ansible Galaxy is a community hub where users can share and download roles and collections. It allows you to reuse pre-built roles to simplify your automation tasks.

3. **What are Ansible Handlers?**
   - **Answer:** Handlers are special tasks that are only executed if notified by other tasks. They are typically used for tasks like restarting a service when configuration files are changed.

4. **What is the difference between `ansible-playbook` and `ansible` commands?**
   - **Answer:** `ansible` is used for running ad-hoc commands on remote systems, while `ansible-playbook` runs entire playbooks, which are more complex and contain multiple tasks.

5. **How do you manage variables in Ansible?**
   - **Answer:** Variables in Ansible can be managed in multiple places, including playbooks, inventory files, role defaults, or external variable files. They allow you to parameterize tasks for reusability.