pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/HameedSahal12/devops-monitoring-project.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                bat 'docker build -t devops-backend ./backend'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                bat 'docker build -t devops-frontend ./frontend'
            }
        }

        stage('Docker Hub Login') {
            steps {
                withCredentials([string(credentialsId: 'DOCKER_TOKEN', variable: 'DOCKER_TOKEN')]) {
                    bat 'docker login -u hameedsahal12 -p %DOCKER_TOKEN%'
                }
            }
        }

        stage('Tag Images') {
            steps {
                bat 'docker tag devops-backend hameedsahal12/devops-backend:latest'
                bat 'docker tag devops-frontend hameedsahal12/devops-frontend:latest'
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                bat 'docker push hameedsahal12/devops-backend:latest'
                bat 'docker push hameedsahal12/devops-frontend:latest'
            }
        }

        stage('Show Docker Images') {
            steps {
                bat 'docker images'
            }
        }

    }
}
