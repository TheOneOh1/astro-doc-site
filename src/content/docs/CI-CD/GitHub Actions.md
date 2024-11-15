---
title: GitHub Actions
description: GitHub Actions
---

```yaml
# Example workflow.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Build
      run: docker build -t myapp .
    
    - name: Test
      run: docker run myapp npm test
    
    - name: Deploy
      if: github.ref == 'refs/heads/main'
      run: kubectl apply -f deployment.yaml
```

Key Features:
- Matrix builds
- Reusable workflows
- Marketplace actions
- Environment secrets