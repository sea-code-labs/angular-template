const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const [, , name] = process.argv;

if (!name) {
  console.error('Please provide the name of the library.');
  process.exit(1);
}

try {
  execSync(`ng generate library ${name} --project-root=projects/libs/${name}`, { stdio: 'inherit' });

  const angularJsonPath = path.join(process.cwd(), 'angular.json');
  const angularJson = JSON.parse(fs.readFileSync(angularJsonPath, 'utf-8'));

  if (angularJson.projects && angularJson.projects[name]) {
    angularJson.projects[name].architect.test.options.karmaConfig = 'karma.conf.js';
    fs.writeFileSync(angularJsonPath, JSON.stringify(angularJson, null, 2));
    console.log(`Added karmaConfig to ${name} in angular.json`);
  } else {
    console.error(`Library ${name} not found in angular.json`);
  }
} catch (error) {
  console.error('Error generating library or updating angular.json:', error.message);
  process.exit(1);
}
