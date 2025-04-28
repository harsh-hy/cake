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
                    // Add debugging steps
                    echo 'Running Docker Compose commands'
                    sh 'docker --version'  // Check if Docker is available
                    sh 'docker-compose --version'  // Check if Docker Compose is available

                    // Run docker-compose commands
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
