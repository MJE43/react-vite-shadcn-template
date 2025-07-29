#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function validateInput(input, fieldName) {
  if (!input.trim()) {
    console.log(`❌ ${fieldName} cannot be empty!`);
    return false;
  }
  return true;
}

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${filePath} not found, skipping...`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  for (const [placeholder, value] of Object.entries(replacements)) {
    content = content.replace(new RegExp(placeholder, 'g'), value);
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated ${filePath}`);
}

function createEnvExample(replacements) {
  const envContent = `# App Configuration
VITE_APP_TITLE=${replacements['{{project_title}}']}
VITE_APP_DESCRIPTION=${replacements['{{project_description}}']}

# API Configuration
# VITE_API_URL=http://localhost:3001/api
# VITE_API_KEY=your_api_key_here

# Feature Flags
# VITE_ENABLE_ANALYTICS=false
# VITE_ENABLE_LOGGING=true

# Third-party Services
# VITE_GOOGLE_ANALYTICS_ID=
# VITE_SENTRY_DSN=

# Development
# VITE_DEV_TOOLS=true
`;

  try {
    fs.writeFileSync(path.join(__dirname, '.env.example'), envContent);
    console.log('✅ Created .env.example');
  } catch (error) {
    console.log('⚠️  Could not create .env.example:', error.message);
  }
}

async function setupProject() {
  console.log('🚀 Welcome to the Project Template Setup!\n');
  console.log('This will customize your project with your information.\n');

  let projectName, projectDescription, authorName, authorEmail;

  // Gather and validate project information
  do {
    projectName = await question('📦 Project name (kebab-case recommended): ');
  } while (!validateInput(projectName, 'Project name'));

  do {
    projectDescription = await question('📝 Project description: ');
  } while (!validateInput(projectDescription, 'Project description'));

  do {
    authorName = await question('👤 Author name: ');
  } while (!validateInput(authorName, 'Author name'));

  authorEmail = await question('📧 Author email (optional): ');

  // Create replacements object
  const replacements = {
    '{{project_name}}': projectName.toLowerCase().replace(/\s+/g, '-'),
    '{{project_description}}': projectDescription,
    '{{author_name}}': authorName,
    '{{author_email}}': authorEmail || '',
    '{{current_year}}': new Date().getFullYear().toString(),
    '{{project_title}}': projectName
      .split(/[-_\s]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  };

  console.log('\n🔄 Setting up your project...\n');

  // Files to update
  const filesToUpdate = [
    'package.json',
    'README.md',
    'index.html',
    'src/App.tsx',
    'LICENSE'
  ];

  // Update files
  filesToUpdate.forEach(file => {
    replaceInFile(path.join(__dirname, file), replacements);
  });

  // Create .env.example
  createEnvExample(replacements);

  // Create initial git commit
  const shouldGitInit = await question('\n🔧 Initialize git repository? (y/N): ');
  if (shouldGitInit.toLowerCase() === 'y' || shouldGitInit.toLowerCase() === 'yes') {
    try {
      const { execSync } = await import('child_process');
      execSync('git init', { stdio: 'inherit' });
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "Initial commit from template"', { stdio: 'inherit' });
      console.log('✅ Git repository initialized');
    } catch (error) {
      console.log('⚠️  Could not initialize git repository:', error.message);
    }
  }

  // Clean up setup script
  try {
    fs.unlinkSync(path.join(__dirname, 'setup-project.js'));
    console.log('✅ Cleaned up setup script');
  } catch (error) {
    console.log('⚠️  Could not remove setup script:', error.message);
  }

  console.log('\n🎉 Project setup complete!');
  console.log('\nNext steps:');
  console.log('1. Run: pnpm install');
  console.log('2. Run: pnpm dev');
  console.log('3. Start building your amazing project!');
  console.log('\n💡 Add shadcn/ui components with: npx shadcn@latest add [component-name]');

  rl.close();
}

setupProject().catch((error) => {
  console.error('❌ Setup failed:', error.message);
  rl.close();
  process.exit(1);
});
