---
title: Jenkins
description: Jenkins
---


```groovy
// Example Jenkinsfile
pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t myapp .'
            }
        }
        
        stage('Test') {
            steps {
                sh 'docker run myapp npm test'
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}
```

Key Features:
- Extensive plugin ecosystem
- Distributed builds
- Pipeline as code
- Multi-branch pipelines