class Favourite {
    private static $listFavorBtn : NodeListOf<HTMLElement> = document.querySelectorAll(".js-favBtn-elm");
    private $store : any; 
    private $favorBtn : HTMLElement;
    private $currentPostId: string | undefined;
    private $favorListCookie : any ;
    static init() {
      var favCookieStore = new CookieStore('fav_item')
      if (this.$listFavorBtn) {
        this.$listFavorBtn.forEach((favBtn) => {
          new Favourite(favBtn,favCookieStore);
        });
      }
    }

    constructor($elm : HTMLElement,$store : any) {
      this.clickEvent = this.clickEvent.bind(this);
      this.$store = $store;
      this.$favorBtn = $elm;
      this.$currentPostId = this.$favorBtn.getAttribute("data-postid")?.toString();
      this.$favorListCookie = this.getCookie("test_fav");
      this.addActiveByPostId(this.$favorBtn, this.$currentPostId);
      this.addEvent();
    }

    private clickEvent(e : Event) {
      this.$favorListCookie = this.getCookie("test_fav");
        
      if (this.$favorListCookie.includes(this.$currentPostId)) {
        let idx = this.$favorListCookie.indexOf(this.$currentPostId?.toString());
        this.$favorListCookie.splice(idx, 1);
        this.$favorBtn.classList.remove("is-active");
      } else {
        this.$favorListCookie.push(this.$currentPostId);
        this.$favorBtn.classList.add("is-active");
      }
      this.setCookie("test_fav", this.$favorListCookie, 3);
      this.checkActive();
      e.stopPropagation();
    }

    private addEvent() {
      this.$favorBtn.addEventListener("click", this.clickEvent, true);
    }

    private addActiveByPostId($elm : HTMLElement, $postId:string|undefined) {
      this.$favorListCookie = this.getCookie("test_fav");

      if (
        !$elm.classList.contains("is-active") &&
        this.$favorListCookie.includes($postId)
      ) {
        $elm.classList.add("is-active");
      }
    }

    private checkActive() {
      this.$favorListCookie = this.getCookie("test_fav");

      let _self = this;
      const listBtn = document.querySelectorAll(".js-favBtn-elm");
      listBtn.forEach((btn) => {
        let postId = btn.getAttribute("data-postid");
        if (
          !btn.classList.contains("is-active") &&
          _self.$favorListCookie.includes(postId)
        ) {
          btn.classList.add("is-active");
        } else if (!_self.$favorListCookie.includes(postId)) {
          btn.classList.remove("is-active");
        }
      });
    }

    private getCookie(cookieName:string) {
      let name = cookieName + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return JSON.parse(c.substring(name.length, c.length));
        }
      }
      return [];
    }
    private setCookie(cookieName:string, cookievalue:string[], exdays:number) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie =
        cookieName +
        "=" +
        JSON.stringify(cookievalue) +
        ";" +
        expires +
        ";path=/";
    }
  }