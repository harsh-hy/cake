pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "cakes-n-shape"
    }

    stages {
        stage('Checkout') {
            steps {
<<<<<<< HEAD
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                dir('FRONTEND') {
                    sh 'npm install'
                    sh 'npm run build'
=======
                git branch: 'main', url: 'https://github.com/harsh-hy/cake'
            }
        }

        stage('Build and Deploy') {
            agent {
                docker {
                    image 'docker:latest'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
>>>>>>> 09914c944fd99f6a89df160c8d312b7a264a2c58
                }
            }
            steps {
                sh '''
                    docker --version
                    docker-compose --version
                    docker-compose -f docker-compose.yml down || true
                    docker-compose -f docker-compose.yml up -d --build
                '''
            }
        }

        stage('Build Backend') {
            steps {
                dir('BACKEND') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-credentials', variable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u your-dockerhub-username --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add deployment steps here
            }
        }
   // filepath: c:\projj\Cakes-N-Shape\Jenkinsfile
pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "cakes-n-shape"
    }

<<<<<<< HEAD
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                dir('FRONTEND') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('BACKEND') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-credentials', variable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u your-dockerhub-username --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add deployment steps here
            }
        }
   
=======
    post {
        always {
            echo 'Pipeline executed!'
        }
    }
}
>>>>>>> 09914c944fd99f6a89df160c8d312b7a264a2c58
