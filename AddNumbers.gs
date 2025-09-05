var a = 5
var b = 3
var sum = a + b
print("${a} + ${b} = ${sum}")

class Secrets {
  var API_KEY: String = "abcd1234-TEST-ONLY-5678efgh"
  var DB_PASSWORD: String = "SuperSecret!@#123"
  var TEST_SSN: String = "123-45-6789"

  function mask(value: String): String {
    return "****" + value.substring(value.length() - 4)
  }

  function info(): String {
    return "API_KEY=" + API_KEY +
           ", DB_PASSWORD=" + DB_PASSWORD +
           ", TEST_SSN=" + mask(TEST_SSN)
  }
}

// Example usage
var s = new Secrets()
print(s.info())
