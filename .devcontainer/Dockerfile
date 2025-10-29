# Dockerfile for the devcontainer
FROM mcr.microsoft.com/playwright:v1.56.1-jammy

# Switch to root user to install system dependencies
USER root

# Set the DEBIAN_FRONTEND to noninteractive to avoid prompts during apt-get install
ENV DEBIAN_FRONTEND=noninteractive

# Copy the python version file into the image.
COPY .python-version /tmp/.python-version

# Read the Python version from the file and store it in a temporary file for later steps.
RUN echo "PYTHON_VERSION=$(cat /tmp/.python-version | tr -d '[:space:]')" > /tmp/build_env

# Add the deadsnakes PPA to get access to newer Python versions.
RUN apt-get update && apt-get install -y --no-install-recommends software-properties-common && \
    add-apt-repository -y ppa:deadsnakes/ppa

# Install the specified Python version, pip, Pandoc, and make.
RUN . /tmp/build_env && \
    apt-get update && apt-get install -y --no-install-recommends \
    python${PYTHON_VERSION} \
    python3-pip \
    pandoc \
    make \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the newly installed Python version as the default 'python3'.
RUN . /tmp/build_env && \
    update-alternatives --install /usr/bin/python3 python3 /usr/bin/python${PYTHON_VERSION} 1 \
    && rm /tmp/.python-version && rm /tmp/build_env

# Set the working directory
WORKDIR /workspaces/architecture

# Copy Node.js dependency files and install them as root
COPY package.json package-lock.json ./
RUN npm install && npx playwright install --with-deps

# Change ownership of the workspace directory to the non-root user
RUN chown -R pwuser:pwuser /workspaces/architecture

# Switch to the non-root user to install user-specific tools
USER pwuser

# Install uv using the recommended installer and add it to the user's PATH.
RUN curl -LsSf https://astral.sh/uv/install.sh | sh
ENV PATH="/home/pwuser/.local/bin:${PATH}"

# Copy Python dependency files and install them as the non-root user
COPY --chown=pwuser:pwuser .python-version pyproject.toml uv.lock ./
RUN uv sync
