---
title: GitLab CI
description: GitLab CI
---

```yaml
# Example .gitlab-ci.yml
stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - docker build -t myapp .
  
test:
  stage: test
  script:
    - docker run myapp npm test

deploy:
  stage: deploy
  script:
    - kubectl apply -f deployment.yaml
  only:
    - main
```

Key Features:
- Built-in container registry
- Auto DevOps
- Review apps
- Environment management