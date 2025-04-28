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
                    // Use docker:19.03.12 which has docker-compose
                    docker.image('docker:19.03.12').inside('--network jenkins') {
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
