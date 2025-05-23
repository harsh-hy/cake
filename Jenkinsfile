pipeline {
    agent any

    environment {
        IMAGE_NAME = "harshyadav2/cake"
    }

    stages {
        stage('1. Checkout Code') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }

        stage('2. Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image: ${env.IMAGE_NAME}:${env.BUILD_NUMBER}"
                    def image = docker.build("${env.IMAGE_NAME}:${env.BUILD_NUMBER}", ".")
                    echo "Tagging image as latest..."
                    image.tag('latest')
                }
            }
        }

        stage('3. Push Docker Image') {
           
            steps {
                script {
                    echo "Pushing Docker image: ${env.IMAGE_NAME}:${env.BUILD_NUMBER}"
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        docker.image("${env.IMAGE_NAME}:${env.BUILD_NUMBER}").push()
                        docker.image("${env.IMAGE_NAME}:latest").push()
                    }
                }
            }
        }

        stage('4. Deploy Cakes-n-Bakes') {
            steps {
                script {
                    echo "Deploying container..."
                    def containerName = "cake-N-Bakes-live"
                    def hostPort = 8081

                    sh """
                        docker stop ${containerName} || true
                        docker rm ${containerName} || true
                        docker run -d --name ${containerName} -p ${hostPort}:80 ${env.IMAGE_NAME}:${env.BUILD_NUMBER}
                    """
                    echo "Cakes-N-Bakes deployed at http://<jenkins-agent-ip>:${hostPort}"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
