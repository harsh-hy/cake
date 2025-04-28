pipeline {
    agent {
        docker {
            image 'docker:24.0.5-cli'  // Lightweight image with Docker CLI
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket to control host Docker
        }
    }

    environment {
        DOCKER_COMPOSE_VERSION = '1.29.2'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/harsh-hy/cake'
            }
        }

        stage('Install Docker Compose') {
            steps {
                sh '''
                apk add --no-cache curl
                curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
                chmod +x /usr/local/bin/docker-compose
                docker-compose --version
                '''
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh '''
                docker-compose down || true
                docker-compose up -d --build
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline executed!'
            sh 'docker-compose ps || true' // Show running containers
        }
    }
}
