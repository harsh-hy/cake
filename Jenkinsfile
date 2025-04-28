pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/harsh-hy/cake'
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    docker.image('docker/compose:1.29.2').inside('--network jenkins') {
                        // Install Docker CLI inside the container
                        sh 'apt-get update && apt-get install -y docker.io'
                        sh 'docker-compose down || true'
                        sh 'docker-compose up -d --build'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline executed!'
        }
    }
}
