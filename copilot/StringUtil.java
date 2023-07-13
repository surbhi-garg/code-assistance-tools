 class StringUtil {

 public boolean checkIfStringContainsGoogle(String str) {
    //add null check on str here
              try {
            if (str.toLowerCase().contains("google")) {
                return true;
            }
            else {
                return false;
            }
        }
        catch(Exception e) {
            throw new RuntimeException(e);
        }
    }
}

