---
title: GitLab CI YML Files
description: Gitlab's CI YML files for different projects
---



## Epariksha YML

```
stages:
  - save
  - deploy

save:    
  stage: save
  tags:
    - epariksha-runner
  script:
    - echo "-------- Job Running ----------"
  artifacts:
    paths:
        - ./Deployables/


deploy:
  stage: deploy
  tags:
    - epariksha-runner
  before_script:
    - 'command -v ssh-agent >/dev/null || ( apk add --update openssh )'
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - ssh-keyscan 192.168.80.149 >> ~/.ssh/known_hosts
    - chmod 644 ~/.ssh/known_hosts
  script:
    - scp -o StrictHostKeyChecking=no ./Deployables/eParikshaSF.war root@192.168.80.149:/home/theone
    - ssh -o StrictHostKeyChecking=no root@192.168.80.149 "cp /home/theone/eParikshaSF.war /usr/share/tomcat/webapps"
    - echo "------- WAR File has been transferred to the Remote Server --------"

#   after_script:
#     - curl http://192.168.80.149:8080/

```

________________________________________________________________________

## EurekaServer Shell YML

```

stages:
  - build
  - deploy

build:     
  stage: build
  tags:
    - debian-backrunner
  script:
    - gradle clean
    - gradle build
    - echo "----------- Build Generated Successfully -----------"
  artifacts:
    paths:
        - ./build/libs/

deploy:
  stage: deploy
  tags:
    - debian-backrunner
  before_script:
    - 'command -v ssh-agent >/dev/null || ( apk add --update openssh )' 
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - ssh-keyscan 192.168.80.149 >> ~/.ssh/known_hosts
    - chmod 644 ~/.ssh/known_hosts
  script:
    - scp -o StrictHostKeyChecking=no ./build/libs/eurekaserver-0.0.1-SNAPSHOT.war theone@192.168.80.149:/home/theone
    - echo "---- WAR File has been transferred ----"
    - ssh -o StrictHostKeyChecking=no theone@192.168.80.149 "export PATH=$PATH:/opt/jdk-17/bin; java -jar /home/theone/eurekaserver-0.0.1-SNAPSHOT.war &> /dev/null & echo 'done'"

```

## EurekaServer Docker YML

```
stages:
  - build
  - deploy

build:     
  stage: build
  tags:
    - docker-runner
  script:
    - gradle clean
    - gradle build
    - echo "----------- Build Generated Successfully -----------"
  artifacts:
    paths:
        - ./build/libs/

deploy:
  stage: deploy
  image: alpine:latest
  tags:
    - docker-runner
  before_script:
    - 'command -v ssh-agent >/dev/null || ( apk add --update openssh )' 
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - ssh-keyscan 192.168.80.149 >> ~/.ssh/known_hosts
    - chmod 644 ~/.ssh/known_hosts
  script:
    - ls
    - whoami
    # - scp -o StrictHostKeyChecking=no ./build/libs/eurekaserver-0.0.1-SNAPSHOT.war theone@192.168.80.149:/home/theone
    - ssh -o StrictHostKeyChecking=no theone@192.168.80.149 "export PATH=$PATH:/opt/jdk-17/bin; java -jar /home/theone/eurekaserver-0.0.1-SNAPSHOT.war &> /dev/null & echo 'done'"

```