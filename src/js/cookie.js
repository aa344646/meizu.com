
    const cookie = {
      get(key) {
        if (document.cookie) {
          let arr = document.cookie.split("; "); 
          for (let i in arr) {
            let item = arr[i].split("=");
            if (item[0] === key) return item[1];
          }
          return ""; 
        }
      },
      set(key, value, day) {
        if (typeof day === "number") {
          let d = new Date();
          d.setDate(d.getDate() + day);
          document.cookie = `${key}=${value};expires=${d};path=/`;
        } else {
          document.cookie = `${key}=${value};path=/`;
        }
      },
      remove(key) {
        this.set(key, "", -1);
      },
    };
  

  export{cookie};

