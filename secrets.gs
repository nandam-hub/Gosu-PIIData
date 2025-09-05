package util.security

/**
 * 🚨 DEMO PURPOSES ONLY!
 * This file contains hardcoded secrets.
 * Never use this in production.
 *
 * Use Azure Key Vault, AWS Secrets Manager, or
 * environment variables instead.
 */
class HardcodedSecrets {

  // Example of a hardcoded API key (dummy value)
  static var API_KEY: String = "abcd1234-TEST-ONLY-5678efgh"

  // Example of a hardcoded database password (dummy value)
  static var DB_PASSWORD: String = "SuperSecret!@#123"

  // Example of a hardcoded SSN (dummy test SSN, not real)
  static var TEST_SSN: String = "123-45-6789"

  /**
   * Example function that returns masked secret info.
   */
  static function getMaskedSecrets(): String {
    return "API_KEY=" + mask(API_KEY) +
           ", DB_PASSWORD=" + mask(DB_PASSWORD) +
           ", TEST_SSN=" + mask(TEST_SSN)
  }

  private static function mask(value: String): String {
    if (value == null or value.length() <= 4) return "****"
    return "****" + value.substring(value.length() - 4)
  }
}
