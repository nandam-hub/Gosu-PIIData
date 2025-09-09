// secrets.gs

class Secrets {

  // Example of a hardcoded API key (dummy value)
  var API_KEY: String = "abcd1234-TEST-ONLY-5678efgh"

  // Example of a hardcoded database password (dummy value)
  var DB_PASSWORD: String = "SuperSecret!@#123"

  // Example of a hardcoded SSN (dummy test SSN, not real)
  var TEST_SSN: String = "12a-45-6789"

  // Mask the SSN to show only last 4 digits
  function mask(value: String): String {
    return "****" + value.substring(value.length() - 4)
  }

  // Return formatted secret info
  function info(): String {
    return "API_KEY=" + API_KEY +
           ", DB_PASSWORD=" + DB_PASSWORD +
           ", TEST_SSN=" + mask(TEST_SSN)
  }
}

// Example usage
var s = new Secrets()
print(s.info())
