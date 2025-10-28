# Dockerfile for the devcontainer
FROM mcr.microsoft.com/playwright:latest

# Switch to root user to install system dependencies
USER root

# Copy the python version file into the image. The build context is the .devcontainer folder,
# so we need to go up one level to find the file.
COPY ../.python-version /tmp/.python-version

# Read the Python version from the file and install dependencies in a single layer
RUN PYTHON_VERSION=$(cat /tmp/.python-version | tr -d '[:space:]') && \
    echo "--- Installing Python version ${PYTHON_VERSION} and other dependencies ---" && \
    apt-get update && apt-get install -y --no-install-recommends \
    software-properties-common \
    && add-apt-repository -y ppa:deadsnakes/ppa \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    python${PYTHON_VERSION} \
    python3-pip \
    pandoc \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && echo "--- Setting python${PYTHON_VERSION} as default python3 ---" \
    && update-alternatives --install /usr/bin/python3 python3 /usr/bin/python${PYTHON_VERSION} 1 \
    && rm /tmp/.python-version

# Install uv using the recommended installer
RUN curl -LsSf https://astral.sh/uv/install.sh | sh
ENV PATH="/root/.uv/bin:${PATH}"

# Switch back to the non-root user from the base image
USER pwuser

# Set the working directory
WORKDIR /workspaces/architecture

# Copy dependency files and install dependencies
COPY --chown=pwuser:pwuser ../package.json ../package-lock.json ./
RUN npm install

COPY --chown=pwuser:pwuser ../pyproject.toml ../uv.lock ./
RUN uv sync
