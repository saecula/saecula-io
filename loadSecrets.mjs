import keychain from 'keychain';
import path from 'path';
import fs from 'fs';

const tempEnvPath = path.join(process.cwd(), '.env.local.tmp');

const cleanup = () => {
    try {
        if (fs.existsSync(tempEnvPath)) {
            fs.unlinkSync(tempEnvPath);
        }
    } catch (error) {
        console.error('Error cleaning up temp file:', error);
    }
};

process.on('exit', cleanup);
process.on('SIGINT', () => process.exit());
process.on('SIGTERM', () => process.exit());

async function loadSecrets() {
    try {
        const privateKey = await new Promise((resolve, reject) => {
            keychain.getPassword({
                account: 'statsdb',
                service: 'saecula-io',
            }, (err, password) => {
                if (err) reject(err);
                resolve(password);
            });
        });

        // Merge with existing env vars
        const secrets = {
            ...envConfig,
            STATSDB_PRIVATE_KEY: privateKey,
        };

        const envContent = Object.entries(secrets)
            .map(([key, value]) => `${key}=${value}`)
            .join('\n');

        fs.writeFileSync(tempEnvPath, envContent);

    } catch (error) {
        console.error('Error loading secrets:', error);
        process.exit(1);
    }
}

loadSecrets();