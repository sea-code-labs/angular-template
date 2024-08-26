const { execSync } = require('child_process');
const [,, name] = process.argv;

if (!name) {
  console.error('Please provide the name of the application.');
  process.exit(1);
}

try {
  execSync(`ng generate application ${name} --project-root=projects/apps/${name} --style=scss`, { stdio: 'inherit' });
} catch (error) {
  console.error('Error generating application:', error.message);
  process.exit(1);
}
