pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "cakes-n-shape"
    }

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
   // filepath: c:\projj\Cakes-N-Shape\Jenkinsfile
pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "cakes-n-shape"
    }

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
   