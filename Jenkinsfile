pipeline {
    agent { 
        label 'jenkins'
    }

    environment {
        IMAGE_NAME = "myapp"
        NODE_IMAGE = "node:18-alpine"
        APP_PORT = "3000"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "🔄 Récupération du code depuis Git"
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "📦 Installation des dépendances Node.js"
                sh """
                    # Crée un dossier temporaire pour build Docker
                    mkdir -p tmp_build
                    cp -r * tmp_build/
                    cd tmp_build
                    ${NODE_IMAGE} || true
                    docker run --rm -v \$(pwd):/app -w /app ${NODE_IMAGE} npm install
                """
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "🐳 Build de l'image Docker"
                sh """
                    docker build -t ${IMAGE_NAME} .
                """
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Lancement du container Docker"
                sh """
                    # Stop et supprime l'ancien container si il existe
                    if [ \$(docker ps -a -q -f name=${IMAGE_NAME}) ]; then
                        docker rm -f ${IMAGE_NAME}
                    fi
                    docker run -d -p ${APP_PORT}:${APP_PORT} --name ${IMAGE_NAME} ${IMAGE_NAME}
                """
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline terminé avec succès !"
        }
        failure {
            echo "❌ Pipeline échoué !"
        }
    }
}
