class CookieStore extends BaseStore{
    private cookieName : string
    constructor(cookieName:string,initialStore = []){
        super(initialStore);
        this.cookieName = cookieName;
        this.store = [...this.getCookie()]
    }

    private setCookie(cookievalue:any[], exdays:number) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie =
          this.cookieName +
          "=" +
          JSON.stringify(cookievalue) +
          ";" +
          expires +
          ";path=/";
      }

    private getCookie() : any {
        const name = this.cookieName + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return JSON.parse(c.substring(name.length, c.length));
          }
        }
        return null;
    }
}