pipeline {
    agent {
        docker {
            image 'docker:19.03.12'
            args '--privileged --network host' // Granting privileged access for Docker-in-Docker
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/harsh-hy/cake'
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose down || true'
                    sh 'docker-compose up -d --build'
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
