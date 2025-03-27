import crypto from 'crypto'
import dotenv from 'dotenv';
dotenv.config();
const ENCRYPT_KEY: string = String(process.env.ENCRYPT_KEY);

const IV = crypto.randomBytes(16).toString("hex").slice(0, 16); // 16-byte IV

// Encrypt function
export function encrypt(text: string): string {
    const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(ENCRYPT_KEY), IV);
    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex");
    return `${IV}:${encrypted}`; // Store IV with the encrypted data
}

// Decrypt function
export function decrypt(encryptedText: string): string {
    const [iv, encrypted] = encryptedText.split(":");
    const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(ENCRYPT_KEY), iv);
    let decrypted = decipher.update(encrypted, "hex", "utf-8");
    decrypted += decipher.final("utf-8");
    return decrypted;
}