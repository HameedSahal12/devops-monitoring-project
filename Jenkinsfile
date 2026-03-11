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

        stage('Check Docker Images') {
            steps {
                bat 'docker images'
            }
        }

    }
}
