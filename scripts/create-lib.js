const { execSync } = require('child_process');
const [,, name] = process.argv;

if (!name) {
  console.error('Please provide the name of the library.');
  process.exit(1);
}

try {
  execSync(`ng generate library ${name} --project-root=projects/libs/${name}`, { stdio: 'inherit' });
} catch (error) {
  console.error('Error generating library:', error.message);
  process.exit(1);
}
