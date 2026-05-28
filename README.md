# ☁️ Cutting-Edge Entity Hosting | AWS Infrastructure Architecture

![Status](https://img.shields.io/badge/Status-Operational-success?style=flat-square)
![AWS](https://img.shields.io/badge/Amazon_AWS-Cloud_Computing-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Linux](https://img.shields.io/badge/OS-Amazon_Linux_2023-FCC624?style=flat-square&logo=linux&logoColor=black)
![Apache](https://img.shields.io/badge/Server-Apache_HTTP-D22128?style=flat-square&logo=apache&logoColor=white)
![HTML5](https://img.shields.io/badge/Frontend-HTML5/CSS3-E34F26?style=flat-square&logo=html5&logoColor=white)

**Cutting-Edge Entity Hosting** is a foundational cloud infrastructure project designed to simulate enterprise-grade web application deployment. Moving beyond local development, this architecture utilizes **Amazon Web Services (AWS)** to provision, secure, and serve a live web entity using robust cloud networking principles.

By leveraging remote tunneling and secure shell subsystems, this project demonstrates the complete lifecycle of cloud server management—from initial VPC security group routing to final frontend delivery.

---

## 🏛️ System Features

| Feature | Description |
| :--- | :--- |
| **Compute Provisioning** | Utilizes Amazon EC2 (`t2.micro`) instances running Amazon Linux 2023 to provide scalable, reliable backend compute power. |
| **Secure VPC Routing** | Implements custom Security Groups to isolate network traffic, strictly permitting inbound connections only via Port 22 (SSH), Port 80 (HTTP), and Port 443 (HTTPS). |
| **Remote Server Management** | Employs MobaXterm for encrypted SSH access and seamless SFTP file transfers, bypassing standard terminal limitations for efficient deployment. |
| **High-Availability Web Server** | Configured with an Apache (`httpd`) daemon set to automatically initialize on boot, ensuring continuous uptime for the hosted entity. |
| **Live UI Integration** | Serves a responsive, modern HTML/CSS interface equipped with a live server clock script, validating successful endpoint execution. |

---

## 📂 Architecture & Directory

This repository structure strictly adheres to clean version control practices, separating configuration documentation from deployable source code.

```text
EduBridge-Cloud-Hosting/
│
├── docs/                            # Additional project documentation
│   └── Cutting_Entity_Hosting.docx  # Final project report and execution flow
│
├── src/                             # Deployable Web Entity Source Code
│   ├── index.html                   # Primary web interface and layout
│   ├── script.js                    # Client-side logic for real-time server tracking
│   └── style.css                    # Custom styling, theming, and glassmorphism UI
│
├── .gitignore                       # Secures sensitive AWS credentials
├── edubridge-key.pem                # AWS Private Key (CRITICAL: Excluded from Git via .gitignore)
└── README.md                        # Project architecture and execution documentation

```

---

## ⚙️ Infrastructure Initialization & Setup

### 1. Cloud Provisioning (AWS Console)

1. Launch an **Amazon EC2 Instance** utilizing the Amazon Linux 2023 AMI.
2. Generate and securely download an RSA `.pem` key pair to your local workspace.
3. Configure **Security Groups**:
* Allow SSH traffic from Anywhere (`0.0.0.0/0`).
* Allow HTTP traffic from Anywhere (`0.0.0.0/0`).
* Allow HTTPS traffic from Anywhere (`0.0.0.0/0`).



### 2. Server Configuration (MobaXterm)

Establish an SSH connection to your EC2 Public IPv4 address using the downloaded `.pem` key, then execute the following package commands:

```bash
# Update system packages
sudo yum update -y

# Install Apache Web Server
sudo yum install httpd -y

# Initialize and enable the daemon
sudo systemctl start httpd
sudo systemctl enable httpd

# Grant directory permissions for deployment
sudo chmod 777 /var/www/html

```

### 3. Entity Deployment

1. Open the MobaXterm SFTP side-panel.
2. Navigate to the `/var/www/html` directory on the remote server.
3. Upload the contents of the local `src/` folder (`index.html`, `style.css`, `script.js`).
4. Access the live environment by navigating to the instance's Public IP address in any modern web browser.

---

## 🧠 Deployment Workflow

1. **Local Authoring:** The frontend web entity is authored and styled locally within a controlled IDE environment.
2. **Infrastructure Allocation:** AWS allocates virtual compute resources and establishes network boundaries via EC2 and VPC security protocols.
3. **Secure Tunneling:** MobaXterm bridges the local machine and the cloud server, authenticating the session via private key cryptography.
4. **Daemon Hosting:** The Apache HTTP server processes incoming web requests and serves the deployed semantic UI matrix to the end user.

---

## 👨‍💻 Author & Credits

**Abrar Sajjad Kotwal**
*B.Tech CSE (Class of 2026) | Intern*

This cloud architecture and deployment pipeline was engineered as part of the **SmartInternz** guided project curriculum, designed to establish practical proficiency in modern cloud engineering and server management.

```

```